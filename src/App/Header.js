/*
    eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
*/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import logo from 'images/logo-footer.png';
import {
    Nav,
    Navbar,
    NavbarToggler,
    Collapse,
    Media,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Col,
    Row,
    NavItem,
    NavLink
} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPowerOff,
    faUserCircle,
    faUser,
    faTabletAlt,
    faKey
} from '@fortawesome/free-solid-svg-icons';
import IntersectionVisible from 'react-intersection-visible';

import NavItems from './Routes/NavItems';

class Header extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        })
    };

    static defaultProps = {
        history: null,
        assignmentType: [],
        currentOperative: null
    };

    constructor(props) {
        super(props);
        this.state = {
            isCollapse: true,
            dropdownOpen: false,
            isVisible: true
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }

    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }

    onHide() {
        this.setState(() => ({isVisible: false}));
    }

    onShow() {
        this.setState(() => ({isVisible: true}));
    }

    toggleNavbar() {
        this.setState(prevState => ({
            isCollapse: !prevState.isCollapse
        }));
    }

    redirect(to) {
        const {history} = this.props;
        history.push(to);
    }

    render() {
        const {isVisible} = this.state;

        return (
            <div>
                <IntersectionVisible
                    onHide={e => this.onHide(e)}
                    onShow={e => this.onShow(e)}
                >
                    <header className="hidden-print">
                        <Media object src={logo}/>
                        <Navbar expand="lg" fixed={!isVisible ? 'top' : ''}>
                            <NavbarToggler onClick={() => this.toggleNavbar()}/>
                            <Collapse isOpen={this.state.isCollapse} navbar>
                                <NavItems
                                    redirect={route => this.redirect(route)}
                                />
                            </Collapse>
                        </Navbar>
                    </header>
                </IntersectionVisible>
            </div>
        );
    }
}

export default withRouter(Header);
