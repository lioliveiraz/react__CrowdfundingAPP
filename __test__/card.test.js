import { shallow } from 'enzyme';
import ProjectCard from '../Components/ProjectList/Project/Card';

describe("Project Card", () => {
    let wrapper;


    describe('<Card> rendering', () => {
        beforeEach(() => {
            const mockProjectObject = {
                id: 1,
                name: " name",
                goal: 1,
                donated: 1,
                creator: "creator",
                image: "image",
                description: "description"
            };
            wrapper = shallow(
                <ProjectCard project={mockProjectObject} />
            );

        });
        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
        it('renders tags correctly', () => {
            expect(wrapper.find('img')).toHaveLength(1);
            expect(wrapper.find('h3')).toHaveLength(1);

        });
        it('renders elements with  props', () => {
            expect(wrapper.containsMatchingElement(<img alt="project name  name" src="image" />)).toBeTruthy();
            expect(wrapper.containsMatchingElement(<h3>name</h3>)).toBeTruthy();

        });

    });



});