import axios from "axios"

const getMeteorStrikes = () => {
    return axios
    .get('https://data.nasa.gov/resource/gh4g-9sfh.json?$query=SELECT%20%60geolocation%60%2C%20%60year%60%2C%20%60name%60%2C%20%60id%60%2C%20%60recclass%60%2C%20%60mass%60%2C%20%60fall%60%0AGROUP%20BY%20%60geolocation%60%2C%20%60year%60%2C%20%60name%60%2C%20%60id%60%2C%20%60recclass%60%2C%20%60mass%60%2C%20%60fall%60%0AORDER%20BY%20%60year%60%20DESC%20NULL%20LAST')
    .then((response) => {
        const filteredData = response.data.filter((obj) => {
            return obj.geolocation.latitude !== '0.0' && obj.geolocation.longitude !== '0.0'
        })
        
        return filteredData
    })
}

export default getMeteorStrikes