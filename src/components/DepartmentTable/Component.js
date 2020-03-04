import React, {PureComponent} from 'react';

class DepartmentTable extends PureComponent {
    render() {
        const rows = [];
        /* this.props.contacts.forEach(contact => {
            if (contact.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            rows.push(<ContactRow contact={contact}/>);
        }); */
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Departamentos</th>
                        <th>Descripcion</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default DepartmentTable;
