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
            stateEmail: '',
            statePassword: ''
        };
    }

    handleChange(value, property) {
        this.setState(
            () => ({[property]: value})
        );
    }

    render() {
        const {
            password,
            email,
            submitAction
        } = this.props;

        const {
            stateEmail,
            statePassword
        } = this.state;

        return (
            <Container fluid>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                            key="exampleEmail"
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="with a placeholder"
                            value={stateEmail}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'stateEmail')
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                            key="examplePassword"
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="password placeholder"
                            value={statePassword}
                            onChange={
                                ({target: {value}}) => this.handleChange(value, 'statePassword')
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
