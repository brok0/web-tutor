import { useSession } from "next-auth/react";
import Login from "../../components/Login";
import PageHeader from "./components/PageHeader";
function ProfilePage() {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			return <Login />;
		},
	});

	return (
		<div>
			<PageHeader />
		</div>
	);
}

ProfilePage.auth = {
	loading: <div>Loading</div>,
	unauthorized: "/error",
};

export default ProfilePage;
