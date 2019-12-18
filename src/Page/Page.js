import React from 'react'
import { Form} from 'semantic-ui-react'

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
                <h1>Hello, what is your name?</h1>

                <Form onClick={this.handleSubmit}>
                    <Form.Field>
                        <label>
                            <input type="text" 
                                placeholder='Your Name'
                                value={this.state.value}
                                onChange={this.handleChange} />
                        </label>
                        <br />
                        <input type="submit" value="Send" onClick={this.sendRequest} style={{marginTop:'10px'}}/>
                    </Form.Field>
                </Form>
                
            </div>
        )
    }
    
}

export default Page