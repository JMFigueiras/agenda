import React, {PureComponent} from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class FormBuilder extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            stateFirstName: '',
            stateLastName: '',
            stateEmail: '',
            stateGender: '',
            stateBirthDate: '',
            statePhoneNumber: '',
            stateAddress: '',
            stateRole: '',
            stateNotes: ''
        };
    }

    handleChange(value, property) {
        this.setState(
            () => ({[property]: value})
        );
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            gender,
            birthDate,
            phoneNumber,
            address,
            role,
            notes,
            submitAction
        } = this.props;

        const {
            stateFirstName,
            stateLastName,
            stateEmail,
            stateGender,
            stateBirthDate,
            statePhoneNumber,
            stateAddress,
            stateRole,
            stateNotes
        } = this.state;

        return (
            <Container fluid>
                <Form>
                    <FormGroup>
                        <Label for="firstName">Nombre</Label>
                        <Input
                            key="firstName"
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Ingrese nombre..."
                            value={stateFirstName}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateFirtsName')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Apellido</Label>
                        <Input
                            key="lastName"
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Ingrese apellido..."
                            value={stateLastName}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateLastName')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            key="email"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Ingrese Email..."
                            value={stateEmail}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateEmail')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="gender">Genero</Label>
                        <Input
                            key="gender"
                            type="text"
                            name="gender"
                            id="gender"
                            placeholder="Ingrese Genero..."
                            value={stateGender}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateGender')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="birthDate">Fecha de Nacimiento</Label>
                        <Input
                            key="birthDate"
                            type="text"
                            name="birthDate"
                            id="birthDate"
                            placeholder="Ingrese Fecha de Nacimiento..."
                            value={stateBirthDate}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateBirthDate')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="phoneNumber">Numero de Telefono</Label>
                        <Input
                            key="phoneNumber"
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            placeholder="Ingrese Numero de Telefono..."
                            value={statePhoneNumber}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'statePhoneNumber')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Direccion</Label>
                        <Input
                            key="address"
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Ingrese Direccion..."
                            value={stateAddress}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateAddress')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="role">Cargo</Label>
                        <Input
                            key="role"
                            type="text"
                            name="role"
                            id="role"
                            placeholder="Ingrese Cargo..."
                            value={stateRole}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateRole')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="notes">Notas</Label>
                        <Input
                            key="notes"
                            type="text"
                            name="notes"
                            id="notes"
                            placeholder="Ingrese Notas..."
                            value={stateNotes}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateNotes')
                            }
                        />
                    </FormGroup>
                    <Button
                        onClick={() => submitAction(
                            stateEmail,
                            statePassword
                        )}
                    >
                        Submit
                    </Button>
                </Form>
                <Row>
                    <Col>
                        La propiedad password es de valor igual a = &nbsp;
                        {password}
                        <br/>
                        La propiedad email es de valor igual a = &nbsp;
                        {email}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FormBuilder;
