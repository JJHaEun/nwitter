import { useHistory } from "react-router-dom";
import { authService } from "../mybase";

export default function Profile() {
  const history = useHistory();
  const onClickLogOut = () => {
    // Authentication부분을 끝내기(사용자 계정인증끝내기)
    // auth service 활용
    authService.signOut();
    history.push(`/`); // 로그아웃후 바로 home으로 돌아가기
  };
  return (
    <>
      <span>Profile</span>
      <button onClick={onClickLogOut}>Log Out</button>
    </>
  );
}
