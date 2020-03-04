import React, {PureComponent} from 'react';

class ContactTable extends PureComponent {
    render() {
        const rows = [];
        const divStyle = {
            margin: '40px',
            color: 'solid pink'
        };
        /* this.props.contacts.forEach(contact => {
            if (contact.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            rows.push(<ContactRow contact={contact}/>);
        }); */
        return (
            <table className="table" style={divStyle}>
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
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default ContactTable;
