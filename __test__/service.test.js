import calculatePercentage from '../services/calculatePercentage';
import { validateUserInput } from './../services/validateUserInput';

describe('testing helper functions', () => {
    describe('Calculate Percentage', () => {
        it('should return 10', () => {
            expect(calculatePercentage(100, 10)).toEqual(10);
        });
    });
    describe('validating input', () => {
        let errorObject, mockInputs;

        it('should return an object an error object', () => {
            mockInputs = {
                name: '',
                creator: "creator",
                goal: 0,
                description: "description",
                image: "image",
                donated: 0
            };
            errorObject = {
                name: expect.any(String),
                goal: expect.any(String),
            };

            expect(validateUserInput(mockInputs)).toEqual(expect.objectContaining(errorObject));

        });
        it('should return an object with key goal and value string', () => {
            mockInputs = {
                name: 'name',
                creator: "creator",
                goal: 10,
                description: "description",
                image: "image",
                donated: 0
            };
            errorObject = {
                goal: "\"goal\" must be larger than or equal to 100",
            };

            expect(validateUserInput(mockInputs)).toEqual(expect.objectContaining(errorObject));

        });
        it('should return void', () => {
            mockInputs = {
                name: 'name',
                creator: "creator",
                goal: 100,
                description: "description",
                image: "image",
                donated: 0
            };
            expect(validateUserInput(mockInputs)).toBeFalsy();


        });
    });
});
