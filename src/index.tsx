import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import './index.css';
import App from './App';
import { store } from './redux/store';
import reportWebVitals from './reportWebVitals';
import './scss/custom.scss';
// import
import 'bootstrap/scss/bootstrap.scss';
// import 'bootstrap/dist/css/bootstrap.min.css'
const css = (
  <style type="text/css">
    {`
    a:link {
      text-decoration: none;
    }
    a:visited {
      text-decoration: none;
    }
    a:hover {
      text-decoration: none;
    }
    a:active {
      text-decoration: none;
    }
    .header {
      background-color: #d2b48c;
    }
    .btn-clone {
      background-color: #a9a9a9;
      color: white;
    }
    .btn-deployed {
      background-color: #d2b48c;
      color: white;
    }
    .btn-forest {
      background-color: #005427;
      color: white;
    }
    .alert-clone {
      border-bottom-color: #005427;
      background-color: #a9a9a9;
      color: white;
    }
    .alert-deployed {
      border-bottom-color: #005427;
      background-color: #d2b48c;
      color: white;
    }
    .footer {
      background-color: #623412;
    }
    .list-group-item-forest {
      background-color: #e59e6d;
      border-color: #6e6259;
    }
    nav {
      background-image: linear-gradient(to bottom right, #623412, #e59e6d);
    }
    .nav-link {
      font-weight: 700;
    }
    .nav-link.active {
      font-weight: 900;
    }
  `}
  </style>
);

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {css}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
