import { useState } from "react";
import { Formik, Form } from "formik";
import { InputField } from "../../components/ui/InputField";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const specializations = {
	languages: "Languages",
	math: "Math",
	science: "Science",
	music: "Music",
	lifeCoaching: "Life Coaching",
	other: "Other...",
};

export default function CreateTutor() {
	const options = [];

	for (const item in specializations) {
		options.push(specializations[item]);
	}

	//constructing service url service url
	const baseUrl = useSelector((state) => state.user.baseServiceUrl);
	const requestUrl = baseUrl + "/tutor/upgradeToTutor";

	const userId = 1;

	const { data: session, status } = useSession();
	const router = useRouter();
	const [requestState, setRequestStatus] = useState("");

	return (
		<div>
			{
				requestState ? (
					<h1>{requestState}. Redirecting to your profile...</h1>
				) : (
					""
				) //TODO: Add success icon
			}
			<Formik
				initialValues={{
					description: "",
					specialization: "",
					price: 0,
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
					if (!values.price) {
						errors.price = "Required";
					}

					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					const data = { ...values, email: session.user.email };

					fetch(requestUrl, {
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json",
						},
					})
						.then((res) => res.json())
						.then((res) => {
							setSubmitting(false);
							setRequestStatus(res.message);

							setTimeout(() => {
								router.push("/profile");
							}, 2500);
						});
				}}
			>
				{({ isSubmitting }) => (
					<Form className="border rounded bg-gray-50 p-2 w-1/2 m-auto flex flex-col align-center font-semibold">
						<InputField
							label="Specialization"
							name="specialization"
							options={options}
						></InputField>
						<InputField
							type="text"
							label="Description"
							name="description"
							subtype="textarea"
						></InputField>
						<InputField type="number" label="Price" name="price"></InputField>

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
