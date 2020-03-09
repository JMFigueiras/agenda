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
        const {fields, contacts, departments} = this.props;

        const i = 0;

        return (
            <>
                <Form>
                    {map(fields, field => (
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


                    ))}
                    <Button>Submit</Button>
                </Form>
            </>
        );
    }
}

export default FormBuilder;
