# Extensions List – Frontend Mentor Challenge

Frontend Mentor의 **Extensions List UI 챌린지**를 React와 JavaScript로 구현한 프로젝트입니다.
확장 프로그램 목록을 관리하는 UI를 중심으로 **상태 관리, 조건부 렌더링, 접근성, 반응형 레이아웃**에 집중하여 구현 했습니다.

## ✨ Features

- 확장 프로그램 목록 렌더링
- 활성 / 비활성 상태 토글 기능
- 필터 버튼(All / Active / Inactive)을 통한 목록 필터링
- 카드 삭제 기능
- 다크 / 라이트 테마 전환
- 카드가 없을 경우 Empty State UI 표시
- 반응형 레이아웃 (Desktop / Mobile)

## 🛠 Tech Stack

- **Framework**: React 19
- **Language**: JavaScript
- **Styling**: CSS
- **Deployment**: Vercel

## 🧩 Implementation Notes

- React `useState`를 활용해 카드 목록, 필터 상태, 테마 상태를 관리했습니다.
- 필터 조건에 따라 카드 목록을 동적으로 렌더링하고, 목록이 비어 있을 경우 Empty State를 표시했습니다.
- 레이아웃 변경으로 인한 UI 흔들림을 최소화하기 위해 Grid 레이아웃을 사용했습니다.
- 버튼 토글 UI에 `aria-pressed`를 적용하여 접근성을 개선했습니다.

---

정적 배포 링크 : https://jonghoske.github.io/extensionsUI-static/

<img width="958" height="584" alt="image" src="https://github.com/user-attachments/assets/d2357c5a-0bb5-4831-836a-ce27439fc9d9" />
