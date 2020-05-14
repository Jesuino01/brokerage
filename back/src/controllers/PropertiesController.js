const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const imoveis = await connection('properties').select('*');

    return res.json(imoveis)
  },

  async create(req, res) {
    const data =  req.body

     const fotosParse = data.fotos.toString()
     const id = crypto.randomBytes(4).toString('HEX')
    
    await connection('properties').insert({
      id,
      titulo: data.titulo,
      descricao: data.descricao,
      fotos: fotosParse,
      cep: data.cep,
      cidade: data.cidade,
      logradouro: data.logradouro,
      bairro: data.bairro,
      nro: data.nro,
      metros: data.metros,
      preco: data.preco,
    })
  
    return res.json('Imóvel cadastrado com sucesso')
  },

  async delete(req, res) {
    const { id } = req.params;

    await connection('properties').where('id', id).delete()

    return res.json('Imóvel deletado com sucesso')
  }
}
