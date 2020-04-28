const connection = require('../database/connection');

module.exports = { 
  async create(request, response) {
    const { login, pass } = request.body;

    const user = await connection('users')
      .where('login', login)
      .where('pass', pass)
      .select('name')
      .first()

    if (!user) {
      return response.status(400).json({ error: 'No User found with this Login and Password'});
    }

    return response.json(user);
  }
}