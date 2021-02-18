import Form from './../Components/CreateProject/Form';
import { mount, shallow } from 'enzyme';
import { act } from "@testing-library/react";

describe('<Form>', () => {
    let target, wrapper;
    target = {
        name: "string",
        creator: "string",
        goal: "string",
        description: "string"

    };

    it('should add items', () => {

        wrapper = shallow(
            <Form />
        );

        expect(wrapper.getElement()).toEqual();


    });
});