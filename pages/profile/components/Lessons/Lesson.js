import CONSTANTS from "./constants";

export default function Lesson({ lesson }) {
	const { tutor, topic, date, state } = lesson;

	const resolveLessonState = () => {
		switch (state) {
			case CONSTANTS.lessonStates.active:
				return <div>{date}</div>;
			case CONSTANTS.lessonStates.cancelled:
				return <div>Active</div>;
			case CONSTANTS.lessonStates.finished:
				return <div>Finished</div>; /// TODO : ADD ICONS
			default:
				break;
		}
	};
	return (
		<div className="container w-11/12 rounded border-black border-2 m-2 p-2 flex justify-between">
			<div>
				<h2>Tutor : {tutor}</h2>
				<h2>Topic : {topic}</h2>
			</div>

			{resolveLessonState()}
		</div>
	);
}
