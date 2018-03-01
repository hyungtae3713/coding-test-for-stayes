
### 시작하기

먼저 필요한 모든 모듈 설치

>Note: `node`환경인 것을 전제함

```sh
cd client
npm install
```

개발 모드로 실행

```sh
npm start
```

동작 확인은 -> [ http://localhost:8000](http://localhost:8000)

>Note: 하지만 지금 확인하면 서버가 켜져있지 않기 때문에 정상적인 동작이 되지 않음

그래서 서버를 동작 시키기 위해 server 폴더로 이동하여 필요한 모든 모듈 설치후 동작시켜야함

```sh
cd ../server
npm install
npm start:dev
```

이제 브라우저에서 확인하면 됨