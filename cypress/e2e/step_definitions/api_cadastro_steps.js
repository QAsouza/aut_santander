import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker'

const endpoint = 'https://advantageonlineshopping.com/accountservice/accountrest/api/v1/register';
let requestBody;
let response;

Given('que eu tenha uma requisicao com campos obrigatorios incorretos', () => {
    requestBody = {
        accountType: "USER",
        address: "string",
        allowOffersPromotion: true,
        aobUser: true,
        cityName: "string",
        country: "AUSTRALIA_AU",
        email: "fora_padrao",
        firstName: "string",
        lastName: "string",
        loginName: "carlos_roger_fora_98",
        password: "ntio",
        phoneNumber: "string",
        stateProvince: "string",
        zipcode: "string"
    }
});

When('enviar esta requisicao', () => {
    cy.request({
        method: 'POST',
        url: endpoint,
        body: requestBody,
        failOnStatusCode: false // Permite capturar status codes diferentes de 2xx sem falhar o teste
    }).then((res) => {
        response = res;
        cy.wrap(response).as('registerResponse');
    });
});

Then('a resposta do status code deve ser {int}', (expectedStatusCode) => {
    cy.get('@registerResponse').then((res) => {
        expect(res.status).to.eq(expectedStatusCode);
    });
});

Given('que eu tenha uma requisicao com dados corretos', () => {
    const email = faker.internet.email().substring(0, 40);
    const loginName = faker.internet.userName().substring(0, 12);

    const requestBody = {
        "accountType": "USER",
        "address": "string",
        "allowOffersPromotion": true,
        "aobUser": true,
        "cityName": "string",
        "country": "AUSTRALIA_AU",
        "email": "antonio_carlos@gmail.com",//email,
        "firstName": "Filho",
        "lastName": "Italo",
        "loginName": "colors_reginaldo",//loginName,
        "password": "Padrao01",
        "phoneNumber": "string",
        "stateProvince": "string",
        "zipcode": "string"
    };

    console.log("Request Body:", requestBody)

    cy.wrap(email).as('userEmail');
    cy.wrap(loginName).as('userLoginName');
})

When('enviar esta requisicao com valores corretos', () => {
    cy.request = {
        'content-type': 'application/json',
        'accept': 'application/json'
    }

    cy.request({
        method: 'POST',
        url: endpoint,
        body: requestBody,
        failOnStatusCode: false
    }).then((response) => {
        console.log('Response Body:', response.body)
        cy.wrap(response).as('apiResponse')
    })
})

Then('status code deve ser {int}', (statuscode) => {
    cy.get('@apiResponse').its('status').should('eq', statuscode)
})


