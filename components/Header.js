import Link from "next/link";

export default function Header() {
	return (
		<div className="relative bg-white border-gray-300 border-b mb-2">
			<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
				<h1 className="text-xl font-semibold">Web tutor</h1>

				<Link href="/search" className="inline-block hover:font-bold underline">
					Find tutor
				</Link>
				{/*href="/register/tutor" */}
				<Link href="" className="inline-block">
					<p className="inline-block opacity-40">Become tutor</p>
				</Link>
				<div className="ml-auto mr-5">
					<Link href="/profile">Sign In</Link>
				</div>
			</div>
		</div>
	);
}
