import { actionType, actions } from "./messenger-actions";
import { messages } from "../fakeData";

export default function reducer(state, action) {
	switch (action.type) {
		case actionType.CHANGE_GROUP: {
			const index = messages.findIndex((el) => {
				el.convId === action.payload.groupId;
			});

			return { ...state, currentGroup: messages[index] };
		}
	}
}
