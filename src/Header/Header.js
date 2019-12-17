import React from 'react'
import HomeButton from '../HomeButton/HomeButton'
/* import {Route} from 'react-router-dom' */


class Header extends React.Component {
    render() {
        const divStyles = {
            width : 800,
            height: 100,
            textAlign: 'left',
            border: '1px solid black',
            marginLeft: '400px',
            marginRight: '300px',
            marginTop: '20px',
            
        
            
            
        }
        return(
            <div style={divStyles}>
                <HomeButton />
            </div>
        )
    }
}

export default Header