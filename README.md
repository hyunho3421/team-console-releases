# JP 콘솔 (TeamConsole)

Windows와 WSL에서 Claude·Codex 세션을 함께 관리하는 데스크톱 앱의 **설치파일 배포 저장소**입니다.

## 다운로드

**[설치파일 다운로드 페이지](https://hyunho3421.github.io/team-console-releases/)** — 버튼 하나로 Windows 설치파일을 받을 수 있습니다.

- [최신 버전 및 설치파일](https://github.com/hyunho3421/team-console-releases/releases/latest)
- [0.26.0 Windows x64 설치파일](https://github.com/hyunho3421/team-console-releases/releases/download/v0.26.0/TeamConsole_0.26.0_x64-setup.exe)
- [0.26.0 SHA-256 체크섬](https://github.com/hyunho3421/team-console-releases/releases/download/v0.26.0/TeamConsole_0.26.0_x64-setup.exe.sha256)

## 설치하기

1. 설치파일을 실행합니다.
2. 앱의 **시작 준비** 화면에서 사용할 환경과 AI를 선택합니다.
3. **설치·로그인 도우미**로 Claude 또는 Codex를 설치하고 본인 계정으로 로그인합니다.
4. 프로젝트를 만들고 세션을 추가합니다. 세션마다 Windows 또는 WSL을 선택할 수 있습니다.

## 앱 업데이트

0.25.0부터 새 버전 알림과 앱 안에서 바로 설치·재시작하는 기능을 제공합니다. 프로젝트 설정을 백업하고 실행 중인 Windows·WSL 세션에 다시 연결합니다.

**0.24.2 이하 사용자는 최신 설치파일을 한 번 직접 실행해 주세요.** 그다음 버전부터 앱 안에서 업데이트할 수 있습니다.

## 실행 환경

- Windows x64용입니다. **Windows 11 x64**에서 실제 검증했습니다. Windows 10·ARM64는 검증하지 않았습니다.
- WSL은 선택 사항입니다. 준비된 WSL이 있으면 자동 선택하며, 없으면 Windows에서 실행합니다. 수동 선택도 가능합니다.
- 인터넷 연결과 본인의 Claude 또는 Codex 이용 권한이 필요합니다. Windows와 WSL의 로그인은 각각 진행합니다.
- Windows Python·PyYAML·세션 관리 도우미와 WebView2 설치 도우미를 포함합니다. CLI와 필요한 WebView2 런타임은 공식 서버에서 내려받습니다.

## 주요 기능

- Windows·WSL 세션을 통합 목록에서 관리하고, 기존 세션을 유지한 채 다른 환경의 세션을 추가합니다.
- Windows·WSL별 Codex 모델 목록과 모델별 추론 강도 선택을 지원합니다.
- Claude·Codex 메시지 전달, 에이전트 역할 관리, 스킬 선택을 지원합니다.
- 환경별 사용량 탭과 Claude 5시간·주간·Fable 주간 사용량을 제공합니다.
- 창을 다시 열면 실행 중인 세션에 재연결합니다. 컴퓨터 재부팅이나 WSL 종료 시에는 저장된 대화를 재개합니다.

변경사항과 파일 체크섬은 각 [릴리즈](https://github.com/hyunho3421/team-console-releases/releases)에서 확인할 수 있습니다.
