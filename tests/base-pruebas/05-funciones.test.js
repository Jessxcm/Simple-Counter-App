import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('pruebas en 05-funciones.test ', () => {

    test('getUser debe retornar un objeto ', () => {
        const textUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user);

        expect( textUser ).toEqual(user);

    })

    test('getUsuarioActivo debe retornar un objeto ', () => {

        const name = 'Jessica';

        const user = getUsuarioActivo(name);
        console.log(user);

        expect( user ).toEqual({
            uid: 'ABC567',
            username: name
        });
    })

});