import Joi from "joi";

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required()
}).messages({
    'any.required': '{#label} is required.',
    'string.empty': `{#label} musn\'t be left empty.`,
    'string.email': 'Email must contain a valid address.',
    'any.min': `{#label} must be at least {#limit} characters.`
})

export default loginSchema