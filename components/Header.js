import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../store/appReducer";

export default function Header() {
	const user = useSelector(selectUser);
	console.log(user);
	return (
		<div className="relative bg-white border-gray-300 border-b mb-2">
			<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
				<h1 className="text-xl font-semibold">Web tutor</h1>

				<Link href="/search" className="inline-block hover:font-bold underline">
					Find tutor
				</Link>
				{/*href="/register/tutor" */}
				<Link href="tutor/createTutor" className="inline-block">
					<p className="inline-block ">Become tutor</p>
				</Link>
				<div className="ml-auto mr-5">
					{user ? (
						<Link href="/profile">Profile</Link>
					) : (
						<Link href="/profile">Sign In</Link>
					)}
				</div>
			</div>
		</div>
	);
}
