import '../styles/globals.css'
import '../styles/Home.css'
import type { AppProps } from 'next/app';
import React from 'react';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import Navbar from '../components/NavBar';
import Head from 'next/head';

const client = new ApolloClient({
  link: new HttpLink({
    uri:'http://localhost:5000/graphql',
  }),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        keyFields: [],
        fields: {
          list: {
            keyArgs: [],
            merge(existing = [], incoming, { args: { offset = 0 }}) {
              console.log('merge...', {existing, incoming, offset})
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[offset + i] = incoming[i];
              }
              return merged;
            },
          }
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
