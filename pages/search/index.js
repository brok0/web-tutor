import Header from "../../components/Header";
import SearchBar from "./components/SearchBar";
import TutorList from "./components/TutorList";
import Head from "next/head";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Spinner = () => {
	//TODO : change this to skeleton
	return (
		<div className="flex justify-center items-center">
			<div
				className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
				role="status"
			>
				<div className="w-2 h-2 bg-blue-400 rounded-lg"></div>
			</div>
			Loading...
		</div>
	);
};
export default function SearchPage() {
	//constructing service url service url
	const baseUrl = useSelector((state) => state.user.baseServiceUrl);

	const [tutors, setTutors] = useState();

	useEffect(() => {
		const requestUrl = baseUrl + "/tutor/getTutors";
		fetch(requestUrl)
			.then((res) => res.json())
			.then((res) => {
				setTutors(res);
			});
	}, []);

	const updateTutors = (tutors) => {
		setTutors(tutors);
	};

	return (
		<div>
			<Head>
				<title>Web Tutor</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
					integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
					crossorigin="anonymous"
				/>
			</Head>
			<main>
				<div className="md:px-8 sm:px-1">
					<Header />
					<div className="container px-4 m-auto">
						<h1>This is Search Page</h1>
						<SearchBar updateTutors={updateTutors} />
						{tutors ? <TutorList tutors={tutors} /> : <Spinner></Spinner>}
					</div>
				</div>
			</main>
		</div>
	);
}
