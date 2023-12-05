import { Circle, CircleMarker, Popup } from 'react-leaflet'

const MarkerMaker = (props) => {

const { meteorStrikeObj } = props

let {name, recclass, mass, fall, year, geolocation} = meteorStrikeObj
const { latitude, longitude } = geolocation
const msCenter = [ Number(latitude), Number(longitude) ]
const upperLimit = 25
const lowerLimit = 1
let markerRadius = 20

mass = Number(meteorStrikeObj.mass)

if ( mass < 1000 ) {
  markerRadius = 5
}

if ( mass >= 1000 && mass < 10000) {
  markerRadius = 10
}

if (mass >= 10000) {
  markerRadius = 20
}

// if (markerRadius > upperLimit) {markerRadius = upperLimit}
// if (markerRadius < lowerLimit) { markerRadius = lowerLimit }
  
  return (

    <CircleMarker center={msCenter} pathOptions={{color: 'red'}} radius={markerRadius}>
      <Popup>
        <h3>{name}</h3>
        <h4>latitude: {latitude}</h4>
        <h4>longitude: {longitude}</h4>
        <h4>
        recclass: {recclass}
        </h4>
        <h4>
        mass: {mass}
        </h4>
        <h4>
        fall: {fall}
        </h4>
        <h4>
        year: {year.substring(0,4)}
        </h4>
        </Popup>
    </CircleMarker>
    )
}

export default MarkerMaker