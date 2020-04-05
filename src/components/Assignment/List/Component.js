import React, {PureComponent} from 'react';
import {
    Table,
    ButtonGroup,
    Button,
    Container,
    Col,
    Row
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

import {
    ModalConfirm
} from '@components/common';

class AssignmentTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalFlag: null
        };
    }

    componentDidMount() {
        this.props.fetchAssignments();
    }

    onDelete(assignment) {
        this.setState(() => ({modalFlag: null}), () => this.props.deleteAssignment(assignment.id));
    }

    handleModal(modalFlag, assignment) {
        this.setState(() => ({modalFlag}));
        this.props.updateAssignment(assignment);
    }


    render() {
        const {modalFlag} = this.state;
        const {
            assignment, assignments
        } = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <Button
                            className="float-right"
                            color="primary"
                            size="lg"
                            tag={Link}
                            to="/assignments/new"
                        >
                            Nueva asignación
                        </Button>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
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
                                        <td className="text-center">
                                            <ButtonGroup>
                                                <Button tag={Link} to={`/assignments/${assignment.id}`}>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Button>
                                                <Button
                                                    onClick={() => this.handleModal(true, assignment)}
                                                    color="danger"
                                                >
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                {modalFlag && (
                    <ModalConfirm
                        title="Confirme borrado"
                        message="Estas por borrar una Asignacion"
                        onDismiss={() => this.handleModal(null)}
                        onAccept={() => this.onDelete(assignment)}
                    >
                        <div> Testing </div>
                    </ModalConfirm>
                )}
            </Container>
        );
    }
}

export default AssignmentTable;
