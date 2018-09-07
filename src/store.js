import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = () => {
    return composeEnhancers(applyMiddleware(sagaMiddleWare));
};

const store = createStore(persistedReducer, {}, middleware());
sagaMiddleWare.run(rootSaga);

export default () => {
    return {
        store,
        persistor: persistStore(store),
    };
};
