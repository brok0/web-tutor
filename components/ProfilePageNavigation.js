import Link from "next/dist/client/link";
import { useSession } from "next-auth/react";

export default function ProfilePageNavigation() {
  const { data: session, status } = useSession();

  return (
    <div className="relative bg-purple-500">
      <div className="flex flex-col items-center border-b-2 px-6 h-16 md:flex-row md:justify-start md:space-x-10 text-white">
        <Link href="/profile/messenger" className="inline-block">
          Messages
        </Link>
        <Link href="/profile/lessons" className="inline-block">
          Lessons
        </Link>
        <Link href="/profile" className="inline-block">
          Your Profile
        </Link>
      </div>
    </div>
  );
}
