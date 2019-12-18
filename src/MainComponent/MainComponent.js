import React, { Component } from 'react'
import Page from '../Page/Page'
import Page2 from '../Page2/Page2'
import Header from '../Header/Header'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff4400',
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
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
                console.log(theme.palette.secondary.main)
         return (
            
            <>
            <Header backgroungColor={theme.palette.primary.main} />
            <Page backgroungColor={theme.palette.secondary.main} updateMC={this.updateMC}/>
            </>
           
            
            )
        } else {
            return (<>
            <Header backgroungColor={theme.palette.primary.main} />
            <Page2 backgroungColor={theme.palette.secondary.light} />
            </>)
        }
        
    }
}

export default MainComponent