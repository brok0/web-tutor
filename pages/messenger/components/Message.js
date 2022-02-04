export default function Message({ data }) {
	const { by, text } = data;
	return (
		<li className="text-sm m-2" key={Math.random() * 100}>
			{by === "You" ? (
				<div
					className="bg-gray-400 ml-auto rounded py-1 px-3"
					style={{ width: "fit-content" }}
				>
					<p className="font-bold">{by}</p>
					<p>{text}</p>
				</div>
			) : (
				<div
					className="min-w-60 bg-gray-200 rounded py-1 px-3"
					style={{ width: "fit-content" }}
				>
					<p className="font-bold">{by}</p>
					<p>{text}</p>
				</div>
			)}
		</li>
	);
}
