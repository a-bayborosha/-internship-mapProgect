import React, { Component } from 'react';
import './App'
import {Route} from 'react-router-dom'
import MainConponent from './MainComponent/MainComponent'
//import {MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles'


/* const theme = createMuiTheme({
  overrides: {
    fontFamily: "Comic Sans"
  }
}) */







class App extends Component {
render(){
  return (
    //<MuiThemeProvider theme={theme}>
    <div id="wrapper">
      
      <Route path="/" exact component={MainConponent} />
     
    </div>
    //</MuiThemeProvider>
   )
}

  
    
  
}

export default App
