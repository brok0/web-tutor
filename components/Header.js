import Link from "next/link";
import { useSession } from "next-auth/react";
export default function Header() {
  const { data: session, status } = useSession();

  const isLoggedIn = status === "authenticated";
  return (
    <div className="relative bg-white border-gray-300 border-b mb-2">
      <div className="flex justify-between items-center border-b-2 border-gray-100 ml-5 py-6 md:justify-start md:space-x-10">
        <Link href="/">
          <h1 className="text-xl font-semibold cursor-poiner">Web tutor</h1>
        </Link>

        <Link href="/search" className="inline-block hover:font-bold underline">
          Find tutor
        </Link>
        <Link href="/tutor/createTutor" className="inline-block ">
          <p className="inline-block cursor-pointer">Become tutor</p>
        </Link>
        <div className="ml-auto mr-5 font-semibold">{isLoggedIn ? <Link href="/profile">Profile</Link> : <Link href="/profile">Sign In</Link>}</div>
      </div>
    </div>
  );
}
