import { signIn } from "next-auth/react";

export default function Login() {
	return (
		<>
			<h1>Login</h1>
			<p>
				<a
					href="/api/auth/signin"
					onClick={(e) => {
						e.preventDefault();
						signIn("google");
					}}
				>
					Sign in with Google
				</a>
			</p>
		</>
	);
}
