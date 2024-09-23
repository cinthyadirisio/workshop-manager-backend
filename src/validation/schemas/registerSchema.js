import Joi from "joi";

const registerSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    photo: Joi.string().uri().optional(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    role: Joi.string().valid('admin', 'user', 'instructor').default('user'),
    logged: Joi.boolean().default(false),
    isActive: Joi.boolean().default(true)
}).messages({
    'any.required': '{#label} is required.',
    'string.empty': `{#label} musn\'t be left empty.`,
    'string.pattern.base': '{#label} must contain a valid ID.',
    'any.only': 'Role can only be one of the following: admin, user, instructor.',
    'string.email': 'Email must contain a valid address.',
    'string.uri': 'Photo must contain a valid URL.',
    'any.min': `{#label} must be at least {#limit} characters.`
})

export default registerSchema