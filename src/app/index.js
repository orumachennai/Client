import React , { Component }  from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { Provider } from 'react-redux';
import "./styles/main.less";

import configureStore from './store/configureStore';
import Routes from './routes';
const store = configureStore();

render((
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <Router history={hashHistory}>
	    { Routes() }
      </Router> 
    </Provider>
  </LocaleProvider>
),document.getElementById('app'));
