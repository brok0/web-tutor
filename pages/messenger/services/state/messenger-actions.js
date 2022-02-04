const actionType = {
	CHANGE_CONVERSATION: "CHANGE CONVERSATION",
};

const actions = {};

actions.changeConversation = (id) => ({
	type: actionType.CHANGE_CONVERSATION,
	id,
});

export { actionType, actions };
