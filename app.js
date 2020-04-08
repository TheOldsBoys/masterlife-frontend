var http = require('http');
var util = require('util');
var React = require('react');
var ReactDOM = require('react-dom')
var Dashboard = require ('./src/Dashboard')

ReactDOM.render(
  <React.StrictMode>
    <Dashboard /> 
  </React.StrictMode>,
  document.getElementById('root')
);

