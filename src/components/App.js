import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "mybase";

export default function App() {
  const [init, setInit] = useState(false); // 초기화
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      // 유저상태의 변화를 나타내는 함수. 파이어베이스를 기다리며 user가 있는지 봄
      if (user) {
        setIsLoggedIn(true); //유저정보가 있다면 로그인유지 => 홈화면을 보여줌
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); // 유저정보가 있다면 라우트 나오고, 없다면 숨김(유저가 있으면 초기화한다음 다시 그려줌)
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}
