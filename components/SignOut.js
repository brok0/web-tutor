import { signOut } from "next-auth/react";

export default () => (
	<button
		className="p-1 border rounded bg-red-500 text-white font-bold"
		onClick={() => signOut({ callbackUrl: "http://localhost:3000/search" })}
	>
		Sign out
	</button>
);
