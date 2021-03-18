export const SET_PROJECTS = 'setProjects';
export const GET_PROJECTS = 'getProjects';


export const getProjects = () => {

    return {
        type: GET_PROJECTS,
    };
};


export const setProjects = (payload) => {
    return {
        type: SET_PROJECTS,
        projects: payload
    };
};
const initialState = {
    projects: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return { ...state, projects: action.projects };
        default:
            return state;

    }
};