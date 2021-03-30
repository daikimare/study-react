import React,{ Component } from 'react';
import { initStore } from '../store';

const isServer = typeof window === 'undefined'
const _NRC_ = '__NEXT_REDUX_STORE__'

function getORCreateStore (initialState) {
  if (isServer){
    return initStore(initialState)
  }

  if (!window[_NRC_]) {
    window[_NRC_] = initStore(initialState)
  }
  return window[_NRC_]
}

export default (App) => {
  return class AppWithRedux extends Component {
    static async getInitialProps (appContext){
      const reduxStore = getORCreateStore()
      appContext.ctx.reduxStore = reduxStore
      let appProps = {}
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext)
      }
      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }

    constructor(props){
      super(props);
      this.reduxStore = getORCreateStore(props.initialReduxState)
    }

    render(){
      return<App {...this.props}
      reduxStore = {this.reduxStore} />
    }
  }
}