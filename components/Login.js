import { signIn } from "next-auth/react";
import { setUser } from "../store/userReducer";
import { useAppDispath } from "../store/hooks";
export default function Login() {
  const dispatch = useAppDispath();
  const handleLogin = (e) => {
    e.preventDefault();
    const data = signIn("google");
    dispatch(setUser(data));
    console.log("after login" + data);
  };

  return (
    <>
      <h1>Login</h1>
      <p>
        <a href="/api/auth/signin" onClick={handleLogin}>
          Sign in with Google
        </a>
      </p>
    </>
  );
}
