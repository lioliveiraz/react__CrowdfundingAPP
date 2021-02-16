import http from './httpServices';

/**
 * @function fetchData
 * @returns {object[]}
 */
export async function fetchData() {
    const response = await http.get("/projects");
    return response.data;

}
/**
 * @function fetchStaticPath
 * @param {number} id
 * @returns {object[]}
 */

export async function fetchStaticPath(id) {
    const response = await http.get(`/projects?id=${id}`);
    return response.data;
}
/**
 * @function changeDonationField
 * @param {number} id 
 * @param {object} project 
 * @returns {object}
 */

export async function changeDonationField(id, project) {
    const response = await http.put(`/projects/${id}`, project);
    return response.data;
}

/**
 * @function postProject
 * @param {object} projectData
 * @returns {object} 
 */
export async function postProject(projectData) {
    const response = await http.post(`/projects`, projectData);
    return response.data;
} 