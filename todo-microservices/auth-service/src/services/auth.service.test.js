import { registerUser } from './auth.service.js';
import { usersDb } from '../database/mockDb.js';

describe('Auth Service - Register', () => {
  beforeEach(() => {
    usersDb.length = 0; // Limpa o banco antes de cada teste
  });

  it('deve registrar um novo usuário com senha criptografada', async () => {
    const userData = { email: 'teste@email.com', password: '123456' };
    const result = await registerUser(userData);

    expect(result).toHaveProperty('id');
    expect(result.email).toBe('teste@email.com');
    expect(result.password).not.toBe('123456'); // Senha deve estar hasheada
    expect(usersDb.length).toBe(1);
  });

  it('deve lançar erro se o usuário já existir', async () => {
    usersDb.push({ id: '1', email: 'existe@email.com', password: 'hash' });
    
    await expect(registerUser({ email: 'existe@email.com', password: '123' }))
      .rejects.toThrow('Usuário já cadastrado');
  });
});