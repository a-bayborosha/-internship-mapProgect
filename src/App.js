import React, { Component } from 'react';
import './App'
/* import Header from './Header/Header'
import Page from './Page/Page'
import Page2 from './Page2/Page2' */
import {Route} from 'react-router-dom'
import MainConponent from './MainComponent/MainComponent'




class App extends Component {
render(){
  return (
    
    <div id="wrapper">
      
      <Route path="/" exact component={MainConponent} />
     
    </div>
    
   )
}

  
    
  
}

export default App
