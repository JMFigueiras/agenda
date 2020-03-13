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
            this.props.fetchDepartment(this.props.match.params.id);
        } else {
            this.props.updateDepartment({});
        }
    }

    render() {
        const {
            fields,
            submitDepartmentData
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
                        onClick={() => submitDepartmentData()}
                    >
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default FormBuilder;
