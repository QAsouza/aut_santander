class ProductSearchPage {
    setupRequest() {
      this.requestOptions = {
        method: 'GET',
        url: '/catalog/api/v1/products/search?name=HP USB 3 Button Optical Mouse',
      };
    }
  
    sendRequest() {
      // Envia a requisição e guarda a resposta
      cy.request(this.requestOptions).then((response) => {
        cy.wrap(response).as('response');  // Guarda a resposta como um alias
      });
    }
  
    validateStatusCode(expectedStatusCode) {
      // Valida o status code da resposta
      cy.get('@response').its('status').should('eq', expectedStatusCode);
    }
  
    validateProductInResponse(productName) {
      // Valida se o produto está presente na resposta
      cy.get('@response').then((response) => {
        expect(response.body.products).to.be.an('array').that.is.not.empty;
        const productExists = response.body.products.some(product => product.name === productName);
        expect(productExists).to.be.true;
      });
    }
  }
  
  export default ProductSearchPage;