/**
 * 프로젝트 데이터
 * - thumb: 썸네일 이미지 경로 (images/projects/{slug}/thumb.png)
 * - category: web | app | promotion | others
 * - categoryLabel: 오버레이에 표시할 카테고리 텍스트
 * - name: 프로젝트명 (HTML 사용 가능, <br /> 줄바꿈)
 * - tags: 태그 (쉼표로 구분)
 * - detail: 상세 페이지용 (heroBg, pageCapture 등)
 */
const PROJECTS_DATA = [
  {
    thumb: "images/projects/silveredunet/thumb.png",
    category: "web",
    categoryLabel: "UX Strategy · UI · Publishing",
    name: "실버에듀넷 회사소개<br />사이트 제작",
    tags: "웹사이트, UI/UX, 반응형 웹",
    detail: {
      heroBg: "images/projects/silveredunet/hero.png",
      title: "실버에듀넷 회사소개 웹사이트 제작",
      position: "UX 설계 · UI 디자인 · 퍼블리싱",
      contribution: "UX/정보 구조 설계 60% · UI 디자인 100% · 퍼블리싱 100%",
      tool: "Figma · Vue · Tailwind CSS",
      date: "2024 (4주 소요)",
      description:
        "<p><strong>시니어 교육기관 대상 B2B 기업 소개 사이트로, 브랜드 신뢰 형성을 중심으로 정보 구조를 설계한 프로젝트입니다.</strong></p>" +
        "<p>브랜드 소개 → 서비스 강점 → 신뢰 요소로 이어지는 흐름을 재구성해 핵심 메시지가 단계적으로 인지되도록 설계했습니다.</p>" +
        "<p>차분한 톤과 여백을 활용해 안정적인 브랜드 이미지를 구축하고, UI 디자인과 퍼블리싱을 통해 반응형 공식 홈페이지로 완성했습니다.</p>",
      ctaUrl: "https://profile.silveredu.net/",
      pageCapture: "images/projects/silveredunet/capture.png",
      focusItems: [
        {
          title: "브랜드 신뢰를 전면에 배치한 정보 구조 설계",
          description:
            "B2B 기관 대상 특성을 고려해 첫 화면에 핵심 성과 지표(2018.3 / 1위 / 32,000 등)를 직관적으로 배치했습니다. 감성 이미지와 정량 지표를 병치해 신뢰를 강화했습니다.",
          image: "images/projects/silveredunet/focus-1-info-structure.png",
        },
        {
          title: "신뢰 자산 중심의 스토리텔링 흐름 구성",
          description:
            "수상·인증·기관 협약 등 브랜드 자산을 단순 나열이 아닌 '성과 → 인증 → 공신력' 흐름으로 재구성했습니다. 스크롤만으로 신뢰가 형성되도록 구조를 설계했습니다.",
          image: "images/projects/silveredunet/focus-2-awards.png",
        },
        {
          title: "B2B 기관 담당자 중심의 접근성 설계",
          description:
            "기관 담당자가 필요한 정보를 빠르게 찾을 수 있도록 카테고리 구조와 명확한 Contact 동선을 설계했습니다. 주소·교통·연락처 등 실사용 정보를 가독성 중심으로 정리했습니다.",
          image: "images/projects/silveredunet/focus-3-accessibility.png",
        },
      ],
      responsiveImage: "images/projects/silveredunet/responsive-mobile.png",
    },
  },
  {
    thumb: "images/projects/ibantot-vietnam/thumb.png",
    category: "web",
    categoryLabel: "UI · Publishing",
    name: "아이반톳 베트남 교육<br />사이트 UI/UX 리뉴얼",
    tags: "웹사이트, UI/UX, 글로벌",
    detail: {
      heroBg: "images/projects/ibantot-vietnam/hero.png",
      title: "아이반톳 베트남 교육 플랫폼 UI/UX 리뉴얼",
      position: "UI 디자인 · 퍼블리싱",
      contribution: "UI 디자인 100% · 퍼블리싱 100%",
      tool: "Figma · Html ·  CSS",
      date: "2025 (2주 소요)",
      description:
        "<p><strong>베트남 교육 플랫폼 iBANTOT의 메인 화면을 사용자 탐색 흐름 중심으로 재설계한 프로젝트입니다.</strong></p>" +
        "<p>기존 기능 나열형 구조를 콘텐츠 중심 구조로 재정리하여 사용자가 주요 교육 프로그램과 콘텐츠를 직관적으로 탐색할 수 있도록 정보 구조를 개선했습니다.</p>" +
        "<p>또한 반복되는 UI 모듈을 정리하고 카드 컴포넌트 스타일을 통일하여 화면의 일관성과 가독성을 높였습니다.</p>" +
        "<p>교육 콘텐츠 영역과 커머스 영역의 구조를 구분하여 플랫폼 내 콘텐츠 탐색 흐름을 명확하게 설계했습니다.</p>",
      ctaUrl: "https://ibantot.vn/",
      focusItems: [
        {
          title: "콘텐츠 중심 메인 구조 재설계",
          beforeImage: "images/projects/ibantot-vietnam/focus-1-before.png",
          afterImage: "images/projects/ibantot-vietnam/focus-1-after.png",
          description:
            "기존 기능 중심 레이아웃을 콘텐츠 중심 구조로 재정리하여 주요 교육 프로그램과 콘텐츠를 직관적으로 탐색할 수 있도록 메인 구조를 설계했습니다.",
        },
        {
          title: "카드 컴포넌트 기반 UI 시스템 정리",
          beforeImage: "images/projects/ibantot-vietnam/focus-2-before.png",
          afterImage: "images/projects/ibantot-vietnam/focus-2-after.png",
          description:
            "반복적으로 사용되는 콘텐츠 카드 UI를 일관된 구조로 정리하여 다양한 프로그램 정보를 동일한 방식으로 전달할 수 있도록 UI 시스템을 구축했습니다.",
        },
        {
          title: "교육 콘텐츠와 커머스 영역 구조 분리",
          beforeImage: "images/projects/ibantot-vietnam/focus-3-before.png",
          afterImage: "images/projects/ibantot-vietnam/focus-3-after.png",
          description:
            "교육 콘텐츠와 커머스 영역을 명확히 구분하여 사용자 탐색 흐름을 정리하고 플랫폼 내 정보 구조를 개선했습니다.",
        },
      ],
    },
  },
  {
    hidden: true,
    thumb: "images/projects/bigsplay-interactive-learning-tool/thumb.png",
    category: "web",
    categoryLabel: "UX Strategy · UI",
    name: "빅스플레이 양방향<br />수업도구 서비스 디자인",
    tags: "웹서비스, UI/UX, 인터랙션",
    detail: {
      heroBg: "images/projects/bigsplay-interactive-learning-tool/hero.png",
      title: "빅스플레이 양방향 수업도구 서비스 디자인",
      position: "UX 설계 · UI 디자인",
      contribution: "UX 설계 100% · 퍼블리싱 100%",
      tool: "Figma · Photoshop · After Effects · Illustrator",
      date: "2025 (4주 소요)",
      description:
        "<p><strong>빅스플레이 양방향 수업도구 서비스를 사용자 탐색 흐름 중심으로 재정비한 프로젝트입니다.</strong></p>" +
        "<p>기존 기능 나열형 구조를 콘텐츠 중심 구조로 재구성하고, 반복되는 UI 모듈을 정리하여 가독성과 정보 위계를 개선했습니다.</p>" +
        "<p>또한 카드 컴포넌트 스타일을 통일하여 화면의 일관성을 높이고, 다양한 교육 콘텐츠를 보다 직관적으로 탐색할 수 있도록 구조를 개선했습니다.</p>",
    },
  },
  {
    thumb: "images/projects/kidkids-online-training/thumb.png",
    category: "web",
    categoryLabel: "UI · Publishing",
    name: "키드키즈 육아종<br />사이버 연수원 사이트 제작",
    tags: "웹서비스, UI, 퍼블리싱",
    detail: {
      heroBg: "images/projects/kidkids-online-training/hero.png",
      title: "키드키즈 육아종합지원센터 사이버 연수원",
      position: "UI 디자인 · 퍼블리싱",
      contribution: "UI 디자인 100% · 퍼블리싱 100%",
      tool: "Figma · Photoshop · HTML · CSS",
      date: "2024 (3주 소요)",
      description:
        "<p><strong>보육교직원을 위한 온라인 연수 플랫폼의 UI 디자인과 퍼블리싱을 진행한 프로젝트입니다.</strong></p>" +
        "<p>다양한 연수 과정과 교육 콘텐츠를 효율적으로 탐색할 수 있도록 화면 구조와 콘텐츠 배치를 정리하고, 강의 정보를 직관적으로 확인할 수 있는 UI를 설계했습니다.</p>" +
        "<p>또한 디자인과 퍼블리싱을 함께 진행하여 실제 서비스로 운영되는 연수 플랫폼의 화면을 구현했습니다.</p>",
      ctaUrl: "https://care.kidkids.net/icare",
      focusItems: [
        {
          title: "회원 유형에 따른 가입 흐름 설계",
          description:
            "기존 키드키즈평생교육원 회원과 신규 사용자의 가입 방식을 구분하여 사용자 유형에 맞는 가입 경로를 제공했습니다. 사용자가 자신의 상황에 맞는 절차를 쉽게 선택할 수 있도록 가입 흐름을 설계했습니다.",
          image: "images/projects/kidkids-online-training/focus-1.png",
        },
        {
          title: "연수 콘텐츠 탐색을 위한 강의 목록 구조 설계",
          description:
            "다양한 연수 과정을 직관적으로 탐색할 수 있도록 카드형 강의 목록 UI를 구성했습니다. 강의 썸네일, 과정명, 교육기간, 수강 신청 버튼 등 주요 정보를 카드 구조로 정리하여 한 화면에서 확인할 수 있도록 UI를 설계했습니다.",
          image: "images/projects/kidkids-online-training/focus-2.png",
        },
        {
          title: "다중 강의 선택 기반 수강 신청 UX",
          description:
            "여러 연수 과정을 한 번에 선택하여 수강 신청할 수 있도록 체크박스 기반 선택 UI를 설계했습니다. 사용자가 필요한 교육을 효율적으로 선택하고 신청할 수 있도록 수강 신청 흐름을 구성했습니다.",
          image: "images/projects/kidkids-online-training/focus-3.png",
        },
      ],
    },
  },
  {
    thumb: "images/projects/kidkids-safety-education/thumb.png",
    category: "web",
    categoryLabel: "UI · Publishing",
    name: "키드키즈 안전교육<br />페이지 UI/UX 리뉴얼",
    tags: "웹사이트, UI/UX, 반응형, 교육",
    detail: {
      heroBg: "images/projects/kidkids-safety-education/hero.png",
      title: "키드키즈 안전교육 페이지 UI/UX 리뉴얼",
      position: "UI 디자인 · 퍼블리싱",
      contribution: "UI 디자인 100% · 퍼블리싱 100%",
      tool: "Figma · Vue · Tailwind CSS · Cursor AI",
      date: "2026 (1주 소요)",
      description:
        "<p><strong>유아 교육 플랫폼 키드키즈 안전교육 서비스의 UI 구조를 재설계한 리뉴얼 프로젝트입니다.</strong></p>" +
        "<p>기존에 콘텐츠, 연간 교육 계획, 개인 관리 기능이 혼합되어 있던 구조를 사용 목적 기준으로 재정리하여 탐색 흐름을 개선했습니다.</p>" +
        "<p>콘텐츠 카드와 영역별 분류 UI를 정리하고 UI 설계부터 퍼블리싱까지 담당하여 실제 서비스에 적용되었습니다.</p>",
      ctaUrl: "https://www.kidkids.net/pani/pages/program/new-safety/content.html",
      focusItems: [
        {
          title: "서비스 구조 정리 (IA 개선)",
          layout: "before-after",
          beforeImage: "images/projects/kidkids-safety-education/focus-1-before.png",
          afterImage: "images/projects/kidkids-safety-education/focus-1-after.png",
          description:
            "콘텐츠, 연간 계획, 개인 관리 기능이 한 화면에 혼합되어 있던 구조를 안전 콘텐츠 / 연간 계획안 / My 안전으로 구분된 탭 구조로 재정리하여 탐색 흐름을 명확히 개선했습니다.",
        },
        {
          title: "재사용 가능한 UI 컴포넌트 설계",
          layout: "before-after",
          beforeImage: "images/projects/kidkids-safety-education/focus-2-before.png",
          afterImage: "images/projects/kidkids-safety-education/focus-2-after.png",
          description:
            "콘텐츠 카드, 탭, 리스트 등의 UI 요소를 재사용 가능한 컴포넌트 구조로 설계하여 유지보수와 확장성을 고려한 퍼블리싱 구조로 개선했습니다.",
        },
        {
          title: "교육 관리 기능 확장",
          layout: "after-only",
          afterImage: "images/projects/kidkids-safety-education/focus-3-after.png",
          description:
            "안전교육 진행 현황을 확인하기 어려웠던 구조를 My 안전 페이지를 통해 교육 영역별 진행 현황과 기록을 한눈에 확인할 수 있는 관리 기능 중심 UI로 개선했습니다.",
        },
      ],
    },
  },
  {
    thumb: "images/projects/kidkids-homepage-renewal/thumb.png",
    category: "web",
    categoryLabel: "UX Strategy · UI",
    name: "키드키즈 사이트 메인<br />UI/UX 리뉴얼",
    tags: "웹사이트, UI/UX",
  },
  {
    thumb: "images/projects/bigshome-indonesia-diary-app/thumb.png",
    category: "app",
    categoryLabel: "UI",
    name: "빅스홈 인도네시아<br />알림장 앱 디자인",
    tags: "모바일 앱, UI/UX, 글로벌",
  },
  {
    thumb: "images/projects/nurinori-with-app-renewal/thumb.png",
    category: "app",
    categoryLabel: "UI",
    name: "누리놀이 위드 유아 교육<br />서비스 태블릿 리뉴얼",
    tags: "태블릿 서비스, UI/UX, 리뉴얼",
  },
  {
    thumb: "images/projects/carerun-cognitive-game-app/thumb.png",
    category: "app",
    categoryLabel: "UI",
    name: "케어런 노인 교육 서비스<br />인지게임 태블릿 리뉴얼",
    tags: "태블릿 서비스, UI/UX, 인지게임",
  },
  {
    thumb: "images/projects/suksukbareum-pronunciation-app/thumb.png",
    category: "app",
    categoryLabel: "Branding · UI",
    name: "쑥쑥바름 발음지원 서비스<br />브랜드 · 앱 디자인",
    tags: "모바일 앱, 브랜드 아이덴티티, UI/UX",
  },
  {
    thumb: "images/projects/bigsplay-renewal-promotion/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "빅스플레이 리뉴얼<br />소개 페이지",
    tags: "프로모션 페이지, UI/UX, 리뉴얼",
  },
  {
    thumb: "images/projects/kidkids-newsemester-1plus1-event/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈 신학기 유료회원<br />1+1 이벤트 페이지",
    tags: "이벤트 페이지, 프로모션, 마케팅",
  },
  {
    thumb: "images/projects/kidkidsmall-warehouse-sale-event/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈몰 물류데이<br />창고대방출 이벤트",
    tags: "이벤트 페이지, 세일 프로모션, 커머스",
  },
  {
    thumb: "images/projects/silveredunet-brainquiz-event/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "실버에듀넷 뇌운동<br />퀴즈 이벤트",
    tags: "이벤트 페이지, 인터랙션",
  },
  {
    thumb: "images/projects/nurinori-with-renewal-promotion/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "누리놀이 위드<br />리뉴얼 소개 페이지",
    tags: "프로모션 페이지, 브랜드 소개, 리뉴얼",
  },
  {
    thumb: "images/projects/kidkidsmall-artnolle-promotion/thumb.png",
    category: "promotion",
    categoryLabel: "UI · Publishing",
    name: "키드키즈몰 미술아놀레<br />소개 페이지",
    tags: "프로모션 페이지, 콘텐츠 소개, 커머스",
  },
  {
    thumb: "images/projects/carerun-montessori-motion-design/thumb.png",
    category: "others",
    categoryLabel: "Motion Design",
    name: "케어런 스마트 몬테소리<br />모션 디자인",
    tags: "모션 그래픽, 캐릭터 애니메이션, 교육 콘텐츠",
    motion:
      "images/projects/carerun-montessori-motion-design/carerun-montessori.json",
  },
  {
    thumb: "images/projects/bigsplay-splash-motion/thumb.png",
    category: "others",
    categoryLabel: "Motion Design",
    name: "빅스플레이 스플래시<br />모션 디자인",
    tags: "스플래시 애니메이션, 브랜드 모션, 서비스 인트로",
    motion: "images/projects/bigsplay-splash-motion/bigsplay-splash.json",
    motionModifier: "bigsplay",
  },
  {
    thumb: "images/projects/tipahapa-song-campaign-digital-ad/thumb.png",
    category: "others",
    categoryLabel: "Digital Campaign",
    name: "티파하파 생활동요 캠페인<br />디지털 광고 디자인",
    tags: "디지털 광고, 캠페인 디자인, 사이니지",
  },
  {
    thumb: "images/projects/kidkids-main-banner-design/thumb.png",
    category: "others",
    categoryLabel: "Graphic Design",
    name: "키드키즈 사이트 메인<br />배너 디자인",
    tags: "메인 배너, 프로모션 디자인, 비주얼 기획",
  },
  {
    thumb: "images/projects/education-tablet-icon-design/thumb.png",
    category: "others",
    categoryLabel: "Icon Design",
    name: "교육 태블릿 서비스<br />아이콘 디자인",
    tags: "아이콘 시스템, UI 그래픽, 디자인 가이드",
  },
];
