import Joi from "joi";

const objectIDpattern = /^[0-9a-fA-F]{24}$/;

const custom = (value, helpers) => {
    const { instructorId } = helpers.state.ancestors[0];
    if (value.includes(instructorId)) return helpers.message(`Instructor can't be a participant.`)
    return value;
}

const workshopSchema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().greater(Joi.ref('startDate')).required(),
    duration: Joi.number().required(),
    schedule: Joi.string().required(),
    representativePhoto: Joi.string().uri().optional(),
    instructorId: Joi.string().pattern(objectIDpattern).required(),
    participants: Joi.array().items(Joi.string().pattern(objectIDpattern)).custom(custom)
}).messages({
        'date.greater': `Workshop's ending date must be later than the start date.`,
        'any.required': '{#label} is required.',
        'string.empty': `{#label} musn't be left empty.`,
        'string.pattern.base': '{#label} must contain a valid ID.',
        'array.includes': `Every {#label} item must be a valid ID`,
        'string.uri': 'Photo must contain a valid URL.',
    })

export default workshopSchema