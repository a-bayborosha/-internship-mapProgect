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
        console.log(this.state.value);
        event.preventDefault();
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
                    <input type="submit" value="Send"/>    
                </form>      
            </div>
        )
    }
    
}

export default Page