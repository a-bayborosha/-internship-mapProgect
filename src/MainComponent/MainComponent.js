import React, { Component } from 'react'
import Page from '../Page/Page'
import Page2 from '../Page2/Page2'
import Header from '../Header/Header'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6002ee',
        },
        secondary: {
            light: '#acb0ce',
            main: '#acb0ce',
            contrastText: '#ffcc00',
        },
    },
})

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
               /*  console.log(theme.palette.secondary.main) */
         return (
            
            <>
            <Header backgroundColor={theme.palette.primary.main} />
            <Page backgroundColor={theme.palette.secondary.main} updateMC={this.updateMC}/>
            </>
           
            
            )
        } else {
            return (<>
            <Header backgroundColor={theme.palette.primary.main} />
            <Page2 backgroundColor={theme.palette.secondary.light} name = {this.state.name}/>
            </>)
        }
        
    }
}

export default MainComponent