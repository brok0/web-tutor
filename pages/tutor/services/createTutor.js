export const createTutorRequest = (url, body) => {
	console.log(url, body);
	return fetch(url, { body, method: "POST" }).then((res) => res.json());
};
