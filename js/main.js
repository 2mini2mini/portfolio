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
