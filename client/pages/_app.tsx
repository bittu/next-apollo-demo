import '../styles/globals.css'
import '../styles/Home.css'
import type { AppProps } from 'next/app';
import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import Navbar from '../components/NavBar';
import Head from 'next/head';
import { offsetLimitPagination } from '@apollo/client/utilities';

const client = new ApolloClient({
  link: new HttpLink({
    uri:'http://localhost:5000/graphql',
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        keyFields: [],
        fields: {
          list: offsetLimitPagination()
        }
      }
    }
  }),
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Next Apollo Demo</title>
      </Head>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  )
}
