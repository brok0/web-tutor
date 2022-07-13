import { useSession } from "next-auth/react";
import Login from "../../components/Login";
import { ProfileLayout } from "../../layouts/ProfileLayout";

function ProfilePage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return <Login />;
    },
  });

  return <ProfileLayout pageTitle={"Profile"} />;
}

ProfilePage.auth = {
  loading: <div>Loading</div>,
  unauthorized: "/error",
};

export default ProfilePage;
