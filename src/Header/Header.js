import React from 'react'
import HomeButton from '../HomeButton/HomeButton'
/* import {Route} from 'react-router-dom' */


class Header extends React.Component {

    constructor(props) {
        super(props);
    
        this.state= {color: props.backgroungColor}
      }
    
    render() {
       
        const divStyles = {
            width : '100%',
            height: 100,
            textAlign: 'left',
            border: '1px solid black',
            marginLeft: '400px',
            marginRight: '300px',
            marginTop: '20px',
            backgroundColor: this.state.color
            
            
        }
        return(
            <div style={divStyles}>
                <HomeButton />
            </div>
        )
    }
}

export default Header