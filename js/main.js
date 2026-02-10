// 포트폴리오 메인 스크립트
// 스크롤 시 네비게이션 스타일 등 필요한 인터랙션 추가 가능

document.addEventListener('DOMContentLoaded', () => {
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
