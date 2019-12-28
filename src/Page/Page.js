import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class Page extends React.Component {
    constructor(props) {
        super(props);
        /* console.log(props[Object.keys(props)[0]])
        console.log(props[Object.keys(props)[0]]) */
        this.state = {  value: '',
                        color: props.backgroundColor};
                        
        console.log(props.backgroundColor)
        console.log(this.state.color)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        // log submitted user name
        console.log(this.state.value);
    
    event.preventDefault();
    }

    sendRequest = () => {
        
        // sending request to server
        // creating the XHttpRequest Object
        let xhttp = new XMLHttpRequest()
        // hadle server response
        const page = this
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log('server response',this.responseText)
                //name from input to State
                page.setState({
                    value : this.responseText
                })
           }
        }
        
        console.log('state: ' + this.state.value)
        //The object's state must be OPENED.
        xhttp.open('POST', 'http://localhost:8080/', true)
        xhttp.setRequestHeader('Content-Type', 'text/html');
        //sending request (name from 'input') to server
        xhttp.send(this.state.value)
        console.log('send')
        
        //transition on another page by click
        this.props.updateMC(this.state.value)
    }

    render(){
        
        const divStyles = {
            paddingTop: '100px',
            width : '100%',
            height: 800,
            textAlign: 'center',
            backgroundColor:  this.state.color,
            fontFamily: 'Girassol, cursive'
            
            
        }

        

        return (
            <div style={divStyles}>
                <Typography variant='h3' component='h1'>
                Hello, what is your name?
                </Typography>
                <form onClick={this.handleSubmit}>
                    
                     <TextField label='Your name' variant='outlined' 
                                value={this.state.value}
                                onChange={this.handleChange}/>
                </form>
                <br />
                <Button variant='contained' color='primary' value="Send" onClick={this.sendRequest}>submit</Button>
            </div>
        )
    }
    
}

export default Page