import Conversation from "./Conversation";

export default function ConversationList({ conversations }) {
	return (
		<div>
			<ul>
				{conversations ? (
					conversations.map((data) => (
						<li>
							<div>
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
