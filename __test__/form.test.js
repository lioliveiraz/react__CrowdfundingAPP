import Form from './../Components/CreateProject/Form';
import { mount, shallow, spy } from 'enzyme';
import { act } from "@testing-library/react";
import sinon from 'sinon';

describe('<Form>', () => {
    let target, wrapper;
    target = {
        name: "string",
        creator: "string",
        goal: "string",
        description: "string"

    };

    it('should render correctly', () => {

        wrapper = shallow(
            <Form />
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.contains(<input type="submit" />)).toBeTruthy();
        expect(wrapper.find('p')).toHaveLength(0);
        expect(wrapper.find('label')).toHaveLength(1);
        expect(wrapper.find('textarea')).toHaveLength(1);


    });
});