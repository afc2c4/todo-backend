import bcrypt from 'bcryptjs';
import { usersDb } from '../database/mockDb.js';
import { generateId } from '../utils/generateId.js';

export const registerUser = async (userData) => {
  const existingUser = usersDb.find(u => u.email === userData.email);
  if (existingUser) {
    throw new Error('Usuário já cadastrado');
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = {
    id: generateId(),
    email: userData.email,
    password: hashedPassword
  };

  usersDb.push(newUser);
  return { id: newUser.id, email: newUser.email }; // Não retornamos a senha
};