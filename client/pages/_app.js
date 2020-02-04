import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/initStore';
import { PersistGate } from 'redux-persist/integration/react';

import Modal from '../components/CloseWindowModal';

import {
  GlobalStyle,
  WindowWrap,
  InnerWindow,
  WindowBar
} from '../styles/globalStyles';

class MyApp extends App {
  state = {
    errorModal: false
  };

  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return pageProps;
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={null}>
          <GlobalStyle />
          <WindowWrap>
            <InnerWindow>
              <Modal />
              <WindowBar>
                <p>Instagram95.exe</p>
                <button>
                  <span>X</span>
                </button>
              </WindowBar>
              <Component {...pageProps} />
            </InnerWindow>
          </WindowWrap>
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(initStore)(MyApp);
