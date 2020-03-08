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
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchContact(this.props.match.params.id);
        }
    }

    render() {
        const {
            fields,
            submitContactData
        } = this.props;

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
                                    name={field.control}
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
