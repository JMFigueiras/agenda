import React, {PureComponent} from 'react';

import {Container, Form, FormGroup, Label, Input} from 'reactstrap';

class FarmForm extends PureComponent{
    render(){
        const {fields} = this.props;
        console.log(fields);
        return (
            <Container fluid>
                <Form>
                    {fields.map(field => (
                        <>
                            <FormGroup>
                                <Label for="eggs">{field.label}</Label>
                                <Input
                                    {...field}
                                />
                            </FormGroup>
                        </>
                    ))}
                </Form>
            </Container>
        )
    }
}

export default FarmForm;
