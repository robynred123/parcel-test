import React from "react";
import * as Yup from "yup";

export const formValidationSchema = Yup.object({
	name: Yup.string()
		.min(2, "Name must be 2 characters or more")
		.max(50, "Please use a nickname")
		.required("Please provide your name"),
    email: Yup.string()
        .email('Invalid email format')
        .required("Please provide your email"),
    message: Yup.string()
        .min(5, "Please ensure your message requires adequate information")
        .max(200, "Please condense your message")
        .required('Please provide a message')
});
