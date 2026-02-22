/**
 * 프로젝트 상세 페이지
 * - URL 쿼리 ?id=0 으로 프로젝트 인덱스 전달
 * - PROJECTS_DATA 기반으로 콘텐츠 렌더링
 */
(function () {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"), 10);
  const project = typeof PROJECTS_DATA !== "undefined" && !isNaN(id) ? PROJECTS_DATA[id] : null;

  if (!project) {
    document.title = "프로젝트를 찾을 수 없습니다 | MINHEE PORTFOLIO";
    return;
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
  document.title = `${nameText} | MINHEE PORTFOLIO`;

  const detailTitle = document.querySelector("[data-detail-title]");
  if (detailTitle) {
    detailTitle.textContent = project.detail?.title || nameText;
  }

  const detailPosition = document.querySelector("[data-detail-position]");
  if (detailPosition) {
    detailPosition.textContent = project.detail?.position || project.categoryLabel || "-";
  }

  const detailContribution = document.querySelector("[data-detail-contribution]");
  if (detailContribution) {
    detailContribution.textContent = project.detail?.contribution || "-";
  }

  const detailDate = document.querySelector("[data-detail-date]");
  if (detailDate) {
    detailDate.textContent = project.detail?.date || "-";
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

  /* Page Capture */
  const captureWrap = document.querySelector("[data-detail-capture]");
  const captureImg = document.querySelector("[data-detail-capture-img]");
  if (captureWrap && captureImg && project.detail?.pageCapture) {
    captureImg.src = project.detail.pageCapture;
    captureImg.alt = `${nameText} 페이지 캡쳐`;
    captureWrap.style.display = "block";
  } else if (captureWrap) {
    captureWrap.style.display = "none";
  }
})();
