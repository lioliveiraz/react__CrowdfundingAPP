import http from './httpServices';

export async function fetchData() {
    const response = await http.get("/projects");
    return response.data;
}

export async function fetchStaticPath(id) {
    const response = await http.get(`/projects?id=${id}`);
    return response.data;
}

export async function changeDonationField(id) {
    const response = await http.put(`/projects?id=${id}`, { data: { donated: 10 } });
    return response.data;
}


export async function postProject(projectData) {
    const response = await http.post(`/projects`, projectData);
    return response.data;
} 