import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Front from './component/front';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Front />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
