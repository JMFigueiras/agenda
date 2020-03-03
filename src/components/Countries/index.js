import {connect} from 'react-redux';

import {fetchCountriesRequested} from '@actions/countries';

import fromState from '@selectors';
import Component from './Component';

const mapStateToProps = state => ({
    countries: fromState.Countries.getCountries()(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCountries: () => dispatch(fetchCountriesRequested())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
