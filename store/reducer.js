export const GET_PROJECTS = 'getProjects';
export const SET_PROJECTS = 'setProjects';

export const getProjects = () => ({
    type: GET_PROJECTS
});

export const setProjects = (payload) => ({
    type: SET_PROJECTS,
    projects: payload
});
const initialState = {
    projects: []
};
export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return { ...state, projects: action.projects };
        default:
            return state;

    }
};