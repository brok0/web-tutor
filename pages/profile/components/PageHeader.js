import Link from "next/dist/client/link";

export default function PageHeader() {
	return (
		<div className="relative bg-gray-500">
			<div className="flex flex-col justify-between items-center border-b-2 border-gray-100 p-6 md:flex-row md:justify-start md:space-x-10">
				<Link href="/messenger" className="inline-block">
					Messages
				</Link>
				<Link href="/profile/lessons" className="inline-block">
					Lessons
				</Link>

				<Link href="" className="opacity-75">
					Setting
				</Link>
			</div>
		</div>
	);
}
