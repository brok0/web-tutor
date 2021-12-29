import Header from "../Header";
import Lessons from "./components/Lessons/Lessons";
import PageHeader from "./components/PageHeader";

export default function ProfilePage() {
	return (
		<div className="px-8">
			<Header />
			<PageHeader />
			<Lessons />
		</div>
	);
}
