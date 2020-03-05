import Http from './http';

const API = 'api/contacts';

class Contacts {
    static fetchContacts() {
        return Http.get(API);
    }
}

export default Contacts;