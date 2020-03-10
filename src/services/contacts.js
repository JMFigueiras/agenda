import Http from './http';

const API = 'api/contacts';

class Contacts {
    static fetchContacts() {
        return Http.get(API);
    }

    static fetchContact(id) {
        return Http.get(`${API}/${id}`);
    }

    static submitContact(contact) {
        if (!contact.id) {
            return Http.post(API, {...contact});
        }
        return Http.put(`${API}/${contact.id}`, {...contact});
    }
}

export default Contacts;
