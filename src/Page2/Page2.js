import React, { Component } from 'react'
import '../Page/Page'

class Page2 extends Component{
    render() {
        const divStyles = {
            width : 800,
            height: 800,
            textAlign: 'center',
            border: '1px solid black',
            marginLeft: '400px',
            marginRight: '300px',
            
        }
        return(
            
            <div style={divStyles}>
                
                <p>{this.props.value}</p>
            </div>
        )
    }
}

export default Page2