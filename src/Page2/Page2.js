import React, { Component } from 'react'
import Map from '../Map/Map'
<<<<<<< HEAD
//import {ThemeProvider} from 'styled-components'
import Typography from '@material-ui/core/Typography'
//import { createMuiTheme } from '@material-ui/core/styles';
//import {MuiThemeProvider} from '@material-ui/core/styles'
=======
import {ThemeProvider} from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { createMuiTheme } from '@material-ui/core/styles';
>>>>>>> 68db6d2a409eccf81be483e45a405ad4e8c081c9
import 'typeface-roboto'





class Page2 extends Component{
    constructor(props) {
        super(props);
        this.state= {color: props.backgroundColor}
        

      }
      
    render() {
<<<<<<< HEAD
       
=======
        

        const theme = createMuiTheme({
            typography: {
              // Use the system font.
              fontFamily:
                '-apple-system,system-ui,BlinkMacSystemFont,' +
                '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
            },
          })

>>>>>>> 68db6d2a409eccf81be483e45a405ad4e8c081c9
        const divStyles = {
            width: '100%',
            height: 800,
            textAlign: 'center',
            backgroundColor: this.state.color,
<<<<<<< HEAD
            fontFamily: 'Roboto, sans-serif'

        }
        /* //regular expression pattern "only letters"
=======
            fontFamily: 'Roboto, Arial'

        }
        //regular expression pattern "only letters"
>>>>>>> 68db6d2a409eccf81be483e45a405ad4e8c081c9
        const regexp = /^([a-zа-яё]+)?/i

        let name = this.props.name
        //match check of regular exp. with input Name
        let matchAll = regexp.exec(name)
        //assighment of the first match
        let firstMatch = matchAll[0]
<<<<<<< HEAD
 */
let name = this.props.name  
       
        
        if(name === ''){
=======


       
        
        if(name === '' || name !== firstMatch){
>>>>>>> 68db6d2a409eccf81be483e45a405ad4e8c081c9
            name = 'stranger'
        } else {
            name = this.props.name
        }

        return(
            
            <div style={divStyles}>
<<<<<<< HEAD
                {/* <MuiThemeProvider theme={theme}> */}
=======
                <ThemeProvider theme={theme}>
>>>>>>> 68db6d2a409eccf81be483e45a405ad4e8c081c9
                <Typography variant='h3' component='h1'>
               
                Hello, {name}! Where are you?
                </Typography>
<<<<<<< HEAD
                {/* </MuiThemeProvider> */}
=======
                </ThemeProvider>
>>>>>>> 68db6d2a409eccf81be483e45a405ad4e8c081c9
                <Map />
            </div>
                
            
            
        )   
    }
}

export default Page2