/**
 * 프로젝트 상세 페이지
 * - URL 쿼리 ?id=0 으로 프로젝트 인덱스 전달
 * - PROJECTS_DATA 기반으로 콘텐츠 렌더링
 */
(function () {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const project =
    typeof PROJECTS_DATA !== "undefined" && !isNaN(id)
      ? PROJECTS_DATA[id]
      : null;

  if (!project) {
    document.title = "프로젝트를 찾을 수 없습니다 | MINHEE PORTFOLIO";
    return;
  }

  if (project.category) {
    document.body.setAttribute("data-project-category", project.category);
  }

  const nameText = project.name.replace(/<[^>]*>/g, "");

  /* Hero (썸네일과 별도 이미지 사용, detail.heroBg 필수) */
  const heroBg = document.querySelector("[data-hero-bg]");
  if (heroBg && project.detail?.heroBg) {
    heroBg.style.backgroundImage = `url(${project.detail.heroBg})`;
  }

  const heroLogo = document.querySelector("[data-hero-logo]");
  if (heroLogo) {
    if (project.detail?.heroLogo) {
      heroLogo.innerHTML = project.detail.heroLogo;
    } else {
      heroLogo.style.display = "none";
    }
  }

  const heroTitle = document.querySelector("[data-hero-title]");
  if (heroTitle) {
    if (project.detail?.heroTitle) {
      heroTitle.textContent = project.detail.heroTitle;
      heroTitle.style.display = "";
    } else {
      heroTitle.style.display = "none";
    }
  }

  const heroSubtitle = document.querySelector("[data-hero-subtitle]");
  if (heroSubtitle) {
    if (project.detail?.heroSubtitle) {
      heroSubtitle.textContent = project.detail.heroSubtitle;
      heroSubtitle.style.display = "";
    } else {
      heroSubtitle.style.display = "none";
    }
  }

  /* Content */
  document.title = `${project.detail?.title || nameText} | MINHEE PORTFOLIO`;

  const detailTitle = document.querySelector("[data-detail-title]");
  if (detailTitle) {
    detailTitle.textContent = project.detail?.title || nameText;
  }

  const detailPosition = document.querySelector("[data-detail-position]");
  if (detailPosition) {
    detailPosition.textContent =
      project.detail?.position || project.categoryLabel || "-";
  }

  const detailContribution = document.querySelector(
    "[data-detail-contribution]",
  );
  if (detailContribution) {
    detailContribution.textContent = project.detail?.contribution || "-";
  }

  const detailDate = document.querySelector("[data-detail-date]");
  if (detailDate) {
    detailDate.textContent = project.detail?.date || "-";
  }

  const detailTool = document.querySelector("[data-detail-tool]");
  if (detailTool) {
    const tool = project.detail?.tool;
    if (tool) {
      detailTool.textContent = tool;
      detailTool.closest(".project-detail__meta-item").style.display = "";
    } else {
      detailTool.closest(".project-detail__meta-item").style.display = "none";
    }
  }

  const detailBody = document.querySelector("[data-detail-body]");
  if (detailBody && project.detail?.description) {
    detailBody.innerHTML = project.detail.description;
  }

  const detailCta = document.querySelector("[data-detail-cta]");
  if (detailCta) {
    const ctaUrl = project.detail?.ctaUrl;
    const ctaTextEl = detailCta.querySelector(".project-detail__cta-text");
    if (ctaTextEl) {
      ctaTextEl.textContent = project.detail?.ctaText || "사이트 바로가기";
    }
    if (ctaUrl) {
      detailCta.href = ctaUrl;
      detailCta.target = "_blank";
      detailCta.rel = "noopener noreferrer";
      detailCta.style.display = "inline-flex";
    } else {
      detailCta.style.display = "none";
    }
  }

  /* What I Focused On */
  const focusSection = document.querySelector("[data-detail-focus]");
  const focusList = document.querySelector("[data-detail-focus-list]");
  const focusSliderNav = document.querySelector("[data-detail-focus-slider-nav]");
  if (focusSection && focusList && project.detail?.focusItems?.length) {
    focusList.innerHTML = project.detail.focusItems
      .map(
        (item, i) => {
          const isAfterOnly = item.layout === "after-only";
          const isBeforeAfter =
            item.layout === "before-after" ||
            item.beforeImage ||
            item.afterImage;
          const visualHtml = isAfterOnly
            ? `
          <div class="project-detail__focus-visuals project-detail__focus-visuals--after-only">
            <div class="project-detail__focus-visual">
              <span class="project-detail__focus-visual-label">After</span>
              ${item.afterImage ? `<img src="${item.afterImage}" alt="After" class="project-detail__focus-img" />` : '<span class="placeholder placeholder--focus-visual"></span>'}
            </div>
          </div>`
            : isBeforeAfter
            ? `
          <div class="project-detail__focus-visuals project-detail__focus-visuals--compare">
            <div class="project-detail__focus-visual">
              <span class="project-detail__focus-visual-label">Before</span>
              ${item.beforeImage ? `<img src="${item.beforeImage}" alt="Before" class="project-detail__focus-img" />` : '<span class="placeholder placeholder--focus-visual"></span>'}
            </div>
            <div class="project-detail__focus-visual">
              <span class="project-detail__focus-visual-label">After</span>
              ${item.afterImage ? `<img src="${item.afterImage}" alt="After" class="project-detail__focus-img" />` : '<span class="placeholder placeholder--focus-visual"></span>'}
            </div>
          </div>`
            : `
          <div class="project-detail__focus-visual">
            ${item.image ? `<img src="${item.image}" alt="${item.title}" class="project-detail__focus-img" />` : '<span class="placeholder placeholder--focus-visual"></span>'}
          </div>`;
          return `
      <div class="project-detail__focus-item${isBeforeAfter || isAfterOnly ? " project-detail__focus-item--before-after" : ""}">
        ${isBeforeAfter || isAfterOnly
            ? `
        <div class="project-detail__focus-content">
          <h4 class="project-detail__focus-item-title"><span class="ai-workflow__example-num">${i + 1}</span> ${item.title}</h4>
          ${visualHtml}
          <p class="project-detail__focus-item-desc">${item.description}</p>
        </div>`
            : `${visualHtml}
        <div class="project-detail__focus-content">
          <h4 class="project-detail__focus-item-title"><span class="ai-workflow__example-num">${i + 1}</span> ${item.title}</h4>
          <p class="project-detail__focus-item-desc">${item.description}</p>
        </div>`}
      </div>
    `;
        },
      )
      .join("");
    focusSection.style.display = "block";
    if (focusSliderNav) focusSliderNav.style.display = "none";
  } else {
    if (focusSection) focusSection.style.display = "none";
    if (focusSliderNav) focusSliderNav.style.display = "none";
  }

  /* Responsive Image */
  const responsiveWrap = document.querySelector("[data-detail-responsive]");
  const responsiveImg = document.querySelector("[data-detail-responsive-img]");
  if (responsiveWrap && responsiveImg && project.detail?.responsiveImage) {
    responsiveImg.src = project.detail.responsiveImage;
    responsiveImg.alt = `${nameText} 반응형 화면`;
    responsiveWrap.style.display = "block";
  } else if (responsiveWrap) {
    responsiveWrap.style.display = "none";
  }
})();
