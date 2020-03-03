import {createStore, applyMiddleware, compose} from 'redux';
import saga from 'redux-saga';

import reducers from '@reducers';
import sagas from '@sagas';
import loadAsyncState from './loadAsyncState';

import {sagaMonitor, reactotronEnhancer} from '../containers/reactotron';

const isProduction = process.env.node === 'production';

const sagaMiddleware = isProduction ? saga() : saga({sagaMonitor});

let store;

export default initialState => {
    if (isProduction) {
        store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
        sagaMiddleware.run(sagas);
    } else {
        const enhancer = compose(
            applyMiddleware(sagaMiddleware),
            reactotronEnhancer
        );

        store = createStore(reducers, initialState, enhancer);
        let sagaTask = sagaMiddleware.run(sagas);

        if (module.hot) {
            module.hot.accept('@reducers', () => store.replaceReducer(reducers));
            module.hot.accept('@sagas', () => {
                sagaTask.cancel();
                sagaTask.done.then(() => {
                    sagaTask = sagaMiddleware.run(sagas);
                });
            });
        }
    }

    return loadAsyncState(store);
};
