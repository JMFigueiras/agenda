import React from 'react';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faTabletAlt, faUsers, faUserFriends, faDatabase, faStickyNote, faCookie
} from '@fortawesome/free-solid-svg-icons';
import head from 'lodash/head';
import includes from 'lodash/includes';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

const NavItems = ({redirect}) => (
    <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink onClick={() => redirect('/app')}>
                <FontAwesomeIcon icon={faTabletAlt}/>
                &nbsp;App
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() => redirect('/farm')}>
                <FontAwesomeIcon icon={faUserFriends}/>
                &nbsp;Farm
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink onClick={() => redirect('/countries')}>
                <FontAwesomeIcon icon={faCookie}/>
                &nbsp;Paises
            </NavLink>
        </NavItem>
    </Nav>
);

NavItems.propTypes = {
    redirect: PropTypes.func.isRequired
};

export default NavItems;
