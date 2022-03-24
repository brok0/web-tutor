import { useState } from "react";
import useComponentVisible from "../../../hooks/useComponentVisible";

const OptionList = ({ optionsList, onOptionClick }) => {
	const { ref, isComponentVisible } = useComponentVisible(true);

	return (
		<div ref={ref}>
			{isComponentVisible && (
				<div
					className="z-10 origin-top-right absolute right-15 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				>
					<div className="py-1" role="none">
						{optionsList.map((option) => (
							<h3
								className="text-gray-700 block px-4 py-2 text-sm w-full hover:bg-purple-300 "
								role="menuitem"
								id={`menu-item-${option}`}
								onClick={() => {
									onOptionClick(option);
								}}
							>
								{option}
							</h3>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default function Dropdown({ optionsList, id, disabled }) {
	const [isOpened, setOpened] = useState(false);
	const [selectedOption, setOption] = useState(optionsList[0]);

	const toggleOptionList = () => {
		setOpened(!isOpened);
	};

	const onOptionClick = (option) => {
		setOption(option);
	};

	return (
		<div
			className={
				disabled
					? "opacity-70 relative inline-block text-left pt-2"
					: " relative inline-block text-left pt-2"
			}
			onClick={toggleOptionList}
		>
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
					id={id}
					aria-expanded="true"
					aria-haspopup="true"
					disabled={disabled}
				>
					{selectedOption}
					{/* Heroicon name: solid/chevron-down */}
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{/*
      Dropdown menu, show/hide based on menu state.
  
      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
			{isOpened && (
				<OptionList
					isOpened={isOpened}
					optionsList={optionsList}
					onOptionClick={onOptionClick}
				></OptionList>
			)}
		</div>
	);
}
