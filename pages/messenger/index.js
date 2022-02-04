import { useReducer } from "react";
import PageHeader from "../profile/components/PageHeader";
import ConversationList from "./components/ConversationList";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import { conversations, messages } from "./services/fakeData";
import reducer from "./services/state/messenger-reducer";
import { actions } from "./services/state/messenger-actions";
import withHeader from "../../components/withHeader";

const initialState = { currentConversation: messages[0] };

function Messenger() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const changeConversation = (id) => {
		dispatch(actions.changeConversation(id));
	};

	return (
		<div>
			<PageHeader />

			<div className="flex">
				<ConversationList
					conversations={conversations}
					handleChange={changeConversation}
				/>
				<div className="ml-2">
					<MessageList messages={state.currentConversation?.messages} />
					<MessageInput />
				</div>
			</div>
		</div>
	);
}

export default withHeader(Messenger);
