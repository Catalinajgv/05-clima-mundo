const axios = require('axios');

const getlugarlatlng = async(dir) => {


    const encondedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https: //devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encondedUlr }`,
        headers: {
            "x-rapidapi-key": "1136e4bd7emshdbc35b79b10f5a8p13e2a3jsn176123e475a1",
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "useQueryString": true
        }
    });

    const resp = instance.get();
    if (resp.data.Results.length === 0) {
        throw new console.error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getlugarlatlng
}