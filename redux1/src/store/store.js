import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import promisseMiddleware from 'redux-promise';
import reducer from '../reducer';

let store = createStore(reducer,applyMiddleware(promisseMiddleware));

export default store;