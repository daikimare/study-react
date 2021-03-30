import '../styles/globals.css'
import React from 'react';
import App, {Container} from 'next/app';
import withReduxStore from '../lib/redux-store';
import { Provider } from 'react-redux';

class _App extends App {
  render() {
    const { component,pageProps,reduxStore } = this.props
    return (
      <Container>
        <Provider store ={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(_App)