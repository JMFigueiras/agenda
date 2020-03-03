import Http from './http';

class CensusTaker {
    static fetch() {
        return Http.get('');
    }
}

export default CensusTaker;
