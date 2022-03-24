import TutorCard from "./TutorCard";
export default function TutorList({ tutors }) {
	console.log(tutors);
	return (
		<div className="container bg-gray-300 rounded p-2 mx-auto mt-4">
			{tutors.map((tutor, i) => (
				<TutorCard tutor={tutor} key={i}></TutorCard>
			))}
		</div>
	);
}
