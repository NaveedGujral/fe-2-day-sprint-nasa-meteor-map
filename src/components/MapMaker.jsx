import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerMaker from './MarkerMaker'
import React, {useState,useEffect} from 'react'
import getMeteorStrikes from '../utils/getMeteorStrikes'

const MapMaker = () => {
    const [meteorStrikes, setMeteorStrikes] = useState([]) 
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getMeteorStrikes()
        .then((data) => {
            setMeteorStrikes(data)
            setIsLoading(false)
        })
    },[])
    
    if (isLoading) {
        return (
            <p>
                loading...
            </p>
        ) 
        
    }
    
    else {
        const mapCenter = [Number(meteorStrikes[0].geolocation.latitude), Number(meteorStrikes[0].geolocation.longitude)]
        return ( 
            <MapContainer className="Map" center={mapCenter} zoom={8} scrollWheelZoom={false}>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {
                meteorStrikes.map((meteorStrike) => {
                return <MarkerMaker meteorStrikeObj = {meteorStrike} key = {meteorStrike.id}/>
                })
            }
            </MapContainer>
        )
    }
}

export default MapMaker