import Input from './../Components/Input/Input';
import { mount, spy, shallow } from 'enzyme';
import sinon from 'sinon';

describe('input', () => {
    let wrapper, userInput;
    const onchange = sinon.spy();

    userInput = {
        value: "", handleChange: onchange, type: "", name: "", placeholder: "", label: "", max: ""
    };

    describe('check render', () => {
        beforeEach(() => {
            wrapper = shallow(<Input userInput={userInput} />);
        });
        it('should render without props correctly', () => {

            expect(wrapper).toMatchSnapshot();
            expect(wrapper.contains(<label />)).toBeTruthy();
            expect(wrapper.find('input')).toHaveLength(1);

        });
    });


    describe('check mount', () => {

        beforeEach(() => {
            userInput = {
                value: "value", handleChange: onchange, type: "type", name: "name", placeholder: "placeholder", label: "label", max: 10
            };
            wrapper = mount(<Input userInput={userInput} />);
        });

        it('should mount with right props', () => {

            expect(wrapper.props().userInput).toEqual(userInput);
        });

        it('allows us to set props', () => {

            expect(wrapper.props().userInput.value).toEqual('value');
            wrapper.setProps({
                userInput: { value: "newValue" }
            });
            expect(wrapper.props().userInput.value).toEqual('newValue');
        });


    });


    afterEach(() => { jest.clearAllMocks(); });

});