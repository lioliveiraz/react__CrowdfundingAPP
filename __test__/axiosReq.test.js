import axios from 'axios';
import { fetchData, fetchStaticPath, changeDonationField, postProject } from '../pages/api/fetchData/requests';

jest.mock('axios');



describe('testing axios requests', () => {
    let expected, status, error;
    expected = {
        id: 1,
        name: expect.any(String),
        creator: expect.any(String),
        goal: expect.any(Number),
        description: expect.any(String),
        image: expect.any(String),
        donated: expect.any(Number),
    };
    describe('fetchStaticPath', () => {

        it('should retrieve a success response', async () => {
            status = "OK";
            axios.get.mockImplementationOnce(() => Promise.resolve(status));
            await expect(fetchStaticPath(1)).resolves.toEqual(status);

        });
        it(" request failure, retrieve an error", async () => {
            error = 'error';

            axios.get.mockImplementation(() => Promise.reject(new Error(error)));
            await expect(fetchStaticPath(1)).rejects.toThrow(error);
        });

    });
});