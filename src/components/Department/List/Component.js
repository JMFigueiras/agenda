import React, {PureComponent} from 'react';
import {
    Button,
    Col,
    Container,
    Row,
    Table
} from 'reactstrap';

import {Link} from 'react-router-dom';

class DepartmentTable extends PureComponent {
    componentDidMount() {
        console.log('componentDidMount');
        this.props.fetchDepartments();
    }

    render() {
        const {departments} = this.props;
        /* this.props.contacts.forEach(contact => {
            if (contact.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            rows.push(<ContactRow contact={contact}/>);
        }); */
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <Table bordered condensed hover stripped size="sm">
                            <thead>
                                <tr>
                                    <th>Departamentos</th>
                                    <th>Descripcion</th>
                                    <th>Telefono</th>
                                </tr>
                            </thead>
                            <tbody>
                                {departments.map(department => (
                                    <tr>
                                        <td>{department.name}</td>
                                        <td>{department.description}</td>
                                        <td>{department.phoneNumber}</td>
                                        <td>
                                            <Link to={`/departments/${department.id}`}>Edit</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DepartmentTable;
