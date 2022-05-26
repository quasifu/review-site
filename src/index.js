import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-HPBYFQCCYJ'; // YOUR_OWN_TRACKING_ID

ReactGA.initialize(TRACKING_ID);
ReactGA.send('pageview');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
