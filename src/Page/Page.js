import React from 'react'


class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
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
            width : 800,
            height: 800,
            textAlign: 'center',
            border: '1px solid black',
            marginLeft: '400px',
            marginRight: '300px',
            
        }

        return (
            <div style={divStyles}>
                <h1>Hello, what is your name?</h1>
                <form onClick={this.handleSubmit}>
                    <label>
                        <input  type="text" 
                                value={this.state.value}
                                onChange={this.handleChange} />  
                    </label>
                    <br />
                    <input type="submit" value="Send" onClick={this.sendRequest}/>    
                </form>      
            </div>
        )
    }
    
}

export default Page