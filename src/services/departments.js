import Http from './http';

const API = 'api/departments';

class Department {
    static fetchDepartments() {
        return Http.get(API);
    }

    static fetchDepartment(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitDepartment(department) {
        if (!department.id) {
            return Http.post(API, {...department});
        }
        return Http.put(`${API}/${department.id}`, {...department});
    }
}

export default Department;
