import React, { Component } from 'react'
/* import { Button } from 'react-native-elements'; */
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeButton extends Component{
    render() {
        const divStyle = {
            backgroundColor : 'blue',
            marginLeft : '20px',
            marginTop : '50px', 
            width   : '50px',
            high  : '50px',
            color : '#fff',
            cursor : 'pointer'
        }
        return(
            <div>
                {/* <button style={divStyle} onClick>
                    Home
                </button> */}
    
              <Icon
                name='rowing' /> 
            </div>
           
            
        )
    }
}

export default HomeButton