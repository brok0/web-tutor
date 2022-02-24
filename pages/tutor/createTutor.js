import { useState } from "react";
import { Formik, Form } from "formik";
import { InputField } from "../../components/ui/InputField";

export default function CreateTutor({ userId }) {
	return (
		<div>
			<h1>Any place in your app!</h1>
			<Formik
				initialValues={{
					description: "",
					specialization: "",
				}}
				validate={(values) => {
					const errors = {};
					if (!values.description) {
						errors.description = "Required";
					} else if (values.description.length < 20) {
						errors.description =
							"Description must extensive (More than 20 symbols)";
					}
					if (!values.specialization) {
						errors.specialization = "Required";
					}
					console.log(errors);
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form className="border rounded bg-gray-50 p-2 w-1/2 m-auto flex flex-col align-center font-semibold">
						<InputField
							type="text"
							label="Specialization"
							name="specialization"
						></InputField>
						<InputField
							type="text"
							label="Description"
							name="description"
							subtype="textarea"
						></InputField>

						<button
							type="submit"
							disabled={isSubmitting}
							className="border rounded bg-purple-400 p-1 text-white font-semibold w-1/2 m-auto"
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
