const actionType = {
	CHANGE_GROUP: "CHANGE GROUP",
};

const actions = {};

actions.changeGroup = (groupId) => ({
	type: actionType.CHANGE_GROUP,
	payload: groupId,
});

export { actionType, actions };
