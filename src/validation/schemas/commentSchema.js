import Joi from "joi";

const objectIDpattern = /^[0-9a-fA-F]{24}$/;

const commentSchema = Joi.object({
    workshopId: Joi.string().pattern(objectIDpattern).required(),
    userId: Joi.string().pattern(objectIDpattern).required(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
    date: Joi.date()
}).messages({
    'any.required': '{#label} is required.',
    'string.empty': `{#label} musn't be left empty.`,
    'string.pattern.base': '{#label} must contain a valid ID.'
})

export default commentSchema