const conversations = [
	{
		id: 1,
		name: "John Doe",
		lastMessage: "Helloo!",
		imgUrl: "../../дендімон.png",
	},
	{
		id: 2,
		name: "John Way",
		lastMessage: "What about evening",
		imgUrl: "../../дендімон.png",
	},
	{
		id: 3,
		name: "Bruce Wayne",
		lastMessage: "No we dont do this here",
		imgUrl: "../../дендімон.png",
	},
];
// how to better specify who sended message?
const messages = [
	{
		convId: 1,
		messages: [
			{ by: "You", text: "Hi! whatcha doing" },
			{ by: "User", text: "Helloo!" },
		],
	},
	{
		convId: 2,
		messages: [
			{ by: "You", text: "Hi! whatcha doing" },
			{ by: "User", text: "What about evening?" },
		],
	},
	{
		convId: 3,
		messages: [
			{ by: "You", text: "Hi! whatcha doing" },
			{ by: "User", text: "No we dont do this here" },
		],
	},
];

export { conversations, messages };
