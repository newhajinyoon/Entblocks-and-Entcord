# EntCord

## EntCord란

[**엔트리**](https://playentry.org/) 에서 **[Discord](https://discord.com/)** Bot 을 작동시킬 수 있는 기능입니다.

현재는 버그가 많을 수 있으며, **Firefox**, **Internet Explorer** 는 지원하지 않습니다.

예제 작품: [들어가기](http://naver.me/xmfjxsYJ)

코드 참고: [thoratica](https://github.com/thoratica)님의 [EntBlocks](https://github.com/thoratica/EntBlocks)

디스코드 봇 로그인, 상태메세지 설정 등: [discord.js webpack](https://github.com/discordjs/discord.js/tree/webpack) ([discord.js](https://discord.js.org/))

## 사용 방법

[엔트리 작품 만들기](https://playentry.org/ws#!/)에 들어가 개발자 도구(F12 or Ctrl + Shift + J) 콘솔에

```js
$.get('https://raw.githack.com/ditto7890/EntCord/master/block.js')
```

라고 입력해주시면 됩니다.

## 결과 (v2.1)

![Result](./img/result-2.1.png)

## 업데이트

2.1 - 코드 정리, 봇 토큰 블럭 추가

2.0 - 많은 블럭 추가

1.0.2 - [EntBlocks](https://github.com/thoratica/EntBlocks)이(가) 업데이트 됨에 따라 코드 수정

1.0.11 - 색깔 변경, 상태메세지 설정 삭제

1.0.1 - 디스코드 봇에 관한 블럭 다량 추가

1.0.0 - EntCord 베타 출시(로그인, 상태메세지 설정)

## 존재하는 버그

1. 메세지를 보낸 <봇/시스템/유저> 인가? 블럭이 작동을 하지 않는 버그
2. 메세지 내용 블럭이 작동을 하지 않는 버그
