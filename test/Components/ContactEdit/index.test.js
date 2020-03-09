import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {MemoryRouter} from 'react-router';
import Enzyme, {mount} from 'enzyme';
import {Input} from 'reactstrap';
import forEach from 'lodash/forEach';

import ContactEdit from '@components/Contact/Edit';
import {UPDATE_CONTACT_DATA} from '@actions/contacts';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore([]);

describe('ContactEdit Component Snapshot', () => {
    let store;
    let component;
    let contact;
    const match = {
        params: {
            id: null
        }
    };

    beforeEach(() => {
        contact = {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
            birthDate: '',
            phoneNumber: '',
            address: '',
            role: '',
            notes: ''
        };

        store = mockStore({
            contacts: {
                contact
            }
        });
    });

    test('should mount Component', () => {
        const snapshot = renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <ContactEdit {...{match}}/>
                </MemoryRouter>
            </Provider>
        ).toJSON();

        expect(snapshot).toMatchSnapshot();
    });

    function mountComponent() {
        return mount(
            <Provider store={store}>
                <MemoryRouter>
                    <ContactEdit {...{match}}/>
                </MemoryRouter>
            </Provider>
        );
    }

    it('should render with given state from store', () => {
        component = mountComponent();
        forEach([
            'firstName',
            'lastName',
            'email',
            'gender',
            'birthDate',
            'phoneNumber',
            'address',
            'role',
            'notes'
        ], field => {
            const inputField = component.find(Input).find({name: field});
            expect(inputField.exists()).toBe(true);
        });
    });

    it('should call onChange event for firstName with the expected params', () => {
        component = mountComponent();
        const inputField = component.find(Input).find({name: 'firstName'});
        expect(inputField.exists()).toBe(true);
        // Busco el último componente, (el hijo)
        inputField.last().simulate('change', {target: {value: 'fake-firstName'}});
        expect(store.getActions()).toEqual([
            {
                type: UPDATE_CONTACT_DATA,
                contact: {
                    ...contact,
                    firstName: 'fake-firstName'
                }
            }
        ]);
    });

    it('should call onChange event for lastName with the expected params', () => {
        component = mountComponent();
        const inputField = component.find(Input).find({name: 'lastName'});
        expect(inputField.exists()).toBe(true);
        inputField.last().simulate('change', {target: {value: 'fake'}});
        expect(store.getActions()).toEqual([
            {
                type: UPDATE_CONTACT_DATA,
                contact: {
                    ...contact,
                    lastName: 'fake'
                }
            }
        ]);

        inputField.last().simulate('change', {target: {value: 'fake-lastName'}});
        expect(store.getActions()).toEqual([
            {
                type: UPDATE_CONTACT_DATA,
                contact: {
                    ...contact,
                    lastName: 'fake'
                }
            },
            {
                type: UPDATE_CONTACT_DATA,
                contact: {
                    ...contact,
                    lastName: 'fake-lastName'
                }
            }
        ]);
    });
});
