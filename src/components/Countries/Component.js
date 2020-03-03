/* eslint-disable react/prop-types */
import React, {PureComponent} from 'react';


class Countries extends PureComponent {
    componentDidMount() {
        this.props.fetchCountries();
    }

    render() {
        const {countries} = this.props;

        return (
            <div>
                <h3> Países</h3>
                <hr/>
                {countries.map(country => (
                    <div>
                        Código: &nbsp;
                        {country.code}
                        <br/>
                        Nombre: &nbsp;
                        {country.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default Countries;
