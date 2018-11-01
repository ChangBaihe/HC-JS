const axios = require('axios');
const doRequest = async (url, method, options) => {
    const reg = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
    if (!reg.exec(url)) {
        throw new Error(`'${url}' is an illegal url.`);
    }
    options = options || {};
    let response =  await axios.default({
        url: url,
        method: method || 'GET',
        headers: options.headers || {},
        params: options.query || {},
        data: options.body || {},
        withCredentials: options.credentials || false
    });
    return response;
};

module.exports = {
    doRequest
};