import filter from 'lodash/filter';
import get from 'lodash/get';

export const getAssignments = id => ({assignments: {assignments}}) => (
    id
        ? filter(assignments, assignment => assignment.id === id) : assignments
);
export const getAssignment = name => ({assignments: {assignment}}) => (name ? get(assignment, name, null) : assignment);
