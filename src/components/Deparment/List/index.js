import {connect} from 'react-redux';

import {fetchContactsRequested} from '@actions/contacts';
import fromState from '@selectors';

import Component from './Component';

// Store Redux - StaticData
const mapStateToProps = state => ({
    contacts: fromState.Contacts.getContacts()(state)
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContactsRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
