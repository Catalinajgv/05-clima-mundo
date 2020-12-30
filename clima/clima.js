const axios = require('axios');

const getclima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=03be66f3e75ba5908b4fe4f6d19430bc&units=metric&lat=${lat}&lon=${lng}`)

    return (resp.data.main.temp);

}

module.exports = {
    getclima
}