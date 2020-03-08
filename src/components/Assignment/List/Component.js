import React, {PureComponent} from 'react';
import {
    Table
} from 'reactstrap';

import {Link} from 'react-router-dom';

class AssignmentTable extends PureComponent {
    componentDidMount() {
        this.props.fetchAssignments();
    }

    render() {
        const {assignments} = this.props;
        return (
            <>
                <Link to="/assignments/new">Nuevo assignment</Link>
                <Table bordered condensed hover stripped size="sm">
                    <thead>
                        <tr>
                            <th colSpan="4">Contacto</th>
                            <th colSpan="3">Departamento</th>
                            <th rowSpan="2">Acciones</th>
                        </tr>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Direccion</th>
                            <th>Cargo</th>

                            <th>Nombre</th>
                            <th>Dirección</th>
                            <th>Decripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignments.map(assignment => (
                            <tr>
                                <td>{assignment.firstName}</td>
                                <td>{assignment.lastName}</td>
                                <td>{assignment.address}</td>
                                <td>{assignment.role}</td>
                                <td>{assignment.name}</td>
                                <td>{assignment.departmentAddress}</td>
                                <td>{assignment.description}</td>
                                <td>
                                    <Link to={`/assignments/${assignment.id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default AssignmentTable;
