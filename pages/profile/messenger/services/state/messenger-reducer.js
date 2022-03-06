import { actionType, actions } from "./messenger-actions";
import { messages } from "../fakeData";

export default function reducer(state, action) {
	switch (action.type) {
		case actionType.CHANGE_CONVERSATION: {
			const index = messages.findIndex((el) => el.convId === action.id);

			return { ...state, currentConversation: messages[index] };
		}

		//send message
		default: {
			throw new Error();
		}
	}
}
