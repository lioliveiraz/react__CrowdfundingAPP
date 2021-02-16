import Joi from 'joi-browser';

const schema = {
    name: Joi.string().required().max(30),
    creator: Joi.string().required().max(20),
    goal: Joi.number().min(100),
    description: Joi.string(),
    image: Joi.string(),
    donated: Joi.number()

};

/**
 * @function validateUserInput
 * @param {object} formInputs 
 * @returns {object} 
 */

export const validateUserInput = (formInputs) => {
    const { error } = Joi.validate(formInputs, schema, { abortEarly: false });
    if (!error) return null;
    const validationErrors = {};

    error.details.forEach((item) => {
        validationErrors[item.path[0]] = item.message;
    });

    return validationErrors;
};