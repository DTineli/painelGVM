const axios = require('axios');

exports.index = (req, res, next) => {

    axios.get('http://127.0.0.1:3000/chamado')
        .then((response) => {
            res.render('index', {
                chamados: response.data.chamados
            });
        })
        .catch((err) => {
            console.log(err);
        });
}