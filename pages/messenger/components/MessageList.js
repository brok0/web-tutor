import Message from "./Message";

export default function MessageList({ messages }) {
	console.log(messages);
	return (
		<div className="border w-4/6 h-(msngr-height) w-(msngr-width)">
			<ul>
				{messages ? (
					messages.messages.map((data) => (
						<li>
							<Message data={data} />
						</li>
					))
				) : (
					<h2>No Message in this group</h2>
				)}
			</ul>
		</div>
	);
}
