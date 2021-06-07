import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { PropProvider } from './PropContainer'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <PropProvider><App /></PropProvider>,
  
  document.getElementById('root')
);
