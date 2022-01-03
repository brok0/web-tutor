import Conversation from "./Conversation";
import { actions } from "../services/state/messenger-actions";

export default function ConversationList({ conversations, dispatch }) {
	return (
		<div>
			<ul>
				{conversations ? (
					conversations.map((data) => (
						<li>
							<div onClick={dispatch(actions.changeGroup(data.convId))}>
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
