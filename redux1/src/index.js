import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store/storeFile';
import Home from './container/Home';

const contianer = document.getElementById('root');
const root = ReactDOM.createRoot(contianer);

//view is connected to store
root.render(
    <Provider store={store}>
        <Home/>
    </Provider>
)