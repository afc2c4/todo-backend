import { generateId } from './generateId.js';

describe('generateId', () => {
  it('deve retornar uma string não vazia', () => {
    const id = generateId();
    expect(typeof id).toBe('string');
    expect(id.length).toBeGreaterThan(0);
  });

  it('deve retornar IDs únicos em chamadas consecutivas', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });
});