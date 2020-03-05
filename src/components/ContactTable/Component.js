import React, {PureComponent} from 'react';

class ContactTable extends PureComponent {
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        const {contacts} = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Genero</th>
                        <th>Fecha de nacimiento</th>
                        <th>Numero de telefono</th>
                        <th>Direccion</th>
                        <th>Cargo</th>
                        <th>Notas</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.gender}</td>
                            <td>{contact.birthDate}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.address}</td>
                            <td>{contact.role}</td>
                            <td>{contact.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default ContactTable;
