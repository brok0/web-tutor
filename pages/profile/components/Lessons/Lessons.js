import CONSTANTS from "./constants";
import Lesson from "./Lesson";

export default function Lessons() {
	const lessons = [
		{
			tutor: "John Doe",
			topic: "Topic",
			date: "30.11 15:00",
			state: "Active",
		},
		{
			tutor: "John Doe",
			topic: "Topic",
			date: "30.11 15:00",
			state: "Finished",
		},
		{
			tutor: "John Doe",
			topic: "Topic",
			date: "30.11 15:00",
			state: "Cancelled",
		},
	];
	return (
		<div>
			<div className="h-64 mt-8 flex justify-around">
				<div className="w-full center ml-4">
					<h1>Upcoming</h1>
					<hr className="w-1/3" />
					<div>
						{lessons.map((lesson) => (
							<Lesson lesson={lesson} />
						))}
					</div>
				</div>
				<div className="w-full">
					<h1>Finished</h1>
					<hr className="w-1/3" />
					<div>
						{lessons.map((lesson) => (
							<Lesson lesson={lesson} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
