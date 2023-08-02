import Joi from "joi";

export const inputRegisterSchema = Joi.object({
  email: Joi.string()
    .regex(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    )
    .required()
    .messages({
      "string.pattern.base": "*The email address format is incorrect",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
  password: Joi.string()
    .min(8)
    .max(20)
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    .regex(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/
    )
    .required()
    .messages({
      "string.min": "*The password should be minimum 8 characters long",
      "string.max": "*The password exceeds the maximum allowed length",
      "string.pattern.base":
        "*At least one uppercase letter, one lowercase letter and one number",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
  confirm: Joi.string()
    .min(8)
    .max(20)
    .regex(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/
    )
    .required()
    .messages({
      "string.min": "*The password should be minimum 8 characters long",
      "string.max": "*The password exceeds the maximum allowed length",
      "string.pattern.base":
        "*At least one uppercase letter, one lowercase letter and one number",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
  checkbox: Joi.boolean().valid(true).required().messages({}),
});

export const inputLoginSchema = Joi.object({
  login: Joi.string().required().messages({
    "string.empty": "*This field is required",
    "any.required": "*This field is required",
  }),
  password: Joi.string()
    .min(8)
    .max(20)
    .regex(
      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/
    )
    .required()
    .messages({
      "string.min": "*The password should be minimum 8 characters long",
      "string.max": "*The password exceeds the maximum allowed length",
      "string.pattern.base":
        "*At least one uppercase letter, one lowercase letter and one number",
      "string.empty": "*This field is required",
      "any.required": "*This field is required",
    }),
});
