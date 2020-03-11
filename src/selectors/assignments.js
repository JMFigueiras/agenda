import filter from 'lodash/filter';
import get from 'lodash/get';

export const getAssignments = id => ({assignments: {assignments}}) => (
    id
        ? filter(assignments, assignment => assignment.id === id) : assignments
);
export const getAssignment = id => ({assignments: {assignment}}) => (id ? get(assignment, id, null) : assignment);
