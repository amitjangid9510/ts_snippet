import * as yup from "yup";
import { InferType } from "yup";

// Common Validators
const nameValidator = yup
  .string()
  .trim()
  .min(2, "Must be at least 2 characters")
  .max(50, "Must be at most 50 characters")
  .matches(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed");

const emailValidator = yup
  .string()
  .trim()
  .email("Invalid email format");

const passwordValidator = yup
  .string()
  .min(6, "Password must be at least 6 characters")
  .matches(/\d/, "Password must contain at least one number");

const phoneValidator = yup
  .string()
  .matches(/^[6-9]\d{9}$/, "Must be a valid Indian 10-digit number");

// Schemas and Types together
export const signupSchema = yup.object({
  name: nameValidator.required("Name is required"),
  phone: phoneValidator.required("Phone number is required"),
  email: emailValidator.required("Email is required"),
  password: passwordValidator.required("Password is required"),
});

export type SignupFormData = InferType<typeof signupSchema>;

export const loginSchema = yup.object({
  email: emailValidator.required("Email is required"),
  password: yup.string().required("Password is required"),
});

export type LoginFormData = InferType<typeof loginSchema>;

// Example for another schema
export const contactSchema = yup.object({
  name: nameValidator.required("Name is required"),
  message: yup
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export type ContactFormData = InferType<typeof contactSchema>;

// Continue similarly for other schemas
