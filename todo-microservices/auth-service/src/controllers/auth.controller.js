import { registerUser } from '../services/auth.service.js';

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }
    
    const user = await registerUser({ email, password });
    res.status(201).json(user);
  } catch (error) {
    if (error.message === 'Usuário já cadastrado') {
      return res.status(409).json({ error: error.message });
    }
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};