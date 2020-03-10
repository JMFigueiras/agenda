import React, {PureComponent} from 'react';
import map from 'lodash/map';
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

import {Link} from 'react-router-dom';

class FormBuilder extends PureComponent {
    componentDidMount() {
        this.props.fetchContacts();
        this.props.fetchDepartments();
    }

    render() {
        const {
            fields,
            submitAssignmentData
        } = this.props;

        return (
            <Container>
                <Form>
                    {map(fields, field => (
                        <FormGroup>
                            <Label>
                                {field.label}
                                <br/>
                                <Input
                                    key={field.control}
                                    name={field.control}
                                    type={field.type}
                                    selected={field.placeholder}
                                    {...field}
                                >
                                    {map(field.options, opt => (
                                        <option value={opt.id}>
                                            {opt.name ? `${opt.name} - ${opt.address}` : `${opt.firstName} ${opt.lastName}`}
                                        </option>
                                    ))}
                                </Input>
                            </Label>
                        </FormGroup>
                    ))}
                    <Button
                        onClick={() => submitAssignmentData()}
                    >
                        Guardar
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default FormBuilder;
