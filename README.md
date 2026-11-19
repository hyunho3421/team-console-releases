# JP 콘솔 (TeamConsole)

Windows·WSL·macOS에서 Claude·Codex 세션을 함께 관리하는 데스크톱 앱의 **설치파일 배포 저장소**입니다.

## 다운로드

**[설치파일 다운로드 페이지](https://hyunho3421.github.io/team-console-releases/)** — Windows와 macOS 버튼을 구분해 설치파일을 받을 수 있습니다.

- [최신 버전 및 설치파일](https://github.com/hyunho3421/team-console-releases/releases/latest)
- [0.28.19 Windows x64 설치파일](https://github.com/hyunho3421/team-console-releases/releases/download/v0.28.19/TeamConsole_0.28.19_x64-setup.exe)
- [0.28.19 SHA-256 체크섬](https://github.com/hyunho3421/team-console-releases/releases/download/v0.28.19/TeamConsole_0.28.19_x64-setup.exe.sha256)

- [0.28.3 macOS Apple Silicon·Intel 공용 설치파일](https://github.com/hyunho3421/team-console-releases/releases/download/v0.28.3/TeamConsole_0.28.3_universal.dmg)
- [0.28.3 macOS SHA-256 체크섬](https://github.com/hyunho3421/team-console-releases/releases/download/v0.28.3/TeamConsole_0.28.3_universal.dmg.sha256)

## 설치하기

1. Windows는 EXE를 실행합니다. Mac은 DMG를 열고 TeamConsole을 Applications 폴더로 옮깁니다.
2. 앱의 **시작 준비** 화면에서 사용할 환경과 AI를 선택합니다.
3. **설치·로그인 도우미**로 Claude 또는 Codex를 설치하고 본인 계정으로 로그인합니다.
4. 프로젝트를 만들고 세션을 추가합니다. Windows PC는 세션마다 Windows 또는 WSL을 선택할 수 있고, Mac은 로컬 macOS 환경을 사용합니다.

## 앱 업데이트

Windows는 0.25.0부터 새 버전 알림과 앱 안에서 바로 설치·재시작하는 기능을 제공합니다. 프로젝트 설정을 백업하고 실행 중인 Windows·WSL 세션에 다시 연결합니다.

**0.24.2 이하 사용자는 최신 설치파일을 한 번 직접 실행해 주세요.** 그다음 버전부터 앱 안에서 업데이트할 수 있습니다.

Mac도 0.28.1부터 새 버전 알림과 **업데이트하고 다시 시작**을 지원합니다. 서명된 공용 업데이트 파일로 앱만 교체하고, 기존 프로젝트·계정과 실행 중인 tmux 세션을 유지합니다. Apple Silicon·Intel에서 실제 설치·자동 재시작·세션 보존을 검증했습니다.

**Mac 0.28.0에서 처음 업데이트할 때만 설치 후 앱을 한 번 직접 닫고 다시 열어 주세요.** 0.28.1부터는 자동으로 다시 시작합니다.

## 실행 환경

- Windows는 x64용입니다. **Windows 11 x64**에서 실제 검증했습니다. Windows 10·ARM64는 검증하지 않았습니다.
- macOS는 12 이상, Apple Silicon·Intel 공용입니다. macOS 15의 두 CPU 환경에서 DMG 설치·실행·세션 복원을 검증했습니다. Homebrew를 준비한 뒤 앱의 **설치·로그인 도우미**로 Python·tmux를 설치할 수 있습니다.
- Mac 배포본은 ad-hoc 서명되어 있으며 Apple 공증 전입니다. 첫 실행이 차단되면 시스템 설정 → 개인정보 보호 및 보안 → **그래도 열기**를 선택하세요. [Apple 안내](https://support.apple.com/ko-kr/102445)
- WSL은 선택 사항입니다. 준비된 WSL이 있으면 자동 선택하며, 없으면 Windows에서 실행합니다. 수동 선택도 가능합니다.
- 인터넷 연결과 본인의 Claude 또는 Codex 이용 권한이 필요합니다. Windows·WSL·macOS의 로그인은 각각 진행합니다.
- Windows Python·PyYAML·세션 관리 도우미와 WebView2 설치 도우미를 포함합니다. CLI와 필요한 WebView2 런타임은 공식 서버에서 내려받습니다.

## 주요 기능

- Codex 작업 세션에서 별도 Git 워크트리를 선택할 수 있습니다. 앱 재실행·세션 재개·새 대화 시작에도 같은 작업 폴더를 사용하며, 원본과 워크트리의 미커밋 파일을 보존합니다.

- 상단 Settings에서 llmWiki 연동을 켜거나 끄고 Claude·Codex 다계정을 관리합니다. 세션마다 계정을 선택할 수 있습니다.

- Windows·WSL 세션을 통합 목록에서 관리하고, 기존 세션을 유지한 채 다른 환경의 세션을 추가합니다.
- Windows·WSL별 Codex 모델 목록과 모델별 추론 강도 선택을 지원합니다.
- Claude·Codex 메시지 전달, 에이전트 역할 관리, 스킬 선택을 지원합니다.
- 환경별 사용량 탭과 Claude 5시간·주간·Fable 주간 사용량을 제공합니다.
- 창을 다시 열면 실행 중인 세션에 재연결합니다. 컴퓨터 재부팅이나 WSL 종료 시에는 저장된 대화를 재개합니다.

변경사항과 파일 체크섬은 각 [릴리즈](https://github.com/hyunho3421/team-console-releases/releases)에서 확인할 수 있습니다.
