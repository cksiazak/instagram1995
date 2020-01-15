import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/reset.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
