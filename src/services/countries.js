import Http from './http';

class Countries {
    static fetch() {
        return Http.get('');
    }
}

export default Countries;
