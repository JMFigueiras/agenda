import Http from './http';

const API = 'api/departments';

class Departments {
    static fetchDepartments() {
        return Http.get(API);
    }

    static fetchDepartment(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitDepartments(departments) {
        if (!departments.id) {
            return Http.post(API, {...departments});
        }
        return Http.put(`${API}/${departments.id}`, {...departments});
    }
}

export default Departments;
