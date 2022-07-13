import Link from "next/dist/client/link";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ProfileOptions from "../pages/profile/components/ProfileOptions";

export default function ProfilePageNavigation() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative bg-gray-500">
      <div className="flex flex-col items-center border-b-2 border-gray-100 px-6 md:flex-row md:justify-start md:space-x-10">
        <Link href="/profile/messenger" className="inline-block">
          Messages
        </Link>
        <Link href="/profile/lessons" className="inline-block">
          Lessons
        </Link>

        <Link href="" className="opacity-75">
          Setting
        </Link>

        <div className="m-auto">
          {status === "authenticated" ? (
            <div>
              <img className="rounded w-8" src={session.user.image} onClick={toggleOpen} />
              {open && <ProfileOptions />}
              <p className="text-white text-xs">{session.user.name}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
