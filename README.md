# MINHEE PORTFOLIO

포트폴리오 웹사이트 프로젝트입니다.

**접속 주소:** https://2mini2mini.github.io/portfolio/

## 환경설정

- HTML, CSS, JavaScript (바닐라)
- 별도 빌드 도구 없이 바로 실행 가능

## 실행 방법

1. `index.html` 파일을 브라우저에서 직접 열기
2. 또는 로컬 서버 사용:
   ```bash
   # Python이 설치되어 있다면
   python3 -m http.server 8000

   # Node.js + npx 사용 시
   npx serve .
   ```
3. http://localhost:8000 접속

## 프로젝트 구조

```
portfolio/
├── index.html      # 메인 HTML
├── css/
│   └── styles.css  # 스타일
├── js/
│   └── main.js     # 스크립트
├── images/         # 이미지 파일
├── icons/          # 아이콘 파일
└── README.md
```

## 레이아웃 구성

- **Header**: 로고(위치), 네비게이션 (ABOUT, PROJECT, AI WORKFLOW, CONTACT)
- **Hero**: 타이틀, 2026, 소개문구, 스크롤 안내(위치)
- **About**: 프로필 이미지(위치), 이름, 소개, 버튼, Experience/Education, 스킬 아이콘(위치)
- **Project**: 5개 프로젝트 카드 그리드, 필터 탭
- **AI Workflow**: 탭, 카드, 질문, 3개 예시 섹션
- **Contact**: 3개 연락처 카드 (아이콘 위치)
- **Footer**: 저작권 정보

> 💡 아이콘/이미지 파일은 아직 넣지 않았습니다. `.placeholder` 클래스가 있는 요소들에 나중에 실제 이미지를 추가하면 됩니다.
