const { expect, assert } = require('chai');
const request = require('supertest');


const token = require('../token');
let tempToken;

before(async () => {
    tempToken = await token();
    console.log('token', tempToken);
    return tempToken;
  });
  describe('Prueba básica', () => {
    it('should return status 200', async () => {
      const response = await request('https://dominio.com')
        .post('/ruta')
        .set('x-api-token', token) // Enviamos el token en un header
        .expect(200);
    });
  });