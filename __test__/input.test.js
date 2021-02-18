import Input from './../Components/Input/Input';
import { mount, spy, shallow } from 'enzyme';
import sinon from 'sinon';

describe('input', () => {
    const fn = sinon.spy();
    let wrapper, userInput;
    userInput = {
        value: "", handleChange: fn, type: "", name: "", placeholder: "", label: "", max: ""
    };
    ;
    describe('check render', () => {
        beforeEach(() => {
            wrapper = shallow(<Input userInput={userInput} />);
        });
        it('should render without props correctly', () => {

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<label />)).toBeTruthy();
        });
    });
    describe('check mount', () => {
        userInput = {
            value: "value", handleChange: fn, type: "type", name: "name", placeholder: "placeholder", label: "label", max: 10
        };
        beforeEach(() => {
            wrapper = mount(<Input userInput={userInput} />);
        });


        it('should mount with right props', () => {

            expect(wrapper.props().userInput).toEqual(userInput);
        });

        it('allows us to set props', () => {
            wrapper.setProps({

                value: "newValye"

            });

            userInput['value'] = "newValue";

            expect(wrapper.props().userInput).toEqual(userInput);

        });
    });



});