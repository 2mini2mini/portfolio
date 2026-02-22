/**
 * 프로젝트 카드 DOM 렌더링
 * - thumb: 이미지 경로 (images/projects/ 폴더)
 * - motion: Lottie JSON 경로 (있으면 썸네일 위에 모션 오버레이)
 * - 이미지 없거나 로드 실패 시 placeholder 표시
 */
function renderProjects() {
  const grid = document.querySelector(".project__grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS_DATA.map((project, index) => {
    const nameText = project.name.replace(/<[^>]*>/g, "");
    const thumbContent = project.thumb
      ? `<img src="${project.thumb}" alt="${nameText}" class="project__thumb-img" onerror="this.style.display='none';this.nextElementSibling.style.display='block';"><span class="placeholder placeholder--project project__thumb-fallback" style="display:none"></span>`
      : `<span class="placeholder placeholder--project"></span>`;

    const motionModifier = project.motionModifier ? ` project__motion--${project.motionModifier}` : "";
    const motionContent = project.motion
      ? `<div class="project__motion${motionModifier}" data-motion="${project.motion}" data-index="${index}" aria-hidden="true"></div>`
      : "";

    return `
    <a href="project-detail.html?id=${index}" class="project__card" data-category="${project.category}">
      <div class="project__thumb">
        ${thumbContent}
        ${motionContent}
        <div class="project__overlay">
          <div class="project__overlay-top">
            <span class="project__category">${project.categoryLabel}</span>
            <strong class="project__name">${project.name}</strong>
            <span class="project__tags">${project.tags}</span>
          </div>
        </div>
      </div>
    </a>
  `;
  }).join("");

  initMotionAnimations();
}

/**
 * motion 필드가 있는 카드에 Lottie 애니메이션 초기화
 */
function initMotionAnimations() {
  if (typeof lottie === "undefined") return;

  document.querySelectorAll(".project__motion[data-motion]").forEach((el) => {
    const path = el.getAttribute("data-motion");
    if (!path) return;

    lottie.loadAnimation({
      container: el,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: path,
    });
  });
}
