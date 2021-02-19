import { mount, shallow, spyOn } from 'enzyme';
import Provider from '../context/ThemeContext';
import SearchBar from './../Components/SearchBar/SearchBar';

describe('<SearchBar/>', () => {
    let wrapper;

    it('should render correctly', (props) => {

        wrapper = shallow(
            <Provider>
                <SearchBar />
            </Provider>
        );

        expect(wrapper.getElement()).toEqual(1);

    });

});