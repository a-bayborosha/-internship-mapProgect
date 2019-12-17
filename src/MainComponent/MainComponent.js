import React, { Component } from 'react'
import Page from '../Page/Page'
import Page2 from '../Page2/Page2'
import Header from '../Header/Header'

class MainComponent extends Component {
    constructor(){
        super()

        this.state = {
            header: true,
            page1 : true,
            page2 : false,
            name  : ''
        }
        this.updateMC = this.updateMC.bind(this)
    }
    updateMC(name){
      this.setState({
          header: true,
          page1: false,
          page2 : true,
          name : name
      })
    }
    render () {
        if (this.state.page1) {
                
         return (<>
                <Header />
                <Page updateMC={this.updateMC} /></>)
        } else {
            return (<>
            <Header />
            <Page2 /></>)
        }
        
    }
}

export default MainComponent