import React, { Component } from 'react'
import Map from '../Map/Map'

class Page2 extends Component{
    constructor(props) {
        super(props);
        this.state= {color: props.backgroundColor}
        

      }
      
    render() {
        const divStyles = {
            width: '100%',
            height: 800,
            textAlign: 'center',
            backgroundColor: this.state.color,
            fontFamily: 'Ma Shan Zheng, cursive',

        }

        let name = this.props.name
        if(name === ''){
            name = 'stranger'
        } else {
            name = this.props.name
        }

        return(
            
            <div style={divStyles}>
                
               <h1 style={{backgroundColor:this.state.color, border: '1px solid black'}}>
                   Hello, {name}! 
               Where are you?</h1>
               
             <Map />
            </div>
                
            
            
        )   
    }
}

export default Page2