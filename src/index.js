import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
    overrides: {
      fontFamily: 'Roboto, sans-serif'
    }
  })

const application = (
    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MuiThemeProvider>
)

ReactDOM.render(
    
    application

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
