import Form from './../Components/CreateProject/Form';
import { mount, shallow, spyOn } from 'enzyme';
import React from 'react';
import Input from './../Components/Input/Input';

describe('<Form>', () => {
    let target, wrapper;
    target = {
        name: "string",
        creator: "string",
        goal: "string",
        description: "string"

    };
    describe('render form', () => {

        beforeEach(() => {
            wrapper = shallow(
                <Form />
            );
        });

        it('should render correctly', () => {

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<input type="submit" />)).toBeTruthy();
            expect(wrapper.find('p')).toHaveLength(0);
            expect(wrapper.find('label')).toHaveLength(1);
            expect(wrapper.find('textarea')).toHaveLength(1);

        });

    });
    describe('mount form', () => {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation((init) => [init, setState]);

        beforeEach(() => {
            wrapper = mount(<Form />);
        });
        /* 
                it('should render correctly', () => {
                    const name = wrapper.find('input').at(0);
                    name.instance().value = 'newNameFromTest';
                    name.simulate('change');
                    expect(setState).toBeCalledWith('newNameFromChange');
                }); */

        it('should return error', () => {

        });

    });

    afterEach(() => { jest.clearAllMocks(); });

});