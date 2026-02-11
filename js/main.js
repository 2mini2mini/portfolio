// 포트폴리오 메인 스크립트
// 스크롤 시 네비게이션 스타일 등 필요한 인터랙션 추가 가능

document.addEventListener('DOMContentLoaded', () => {
  // GNB 스크롤 시 blur 효과
  const header = document.querySelector('.header');
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
  const navLinks = document.querySelectorAll('.header__nav a[href^="#"]');
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

    navLinks.forEach((link) => {
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
