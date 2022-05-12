import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from "formik";
import './styles/form.css'
import { formValidationSchema } from "./validation/formValidation";

interface Values {
	name: string;
	email: string;
	message: string;
}

export const EmailForm = () => {

    const renderError = (message: string) => <p>{message}</p>

	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				message: "",
			}}
            validationSchema={formValidationSchema}
			onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
                setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 500);
			}}
		>
			<Form>
				<label htmlFor="name">Full Name</label>
				<Field id="input" name="name" placeholder="John Doe" />
                <ErrorMessage name="name" render={renderError} />

				<label htmlFor="email">Email</label>
				<Field id="input" name="email" placeholder="email@domain.co.uk" />
                <ErrorMessage name="email" render={renderError} />

				<label htmlFor="message">Your Message</label>
				<Field as="textarea" id="input" name="message" />
                <ErrorMessage name="message" render={renderError} />

				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};
