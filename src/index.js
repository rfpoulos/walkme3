import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { store, persistor } from './store';

import { PersistGate } from 'redux-persist/integration/react'

let ui = 
    <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>

ReactDOM.render(ui, document.getElementById('root'));
