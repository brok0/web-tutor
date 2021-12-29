import { useState } from "react";
import DateTimePickerModal from "./DateTimePickerModal";

export default function TutorCard({ tutor }) {
	const { name, rating, specialization, description, price } = tutor;
	const [dateTimeModalOpen, setModalOpen] = useState(false);

	const cutDescription = () => {
		const maxLength = 250;

		if (description.length > maxLength) {
			return description.substring(0, maxLength);
		} else return description;
	};

	const toggleDateTime = () => {
		setModalOpen(!dateTimeModalOpen);
	};

	return (
		<div className="container w-full p-2 bg-white rounded flex justify-between mb-2">
			<div id="tutorInfo" className="">
				<img
					alt="profilepicture"
					src="./дендімон.png"
					className="w-16 h-16"
				></img>
				<div className="flex">
					<h4>{rating} &nbsp;</h4>{" "}
					<img src="./star.png" className="w-4 h-4 align-middle"></img>
				</div>
				<h4>
					<strong>{name}</strong>
				</h4>
			</div>
			<div id="tutorDescription" className="w-2/3">
				<h3>
					<strong>Specialization :</strong> {specialization}
				</h3>
				<p>{cutDescription()}</p>
			</div>
			<div id="buttons" className="flex flex-col">
				<h3>{price}$/hour</h3>
				<button
					onClick={toggleDateTime}
					className="w-24 h-8 bg-purple-300 rounded hover:bg-purple-500 my-auto text-xs bold"
				>
					Buy Lesson
				</button>
				<button className="w-24 h-8 bg-gray-300 rounded hover:bg-purple-500 my-auto text-xs bold">
					Write Message
				</button>
			</div>

			{dateTimeModalOpen ? (
				<DateTimePickerModal
					onClose={toggleDateTime}
					lesson={specialization}
					price={price}
				/>
			) : (
				""
			)}
		</div>
	);
}
