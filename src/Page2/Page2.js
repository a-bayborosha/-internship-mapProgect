import React, { Component } from 'react'
import Map from '../Map/Map'
import {ThemeProvider} from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto'





class Page2 extends Component{
    constructor(props) {
        super(props);
        this.state= {color: props.backgroundColor}
        

      }
      
    render() {
        

        const theme = createMuiTheme({
            typography: {
              // Use the system font.
              fontFamily:
                '-apple-system,system-ui,BlinkMacSystemFont,' +
                '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
            },
          })

        const divStyles = {
            width: '100%',
            height: 800,
            textAlign: 'center',
            backgroundColor: this.state.color,
            fontFamily: 'Roboto, Arial'

        }
        //regular expression pattern "only letters"
        const regexp = /^([a-zа-яё]+)?/i

        let name = this.props.name
        //match check of regular exp. with input Name
        let matchAll = regexp.exec(name)
        //assighment of the first match
        let firstMatch = matchAll[0]


       
        
        if(name === '' || name !== firstMatch){
            name = 'stranger'
        } else {
            name = this.props.name
        }

        return(
            
            <div style={divStyles}>
                <ThemeProvider theme={theme}>
                <Typography variant='h3' component='h1'>
               
                Hello, {name}! Where are you?
                </Typography>
                </ThemeProvider>
                <Map />
            </div>
                
            
            
        )   
    }
}

export default Page2