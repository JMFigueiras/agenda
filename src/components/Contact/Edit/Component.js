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
        } else {
            this.props.updateContact({});
        }
    }

    render() {
        const {
            fields,
            genderOptions,
            submitContactData
        } = this.props;

        console.log(fields, 'Campos');
        console.log(genderOptions, 'genderOptions');

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
                                >
                                    {map(genderOptions, gender => (
                                        <option value={gender}>
                                            {gender}
                                        </option>
                                    ))}
                                </Input>
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
