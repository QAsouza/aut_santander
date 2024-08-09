export class ApiPage {

    registrarUsuario(endpoint, userData) {
        return cy.request({
            method: 'POST',
            url: endpoint,
            body: userData,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    verificarStatus(response, expectedStatus) {
        expect(response.status).to.eq(expectedStatus);
    }

    verificarCampo(response, campo) {
        expect(response.body).to.have.property(campo);
    }
}

export const apiPage = new ApiPage();