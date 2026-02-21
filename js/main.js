// 포트폴리오 메인 스크립트
// 스크롤 시 네비게이션 스타일 등 필요한 인터랙션 추가 가능

document.addEventListener('DOMContentLoaded', () => {
  // 프로젝트 카드 렌더링 (projects-data.js 데이터 기반)
  if (typeof renderProjects === 'function') {
    renderProjects();
  }

  // GNB 스크롤 시 blur 효과
  const header = document.querySelector('.header');
  const menuBtn = document.querySelector('.header__menu-btn');
  const navLinks = document.querySelectorAll('.header__nav a');

  let scrollY = 0;

  const closeMenu = () => {
    header.classList.remove('header--menu-open');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollY);
    if (menuBtn) {
      menuBtn.setAttribute('aria-label', '메뉴 열기');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  };

  const openMenu = () => {
    scrollY = window.scrollY;
    header.classList.add('header--menu-open');
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    if (menuBtn) {
      menuBtn.setAttribute('aria-label', '메뉴 닫기');
      menuBtn.setAttribute('aria-expanded', 'true');
    }
  };

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (header.classList.contains('header--menu-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 64 * 16) {
      closeMenu();
    }
  });

  const handleScroll = () => {
    if (window.scrollY > 0) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 초기 상태 체크

  // GNB 활성 메뉴 밑줄 (해당 섹션 스크롤 시)
  const navAnchorLinks = document.querySelectorAll('.header__nav a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  const updateActiveNav = () => {
    const scrollY = window.scrollY;
    const headerHeight = 100;

    let currentSection = null;
    sections.forEach((section, index) => {
      const top = section.offsetTop - headerHeight;
      const isLast = index === sections.length - 1;
      let bottom;
      if (isLast && section.closest('.contact-footer')) {
        bottom = section.closest('.contact-footer').offsetTop + section.closest('.contact-footer').offsetHeight;
      } else {
        bottom = top + section.offsetHeight;
      }
      if (scrollY >= top && scrollY < bottom) {
        currentSection = section.getAttribute('id');
      }
    });

    navAnchorLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('header__nav-link--active');
      } else {
        link.classList.remove('header__nav-link--active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  // Project Category 필터
  const categoryBtns = document.querySelectorAll('.project__filter .project__filter-btn');
  const projectCards = document.querySelectorAll('.project__card');

  const applyProjectFilter = (category) => {
    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      if (category === 'all' || cardCategory === category) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });
  };

  categoryBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      applyProjectFilter(btn.dataset.category);
    });
  });

  // 초기 로드 시 활성 탭에 맞춰 필터 적용
  const activeBtn = document.querySelector('.project__filter .project__filter-btn.is-active');
  if (activeBtn) {
    applyProjectFilter(activeBtn.dataset.category);
  }

  // AI Workflow 탭 전환 (탭 클릭 시 해당 콘텐츠 패널 표시)
  const aiTabs = document.querySelectorAll('.ai-workflow__tabs .project__filter-btn');
  const aiPanels = document.querySelectorAll('.ai-workflow__panel');

  aiTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      if (!tabId) return;

      aiTabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      aiPanels.forEach((panel) => {
        if (panel.dataset.panel === tabId) {
          panel.classList.add('is-active');
        } else {
          panel.classList.remove('is-active');
        }
      });
    });
  });

  // AI Workflow 슬라이드 prev/next 버튼 (모바일)
  document.querySelectorAll('.ai-workflow__panel').forEach((panel) => {
    const examples = panel.querySelector('.ai-workflow__examples');
    const prevBtn = panel.querySelector('.ai-workflow__slider-prev');
    const nextBtn = panel.querySelector('.ai-workflow__slider-next');

    if (!examples || !prevBtn || !nextBtn) return;

    const slideWidth = () => examples.offsetWidth;
    const scrollToSlide = (index) => {
      const scrollLeft = index * slideWidth();
      examples.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    };

    const updateDisabledState = () => {
      const width = slideWidth();
      if (width <= 0) return;
      const currentIndex = Math.round(examples.scrollLeft / width);
      const maxIndex = Math.floor(examples.scrollWidth / width) - 1;

      prevBtn.classList.toggle('is-disabled', currentIndex <= 0);
      nextBtn.classList.toggle('is-disabled', currentIndex >= maxIndex || maxIndex <= 0);
    };

    updateDisabledState();
    examples.addEventListener('scroll', updateDisabledState);
    window.addEventListener('resize', updateDisabledState);
    new ResizeObserver(updateDisabledState).observe(examples);

    prevBtn.addEventListener('click', () => {
      const currentIndex = Math.round(examples.scrollLeft / slideWidth());
      if (currentIndex > 0) scrollToSlide(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      const currentIndex = Math.round(examples.scrollLeft / slideWidth());
      const maxIndex = examples.scrollWidth / slideWidth() - 1;
      if (currentIndex < maxIndex) scrollToSlide(currentIndex + 1);
    });
  });

  // 부드러운 스크롤 (anchor 링크)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
