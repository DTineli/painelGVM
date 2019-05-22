const axios = require('axios');

exports.index = (req, res, next) => {
    const chamados = [{ nome: 'Erro', motivo: 'Erro', empresa: 'Erro' }];
    axios.get('http://127.0.0.1:3000/chamado')
        .then((response) => {
            console.log(response.status);
            res.render('index', {
                chamados: response.data.chamados
            });
        })
        .catch((err) => {
            res.render('index', {
                chamados: chamados
            })
        });
}

exports.postIndex = (req, res, next) => {
    if (req.params.id) {
        axios.post('http://127.0.0.1:3000/chamado/' + req.params.id, {
            finalizado: 'S',
            data_finalizado: new Date
        })
            .then((response) => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
                res.redirect('/');
            });
    }

}