import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
	name: string;
	email: string;
	message: string;
}

export const EmailForm = () => {
	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				message: "",
			}}
			onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 500);
			}}
		>
			<Form>
				<label htmlFor="name">Full Name</label>
				<Field id="name" name="name" placeholder="John Doe" />

				<label htmlFor="email">Email</label>
				<Field id="email" name="email" placeholder="email@domain.co.uk" />

				<label htmlFor="message">Your Message</label>
				<Field id="message" name="message" placeholder="..." type="textArea" />

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};
