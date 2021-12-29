export default function Message({ data }) {
	console.log(data);
	const { by, text } = data;
	return <div>{text}</div>;
}
