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
      {/* <Header /> */}
      <Route path="/" exact component={MainConponent} />
     {/*  <Route path="/first" exact component={Page} />
      <Route path="/second" exact component={Page2} /> */}
    </div>
    
   )
}

  
    
  
}

export default App
