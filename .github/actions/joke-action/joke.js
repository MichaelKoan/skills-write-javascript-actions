const request = require('request-promise')

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavaScript action Github skills course"
    },
    json: true
};


const getJoke = async () => {
    const res = await request(options);
    return res.joke;
}

module.exports = getJoke;