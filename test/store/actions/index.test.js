/* eslint-disable lodash/prefer-noop */
import configureStore from 'redux-mock-store';
import Http from '@services/http';
import createSagaMiddleware from 'redux-saga';

import sagas from '@sagas';
import {
    ERROR_OCCURRED,
    IS_MOBILE,
    SAVING,
    LOADING,
    SUCCESS,
    handleError,
    setIsMobile,
    savingAction,
    loadingAction,
    successAction,
} from '@actions';

describe('@actions', () => {
    let store;

    beforeEach(() => {
        const sagaMiddleware = createSagaMiddleware();
        const mockStore = configureStore([sagaMiddleware]);
        store = mockStore({});
        sagaMiddleware.run(sagas);
    });

    it('should call handleError action', () => {
        store.dispatch(handleError({failed: true, err: 'fake-error'}));
        expect(store.getActions()).toContainEqual({failed: true, err: 'fake-error', type: ERROR_OCCURRED});
    });

    it('should call setIsMobile action and returns true', () => {
        store.dispatch(setIsMobile(true));
        const actions = store.getActions();
        expect(actions).toContainEqual({isMobile: true, type: IS_MOBILE});
    });


    it('should call setIsMobile action and returns false', () => {
        store.dispatch(setIsMobile(false));
        const actions = store.getActions();
        expect(actions).toContainEqual({isMobile: false, type: IS_MOBILE});
    });

    it('should call savingAction action and returns action with true value', () => {
        store.dispatch(savingAction({fakeSaving: true}));
        const actions = store.getActions();
        expect(actions).toContainEqual({fakeSaving: true, type: SAVING});
    });

    it('should call savingAction action and returns action with false value', () => {
        store.dispatch(savingAction({fakeSaving: false}));
        const actions = store.getActions();
        expect(actions).toContainEqual({fakeSaving: false, type: SAVING});
    });


    it('should call loadingAction action and returns action with true value', () => {
        store.dispatch(loadingAction({fakeLoading: true}));
        const actions = store.getActions();
        expect(actions).toContainEqual({fakeLoading: true, type: LOADING});
    });

    it('should call loadingAction action and returns action with false value', () => {
        store.dispatch(loadingAction({fakeLoading: false}));
        const actions = store.getActions();
        expect(actions).toContainEqual({fakeLoading: false, type: LOADING});
    });

    it('should call successAction action and returns action with true value', () => {
        store.dispatch(successAction({fakeSuccess: true}));
        const actions = store.getActions();
        expect(actions).toContainEqual({fakeSuccess: true, type: SUCCESS});
    });

    it('should call successAction action and returns action with false value', () => {
        store.dispatch(successAction({fakeSuccess: false}));
        const actions = store.getActions();
        expect(actions).toContainEqual({fakeSuccess: false, type: SUCCESS});
    });
});
