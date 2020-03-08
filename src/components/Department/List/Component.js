import React, {PureComponent} from 'react';
import {
    Table
} from 'reactstrap';

import {Link} from 'react-router-dom';

class DepartmentTable extends PureComponent {
    componentDidMount() {
        this.props.fetchDepartments();
    }

    render() {
        const {departments} = this.props;

        return (
            <>
                <Link to="/departments/new">Nuevo departamento</Link>
                <Table bordered condensed hover stripped size="sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Número de teléfono</th>
                            <th>Dirección</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map(department => (
                            <tr>
                                <td>{department.name}</td>
                                <td>{department.phoneNumber}</td>
                                <td>{department.address}</td>
                                <td>{department.description}</td>
                                <td>
                                    <Link to={`/departments/${department.id}`}>Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default DepartmentTable;
