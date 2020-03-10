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
            assignment: null
        };
    }

    componentDidMount() {
        this.props.fetchAssignments();
    }

    handleModal(assignment) {
        console.log(assignment);
        this.setState(() => ({assignment}));
    }

    onDelete() {
        this.setState(() => ({assignment: null}), () => alert('se borro'));
    }

    render() {
        const {assignment} = this.state;
        const {assignments} = this.props;
        return (
            <Container>
                <Row>
                    <Col>
                        <Button
                            className="float-right"
                            color="secondary"
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
                                {assignments.map(assig => (
                                    <tr>
                                        <td>{assig.firstName}</td>
                                        <td>{assig.lastName}</td>
                                        <td>{assig.address}</td>
                                        <td>{assig.role}</td>
                                        <td>{assig.name}</td>
                                        <td>{assig.departmentAddress}</td>
                                        <td>{assig.description}</td>
                                        <td className="text-center">
                                            <ButtonGroup>
                                                <Button tag={Link} to={`/assignments/${assig.id}`}>
                                                    <FontAwesomeIcon icon={faEdit}/>
                                                </Button>
                                                <Button
                                                    onClick={() => this.handleModal(assig)}
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
                {assignment && (
                    <ModalConfirm
                        title="Confirme borrado"
                        message="Estas por borrar una Asignacion"
                        onDismiss={() => this.handleModal(null)}
                        onAccept={() => this.onDelete()}
                    >
                        <div> Algo </div>
                    </ModalConfirm>
                )}
            </Container>
        );
    }
}

export default AssignmentTable;
