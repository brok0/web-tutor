import Dropdown from "./Dropdown";
export default function SearchBar() {
	const learnOptions = ["English", "Ukrainian", "Spanish"];
	const priceOptions = ["5$-10$", "10$-20$", "20$-50$", ">$50"];
	const timeOptions = ["Morning", "Evening", "Noon"];
	return (
		<div className="container mx-auto mt-5 border-2 border-gray-200 rounded">
			<div className="flex flex-col divide-black md:justify-around md:flex-row ">
				<div className="m-auto md:py-2">
					<h3>I want to learn</h3>
					<Dropdown optionsList={learnOptions}></Dropdown>
				</div>
				<div className="m-auto md:py-2">
					<h3>Price per lesson</h3>
					<Dropdown optionsList={priceOptions}></Dropdown>
				</div>
				<div className="m-auto md:py-2">
					<h3>Preffered Time</h3>
					<Dropdown optionsList={timeOptions}></Dropdown>
				</div>
				<div className="m-auto my-2 md:my-auto">
					<button className="w-16 h-8 bg-purple-300 rounded hover:bg-purple-500 my-auto">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
