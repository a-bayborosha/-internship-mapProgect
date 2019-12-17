import React, {Component} from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components'


const Wrapper = styled.div `
    width: ${props =>props.width}
    height: ${props =>props.height}
`


export default class Map extends Component {

    componentDidMount() {
        const myMap = L.map('map').setView([51.505, -0.09], 13);

        
        

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);
        
        
        //creating Icon
        var myIcon = L.divIcon({
            iconUrl: 'my-icon.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
            shadowUrl: 'my-icon-shadow.png',
            shadowSize: [68, 95],
            shadowAnchor: [22, 94]
        });
        //creating a marker
        L.marker([51.5, -0.09], {icon:myIcon}).addTo(myMap)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    }
    render() {
        return (<Wrapper id='map' width = '800px' height = '600px' />)
    }
}