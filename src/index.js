import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';


console.log("window.React1 === window.React2");


ReactDOM.render(
  <React.StrictMode>
    <Dashboard /> 
  </React.StrictMode>,
  document.getElementById('root')
);

