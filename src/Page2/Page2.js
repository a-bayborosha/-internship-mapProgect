import React, { Component } from 'react'
import Map from '../Map/Map'

class Page2 extends Component{
    constructor(props) {
        super(props);
        console.log(props.backgroungColor)
        this.state= {color: props.backgroungColor}
        console.log(this.state.color)
      }
    render() {
        const divStyles = {
            width: '100%',
            height: 800,
            textAlign: 'center',
            border: '1px solid black',
            marginLeft: '400px',
            marginRight: '300px',
            backgroungColor: this.state.color
            
        }
        return(
            
            <div style={divStyles}>
               {<h1>Hello, {this.props.value}. <p>Where are you?</p></h1> }
             <Map />
            </div>
                
            
            
        )   
    }
}

export default Page2