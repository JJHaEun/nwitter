import { useState } from "react";
import { authService, firebaseInstance } from "../mybase";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const {
      target: { name, value },
    } = event; // event의 target을, 그안의 name과 value를 받아온다
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
      //event target.name이 이메일이라면 이메일 state값을,
      //password라면 password state값을 해당 state에 담아준다
    }
  };
  const onClickSubmit = async (event) => {
    event.preventDefault();
    // from 의 onSubmit은 클릭하면 리랜더하는데 그 새로고침되면서 기존 state등이 사라짐.
    // 그것을 막기위해 preventDefault를 사용
    try {
      let data;
      if (newAccount) {
        // 새 회원이면=> 계정이 없으면 회원가입
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // 아니라면 로그인
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      //   console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev); // 만약 새 계정이라면..
  const onSocialClick = async (event) => {
    console.log(event.target.name);
    let provider;
    if (event.target.name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
      //   provider = new authService.GoogleAuthProvider(); // 얘 안됨.
    } else if (event.target.name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
      //   provider = new authService.GithubAuthProvider(); // 동일하게안됨.
    }
    const data = await authService.signInWithPopup(provider); // 팝업으로 해당 로그인 창을 받는다
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onClickSubmit}>
        <input
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          // value에는  state의 값을 넣어줌.
        />
        <input
          onChange={onChange}
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
        />
        <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "로그인하러가기" : "회원가입"}
      </span>
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
}
