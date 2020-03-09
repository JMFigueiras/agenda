import React, {PureComponent} from 'react';
import map from 'lodash/map';
import {
    Button,
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
            contacts,
            departments,
            submitAssignmentData
        } = this.props;

        return (
            <div>
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
                                >
                                    {field.control === 'contacts' && contacts.map(contact => (
                                        <option value={contact.id}>
                                            {contact.firstName}
                                            {' '}
                                            {contact.lastName}
                                        </option>
                                    ))}

                                    {field.control === 'departments' && departments.map(department => (
                                        <option value={department.id}>
                                            {department.name}
                                            {' - '}
                                            {department.address}
                                        </option>
                                    ))}
                                </Input>
                            </Label>
                        </FormGroup>

                    ))}
                    <Button
                        onClick={() => submitAssignmentData()}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormBuilder;
