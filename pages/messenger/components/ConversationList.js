import Conversation from "./Conversation";

export default function ConversationList({ conversations, handleChange }) {
	return (
		<div>
			<ul>
				{conversations ? (
					conversations.map((data) => (
						<li>
							<div>
								{
									// onClick={handleChange(data.convId)}>
								}
								<Conversation data={data} />
							</div>
						</li>
					))
				) : (
					<h2>No conversations yet!</h2>
				)}
			</ul>
		</div>
	);
}
