const needle = require('needle');

let PAT = "";

module.exports.setToken = function(token) {
    PAT = token;
};

const url = "https://api.keybin.net";

module.exports.execute = async function(method, endpoint, data = {}) {
    return new Promise((resolve,reject) => {
        needle(method, `${url}${endpoint}`, data, {
            headers: {
                'PERSONAL-TOKEN': PAT
            },
            json: method === 'POST'
        }).then((response) => {
            if(response.statusCode == 200) {
                resolve(response.body);
            } else {
                reject(response.body);
            }
        }).catch((err) => {
            reject(err);
        });
    });
}