import React, { Component } from 'react'
//import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'
//import ThreeDRotation from '@material-ui/icons/ThreeDRotation'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
//import { fontSize } from '@material-ui/system';

class HomeButton extends Component{
    render() {
       
        function goHome(){
            window.location.assign('http://localhost:3000/')
        }
        return(
            <div>
                <HomeTwoToneIcon style={{   color:'white',
                                            fontSize:60,
                                            marginLeft : '20px',
                                            marginTop : '20px',
                                            cursor : 'pointer',
                                            borderRadius : '50%'
                                            }} onClick={goHome}/> 
            </div> 
        )
    }
}

export default HomeButton