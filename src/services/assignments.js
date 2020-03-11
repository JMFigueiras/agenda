import Http from './http';

const API = 'api/assignments';

class Assignment {
    static fetchAssignments() {
        return Http.get(`${API}`);
    }

    static fetchAssignment(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitAssignment(assignment) {
        if (!assignment.id) {
            return Http.post(API, {...assignment});
        }
        return Http.put(`${API}/${assignment.id}`, {...assignment});
    }

    static deleteAssignment(id) {
        return Http.delete(`${API}/${id}`, {...id});
    }
}

export default Assignment;
