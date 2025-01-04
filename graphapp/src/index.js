import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider} from '@apollo/client';
import client from './apollo';
import Component from './component';

const conatiner = document.getElementById('root');
const root = ReactDOM.createRoot(conatiner);
root.render(
    <ApolloProvider client={client}>
        <Component/>
    </ApolloProvider>
)