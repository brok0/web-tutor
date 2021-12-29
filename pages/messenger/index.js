import Header from "../Header";
import PageHeader from "../profile/components/PageHeader";
import ConversationList from "./components/ConversationList";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import { conversations, messages } from "./services/fakeData";

export default function Messenger() {
	return (
		<div className="px-8">
			<Header />
			<PageHeader />

			<div class="flex">
				<ConversationList conversations={conversations} />
				<div className="ml-2">
					<MessageList messages={messages} />
					<MessageInput />
				</div>
			</div>
		</div>
	);
}
