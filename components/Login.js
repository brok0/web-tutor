import { signIn } from "next-auth/react";
export default function Login() {
	const handleLogin = (e) => {
		e.preventDefault();
		const data = signIn("google");

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
