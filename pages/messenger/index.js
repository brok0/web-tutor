import { useReducer } from "react";
import Header from "../../components/Header";
import PageHeader from "../profile/components/PageHeader";
import ConversationList from "./components/ConversationList";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import { conversations, messages } from "./services/fakeData";
import reducer from "./services/state/messenger-reducer";

const initialState = { currentGroup: messages[0] };

export default function Messenger() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="px-8">
			<Header />
			<PageHeader />

			<div class="flex">
				<ConversationList conversations={conversations} dispatch={dispatch} />
				<div className="ml-2">
					<MessageList messages={state.currentGroup.messages} />
					<MessageInput />
				</div>
			</div>
		</div>
	);
}
