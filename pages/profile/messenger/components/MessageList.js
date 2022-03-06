import Message from "./Message";

export default function MessageList({ messages }) {
	return (
		<div className="border w-4/6 h-(msngr-height) w-(msngr-width)">
			<ul>
				{messages ? (
					messages.map((data) => <Message data={data} />)
				) : (
					<h2>No Message in this group</h2>
				)}
			</ul>
		</div>
	);
}
