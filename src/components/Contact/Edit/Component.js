import React, {PureComponent} from 'react';
import map from 'lodash/map';
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
    handleChange(value, property) {
        this.setState(
            () => ({[property]: value})
        );
    }

    render() {
        const {
            fields,
            submitContactData
        } = this.props;

        console.log(fields);
        return (
            <Container fluid>
                <Form>
                    {map(fields, field => (
                        <FormGroup>
                            <Label>
                                {field.label}
                                <br/>
                                <Input
                                    key={field.control}
                                    {...field}
                                />
                            </Label>
                        </FormGroup>
                    ))}
                    <Button
                        onClick={() => submitContactData()}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default FormBuilder;
