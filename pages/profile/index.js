import { useSession } from "next-auth/react";
import Login from "../../components/Login";
import SignOut from "../../components/SignOut";
import { ProfileLayout } from "../../layouts/ProfileLayout";

function ProfilePage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return <Login />;
    },
  });

  return (
    <ProfileLayout pageTitle="Profile">
      <div className="grid grid-cols-2 gap-x-10 my-10 h-(msngr-height)">
        <div className="border rounded bg-gray-200 relative p-4">
          <h3 className="text-xl font-bold mb-4">Settings </h3>
          <div className="absolute top-5 right-5">
            <SignOut />
          </div>
          <div>
            <img className="rounded w-32" src={session.user.image} />
            <p className="">
              <b>Your name</b> : {session.user.name}
            </p>
          </div>
        </div>
        <div>
          <div className="border rounded bg-gray-200 h-2/5 mb-6"></div>
          <div className="border rounded bg-gray-200 h-2/5"></div>
        </div>
      </div>
    </ProfileLayout>
  );
}

ProfilePage.auth = {
  loading: <div>Loading</div>,
  unauthorized: "/error",
};

export default ProfilePage;
