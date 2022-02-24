import { Field, ErrorMessage } from "formik";

export const InputField = ({ label, name, type, subtype }) => {
	return (
		<div className="mx-2 my-1 w3/4 flex flex-col">
			<label className="font-bolder">{label}</label>
			<Field as={subtype} type={type} name={name} className="border" />
			<ErrorMessage
				name={name}
				component="div"
				className="text-sm text-red-600 "
			/>
		</div>
	);
};
