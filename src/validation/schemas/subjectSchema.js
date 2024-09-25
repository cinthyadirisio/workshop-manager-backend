import Joi from "joi";
const objectIDpattern = /^[0-9a-fA-F]{24}$/;
const subjectSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(500).required(),
    workshop: Joi.string().length(24).pattern(objectIDpattern).required()
}).messages({
    'any.required': '{#label] is required.',
    'string.min': '{#label} must have at least {#limit} characters.',
    'string.max': '{#label} must have less than {#limit} characters.',
    'string.empty': `{#label} musn't be left empty.`
})

export default subjectSchema