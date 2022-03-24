import { useState } from "react";
import Dropdown from "./Dropdown";
import { specializations } from "../../../services/constants";
import { useSelector } from "react-redux";

export default function SearchBar({ updateTutors }) {
	const learnOptions = Object.values(specializations);
	const priceOptions = ["5$-10$", "10$-20$", "20$-50$", ">$50"];
	const timeOptions = ["Morning", "Evening", "Noon"];
	const baseUrl = useSelector((state) => state.user.baseServiceUrl);

	const handleSearch = () => {
		const requestUrl = baseUrl + "/tutor/searchTutors";
		let priceRange = document
			.getElementById("price-dropdown")
			.textContent.replace(/\$/g, "");

		priceRange = priceRange.split("-");

		const selectedOptions = {
			specialization: document.getElementById("specialization-dropdown")
				.textContent,
			priceRange: {
				minPrice: priceRange[0],
				maxPrice: priceRange[1],
			},
			time: document.getElementById("time-dropdown").textContent,
		};

		console.log(selectedOptions);
		fetch(requestUrl, {
			body: JSON.stringify(selectedOptions),
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((res) => {
				updateTutors(res);
			});
	};

	return (
		<div className="container mx-auto mt-5 border-2 border-gray-200 rounded">
			<div className="flex flex-col divide-black md:justify-around md:flex-row ">
				<div className="m-auto md:py-2">
					<h3>I want to learn</h3>
					<Dropdown
						optionsList={learnOptions}
						id="specialization-dropdown"
					></Dropdown>
				</div>
				<div className="m-auto md:py-2">
					<h3>Price per lesson</h3>
					<Dropdown optionsList={priceOptions} id="price-dropdown"></Dropdown>
				</div>
				<div className="m-auto md:py-2">
					<h3>Preffered Time</h3>
					<Dropdown
						optionsList={timeOptions}
						id="time-dropdown"
						disabled={true}
					></Dropdown>
				</div>
				<div className="m-auto my-2 md:my-auto">
					<button
						className="w-16 h-8 bg-purple-300 rounded hover:bg-purple-500 my-auto font-semibold"
						onClick={handleSearch}
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
