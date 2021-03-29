import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import GlobalStyle from './styles/global';

import Home from './pages/Home';
import Episodes from './pages/Episodes';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/episodes" component={Episodes} />
      </Switch>
    </BrowserRouter>

    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById('root'),
);
