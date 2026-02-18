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
