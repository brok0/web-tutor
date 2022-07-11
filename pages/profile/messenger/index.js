import { useReducer } from "react";
import PageHeader from "../components/PageHeader";
import ConversationList from "./components/ConversationList";
import MessageInput from "./components/MessageInput";
import MessageList from "./components/MessageList";
import { conversations, messages } from "./services/fakeData";
import reducer from "./services/state/messenger-reducer";
import { actions } from "./services/state/messenger-actions";
import Header from "../../../components/Header";

const initialState = { currentConversation: messages[0] };

function Messenger() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeConversation = (id) => {
    dispatch(actions.changeConversation(id));
  };

  return (
    <div className="md:px-8 sm:px-1">
      <Header />
      <PageHeader />

      <div className="flex mx-3 my-1">
        <ConversationList conversations={conversations} handleChange={changeConversation} />
        <div className="ml-2">
          <MessageList messages={state.currentConversation?.messages} />
          <MessageInput />
        </div>
      </div>
    </div>
  );
}

export default Messenger;
