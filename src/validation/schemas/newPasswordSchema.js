import Joi from "joi";
const newPasswordSchema = Joi.object({
    password: Joi.string().min(4).required(),
})
export default newPasswordSchema