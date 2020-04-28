const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const users = await connection('users').select('*');

    return res.json(users)
  },

  async create(req, res) {
    const { name, login, pass } =  req.body
  
    const id = crypto.randomBytes(4).toString('HEX')
    
    await connection('users').insert({
      id,
      name,
      login,
      pass
    })

    return res.json({ id })
  },

  async delete(req, res) {
    const { id } = req.params;

    await connection('users').where('id', id).delete()

    return res.json('Usuário deletado com sucesso')
  }
}
