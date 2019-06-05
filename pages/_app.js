import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider as OldApolloProvider } from 'react-apollo'
import { ApolloProvider } from "@apollo/react-hooks";

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <OldApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </OldApolloProvider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
