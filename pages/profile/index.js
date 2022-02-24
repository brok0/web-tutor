import Lessons from "./lessons";
import { useSession } from "next-auth/react";
import Login from "../../components/Login";
import withHeader from "../../components/withHeader";
import PageHeader from "./components/PageHeader";

function ProfilePage() {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			return <Login />;
		},
	});
	console.log(session);

	return (
		<div>
			<h2>Welcome {session.user.name}</h2>
			<PageHeader />
		</div>
	);
}

ProfilePage.auth = {
	loading: <div>Loading</div>,
	unauthorized: "/error",
};

export default ProfilePage;
