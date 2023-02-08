import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// 각각의 것들을 .env파일로해서
//  (환경변수로 설정한것. create-react-app으로 즉, 리엑틀사용하고 있으니 앞에 REACT_APP이라는 말을 꼭 붙여줘야 작동함)
// Initialize Firebase
// .gitignore에 .env파일을 포함시켜서 git에 올라가는것 방지(=> key노출 일부 막음)
// 이부분은 키가 깃허브에 올라가는것만 방지한것이다.
export default firebase.initializeApp(firebaseConfig);
