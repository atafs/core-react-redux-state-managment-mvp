import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './store/reducers';
import { addCharacterById, removeCharacterById } from './store/actions';

const store = createStore(rootReducer);

// check that it is working
console.log('store.getState()', store.getState());

// check that the action addCharacterById is working
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));
store.dispatch(removeCharacterById(2));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);