import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
<<<<<<< HEAD



=======
>>>>>>> 68db6d2a409eccf81be483e45a405ad4e8c081c9

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {  value: '',
                        color: props.backgroundColor}; //from MainComponent

         this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      handleSubmit(event) {
        // log submitted user name
        console.log(this.state.value);
    
    event.preventDefault();
    }
    
//by onClick 
    sendRequest = () => {
        
        // sending request to server
        // creating the XHttpRequest Object
        let xhttp = new XMLHttpRequest()
        // присвоение объекта класса Page, чтобы иметь доступ внутри функции onReadystatechange(), 
        //потому что там объект будет перезаписан как объект класса XMLHttpRequest
        const page = this
        //event handler which is called whenever the state of a property changes
        xhttp.onreadystatechange = function() {
            //current state of object (4 - 'The operation is fully completed' && 200 -'request is successful')
            if (this.readyState === 4 && this.status === 200) {
                console.log('server response',this.responseText)
                //name from input to State
                page.setState({
                    value : this.responseText
                })
                //transition on another page by click
                 page.props.updateMC(page.state.value)
           }
        }
        
        console.log('state: ' + this.UserName.value)
        //The object's state must be OPENED.
        xhttp.open('POST', 'http://localhost:8080/', true)
        xhttp.setRequestHeader('Content-Type', 'text/html');
        //sending request (name from 'input') to server
        xhttp.send(this.UserName.value)
        console.log('send')
        
        
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
        
        //regular expression pattern "only letters"
        const regexp = /^([a-zа-яё]+)?/i

        let name = this.UserName
        //match check of regular exp. with input Name
        let matchAll = regexp.exec(name)
        //assighment of the first match
        let firstMatch = matchAll[0]




        return (
            <div style={divStyles}>
                <Typography variant='h3' component='h1'>
                Hello, what is your name?
                </Typography>
                <form onClick={this.handleSubmit}>
<<<<<<< HEAD
                 {/* {
                  (name !== firstMatch)
                  ?
                    (<TextField inputRef={input => this.UserName = input} label='Your name' variant='outlined' />)
                    : 
                    (<TextField error id='outlined-error-helper-text' label='Error' helperText='Incorrect entry' variant='outlined' />)
                 } */}

                    <TextField inputRef={input => this.UserName = input} label='Your name' variant='outlined' />
                </form>
                <br />
                <Button variant='contained' color='primary' value="Send" type='submit' onClick={this.sendRequest}>Submit</Button>
=======
                    
                     <TextField label='Your name' variant='outlined' 
                                value={this.state.value}
                                onChange={this.handleChange}/>
                </form>
                <br />
                <Button variant='contained' color='primary' value="Send" onClick={this.sendRequest}>submit</Button>
>>>>>>> 68db6d2a409eccf81be483e45a405ad4e8c081c9
            </div>
        )
    }
    
}

export default Page