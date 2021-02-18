import Input from './../Components/Input/Input';
import { shallow } from 'enzyme';


describe('input', () => {
    let wrapper, userInput;
    userInput = {
        value: "", handleChange: "", type: "", name: "", placeholder: "", label: "", max: ""
    };
    beforeEach(() => {
        wrapper = shallow(<Input userInput={userInput}></Input>);
    });
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
        /*   expect(wrapper.getElement(<label />)).toEqual(); */
    });

});