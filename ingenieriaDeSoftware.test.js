const ingenieriaDeSoftware = require('./IngenieriaDeSoftware');
const assert = require('assert');
const ingenieriaDeSoftwareTest = new ingenieriaDeSoftware(6, 4);

describe('ingenieria de software test, operacioens basicas', () => {
    it('Deberia dar como resultado 10, cuando 6 y 4 se suman', () => {
        assert.equal(ingenieriaDeSoftwareTest.sumarNumeros(), 10);
    });

    it('Deberia dar como resultado 2, cuando 6 y 4 se restan', () => {
        assert.equal(ingenieriaDeSoftwareTest.restarNumeros(), 2);
    });

    it('Deberia dar como resultado 24, cuando 6 y 4 se multiplican', () => {
        assert.equal(ingenieriaDeSoftwareTest.multiplicarNumeros(), 24);
    });
});