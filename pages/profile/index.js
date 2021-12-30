import Header from "../../components/Header";
import Lessons from "./components/Lessons/Lessons";
import PageHeader from "./components/PageHeader";
import { useSession } from "next-auth/react";
import Login from "../../components/Login";

export default function ProfilePage() {
	const { data: session, status } = useSession({
		required: true,
		onUnauthenticated() {
			return <Login />;
		},
	});

	return (
		<div className="px-8">
			<Header />
			<PageHeader />
			<Lessons />
		</div>
	);
}

ProfilePage.auth = {
	loading: <div>Loading</div>,
	unauthorized: "/redirect-here",
};
