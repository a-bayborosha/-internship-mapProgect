import React, {Component} from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'


const Wrapper = styled.div `
    /* width: ${props =>props.width} */
    height: ${props =>props.height}
    border: '2px solid black'
`


export default class Map extends Component {

    componentDidMount() {
        const myMap = L.map('map').setView([51.505, -0.09], 13);

        
        

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
        
        
        //creating Icon
        var myIcon = L.icon({
            //icon url
            iconUrl: 'https://image.flaticon.com/icons/png/512/149/149060.png',
            
            //icon options
            iconSize: [38, 38],
            iconAnchor: [20, 38],
            shadowSize: [50, 64]
            

        });
        //creating a marker
        function onClick(e){
            L.marker(e.latlng,{icon:myIcon}).addTo(myMap)
            console.log(e.latlng.toString())
        }
        myMap.on('click', onClick)
    }
    render() {
        return (<Wrapper id='map' height = '600px' />)
    }
}