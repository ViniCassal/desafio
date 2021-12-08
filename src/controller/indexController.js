const {Usuario} = require('../models');

const IndexController = {
    index(req,res){
        res.render('home')
    },
    async salvar(req,res){
        const{ nome,email,mensagem } = req.body;
        if(nome === '' ||  
        email === '' ||
        mensagem === ''){

            res.send('insira os dados');

        }else if(
            nome === undefined  ||
            email === null ||
            mensagem === null){

            res.send('verifique os dados')

        }else if(
            nome === undefined  ||
            email === undefined  ||
            mensagem === undefined){

            res.send('dados invalidos')
        }
        else{
            const resultado = await Usuario.create(
                {
                    nome,
                    email,
                    mensagem
                }
            );



            console.log(resultado)
            return res.render('home')
        }


    }

}

module.exports = IndexController;