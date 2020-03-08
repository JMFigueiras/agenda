import React from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTabletAlt, faUsers, faUserFriends, faDatabase, faStickyNote, faBriefcase, faHome
} from '@fortawesome/free-solid-svg-icons';
import head from 'lodash/head';
import includes from 'lodash/includes';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

const NavItems = ({redirect}) => (
    <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink onClick={() => redirect('/app')}>
                <FontAwesomeIcon icon={faHome}/>
                &nbsp;Inicio
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() => redirect('/contacts')}>
                <FontAwesomeIcon icon={faUserFriends}/>
                &nbsp;Contactos
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() => redirect('/departments')}>
                <FontAwesomeIcon icon={faBriefcase}/>
                &nbsp;Departamentos
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() => redirect('/assignments')}>
                <FontAwesomeIcon icon={faBriefcase}/>
                &nbsp;Asignaciones
            </NavLink>
        </NavItem>
    </Nav>
);

NavItems.propTypes = {
    redirect: PropTypes.func.isRequired
};

export default NavItems;
