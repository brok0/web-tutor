export default function Conversation({ data }) {
	return (
		<div className="w-60 h-22 py-2 mb-1 mt-1 flex border border-gray-300 rounded cursor-pointer w-fit hover:bg-gray-200">
			<img src={data.imgUrl} className="w-10 h-10 rounded ml-2 mr-2" />
			<div className="">
				<strong>{data.name}</strong>
				<p>{data.lastMessage}</p>
			</div>
		</div>
	);
}
