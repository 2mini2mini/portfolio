/**
 * 프로젝트 데이터
 * - thumb: 썸네일 이미지 경로 (images/projects/ 폴더 내)
 * - category: web | app | promotion | others
 * - categoryLabel: 오버레이에 표시할 카테고리 텍스트
 * - name: 프로젝트명 (HTML 사용 가능, <br /> 줄바꿈)
 * - tags: 태그 (쉼표로 구분)
 */
const PROJECTS_DATA = [
  {
    thumb: "images/projects/silveredunet-company-website.png",
    category: "web",
    categoryLabel: "UX Strategy · UI · Publishing",
    name: "실버에듀넷 회사소개<br />사이트 제작",
    tags: "웹사이트, UI/UX, 반응형 웹",
    detail: {
      heroBg: "images/projects/detail-silveredunet-company-website.png",
      title: "실버에듀넷 회사소개 웹사이트 제작",
      position: "UX 설계 · UI 디자인 · 퍼블리싱",
      contribution: "UX/정보 구조 설계 60% · UI 디자인 100% · 퍼블리싱 100%",
      date: "2024 (4주 소요)",
      description:
        "<p><strong>실버에듀넷 회사 소개 사이트는 시니어 교육기관에 브랜드를 명확하고 신뢰감 있게 소개하기 위해 정보 구조와 페이지 흐름을 설계한 프로젝트입니다.</strong> 기관 담당자가 브랜드의 핵심 가치를 단계적으로 이해할 수 있도록 브랜드 소개 → 서비스 강점 → 신뢰 요소 순으로 구조를 구성하고, 메시지의 우선순위를 정리해 핵심 정보가 자연스럽게 강조되도록 설계했습니다. 또한 정보 밀도를 조절하고 여백을 확보해 안정적이고 정돈된 인상을 전달하는 데 집중했습니다.</p>" +
        "<p>UI 디자인 단계에서는 서비스 특성상 중요한 신뢰 형성을 고려해 차분하고 안정적인 톤을 유지하고, 핵심 메시지와 회사 정보 영역이 명확히 구분되도록 레이아웃을 구성했습니다. 퍼블리싱 단계에서는 반응형 구조를 최적화하여 다양한 디바이스 환경에서도 동일한 브랜드 메시지가 일관되게 전달되도록 구현했습니다.</p>" +
        "<p>기획 부서와 협업하여 UX 구조 설계에 참여하고, UI 디자인과 퍼블리싱을 주도해 공식 홈페이지용 소개 사이트를 신규 구축한 프로젝트입니다.</p>",
      ctaUrl: "https://profile.silveredu.net/",
      pageCapture: "images/projects/ex-silveredunet-company-website.png",
    },
  },
  {
    thumb: "images/projects/ibantot-vietnam-education.png",
    category: "web",
    categoryLabel: "UI · Publishing",
    name: "아이반톳 베트남 교육<br />사이트 UI/UX 리뉴얼",
    tags: "웹사이트, UI/UX, 글로벌",
  },
  {
    thumb: "images/projects/bigsplay-interactive-learning-tool.png",
    category: "web",
    categoryLabel: "UX Strategy · UI",
    name: "빅스플레이 양방향<br />수업도구 서비스 디자인",
    tags: "웹서비스, UI/UX, 인터랙션",
  },
  {
    thumb: "images/projects/kidkids-online-training.png",
    category: "web",
    categoryLabel: "UI · Publishing",
    name: "키드키즈 육아종<br />사이버 연수원 사이트 제작",
    tags: "웹사이트, UI",
  },
  {
    thumb: "images/projects/kidkids-homepage-renewal.png",
    category: "web",
    categoryLabel: "UX Strategy · UI",
    name: "키드키즈 사이트 메인<br />UI/UX 리뉴얼",
    tags: "웹사이트, UI/UX",
  },
  {
    thumb: "images/projects/bigshome-indonesia-diary-app.png",
    category: "app",
    categoryLabel: "UI",
    name: "빅스홈 인도네시아<br />알림장 앱 디자인",
    tags: "모바일 앱, UI/UX, 글로벌",
  },
  {
    thumb: "images/projects/nurinori-with-app-renewal.png",
    category: "app",
    categoryLabel: "UI",
    name: "누리놀이 위드 유아 교육<br />서비스 태블릿 리뉴얼",
    tags: "태블릿 서비스, UI/UX, 리뉴얼",
  },
  {
    thumb: "images/projects/carerun-cognitive-game-app.png",
    category: "app",
    categoryLabel: "UI",
    name: "케어런 노인 교육 서비스<br />인지게임 태블릿 리뉴얼",
    tags: "태블릿 서비스, UI/UX, 인지게임",
  },
  {
    thumb: "images/projects/suksukbareum-pronunciation-app.png",
    category: "app",
    categoryLabel: "Branding · UI",
    name: "쑥쑥바름 발음지원 서비스<br />브랜드 · 앱 디자인",
    tags: "모바일 앱, 브랜드 아이덴티티, UI/UX",
  },
  {
    thumb: "images/projects/bigsplay-renewal-promotion.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "빅스플레이 리뉴얼<br />소개 페이지",
    tags: "프로모션 페이지, UI/UX, 리뉴얼",
  },
  {
    thumb: "images/projects/kidkids-newsemester-1plus1-event.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈 신학기 유료회원<br />1+1 이벤트 페이지",
    tags: "이벤트 페이지, 프로모션, 마케팅",
  },
  {
    thumb: "images/projects/kidkidsmall-warehouse-sale-event.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈몰 물류데이<br />창고대방출 이벤트",
    tags: "이벤트 페이지, 세일 프로모션, 커머스",
  },
  {
    thumb: "images/projects/silveredunet-brainquiz-event.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "실버에듀넷 뇌운동<br />퀴즈 이벤트",
    tags: "이벤트 페이지, 인터랙션",
  },
  {
    thumb: "images/projects/nurinori-with-renewal-promotion.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "누리놀이 위드<br />리뉴얼 소개 페이지",
    tags: "프로모션 페이지, 브랜드 소개, 리뉴얼",
  },
  {
    thumb: "images/projects/kidkidsmall-artnolle-promotion.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈몰 미술아놀레<br />소개 페이지",
    tags: "프로모션 페이지, 콘텐츠 소개, 커머스",
  },
  {
    thumb: "images/projects/carerun-montessori-motion-design.png",
    category: "others",
    categoryLabel: "Motion Design",
    name: "케어런 스마트 몬테소리<br />모션 디자인",
    tags: "모션 그래픽, 캐릭터 애니메이션, 교육 콘텐츠",
    motion: "images/projects/motions/carerun-montessori.json",
  },
  {
    thumb: "images/projects/bigsplay-splash-motion.png",
    category: "others",
    categoryLabel: "Motion Design",
    name: "빅스플레이 스플래시<br />모션 디자인",
    tags: "스플래시 애니메이션, 브랜드 모션, 서비스 인트로",
    motion: "images/projects/motions/bigsplay-splash.json",
    motionModifier: "bigsplay",
  },
  {
    thumb: "images/projects/tipahapa-song-campaign-digital-ad.png",
    category: "others",
    categoryLabel: "Digital Campaign",
    name: "티파하파 생활동요 캠페인<br />디지털 광고 디자인",
    tags: "디지털 광고, 캠페인 디자인, 사이니지",
  },
  {
    thumb: "images/projects/kidkids-main-banner-design.png",
    category: "others",
    categoryLabel: "Graphic Design",
    name: "키드키즈 사이트 메인<br />배너 디자인",
    tags: "메인 배너, 프로모션 디자인, 비주얼 기획",
  },
  {
    thumb: "images/projects/education-tablet-icon-design.png",
    category: "others",
    categoryLabel: "Icon Design",
    name: "교육 태블릿 서비스<br />아이콘 디자인",
    tags: "아이콘 시스템, UI 그래픽, 디자인 가이드",
  },
];
