import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProductSearchPage from '../pages/api_produtos_pages';

const productSearchPage = new ProductSearchPage();

  Given('que eu tenha uma requisição com produto', () => {
    productSearchPage.setupRequest();
  });
  
  When('enviar esta requisição', () => {
    productSearchPage.sendRequest();
  });
  
  Then('o status code deve retornar 200 e o produto HP USB 3 Button Optical Mouse deve estar presente na resposta', () => {
    productSearchPage.validateStatusCode(200);
    productSearchPage.validateProductInResponse('HP USB 3 Button Optical Mouse');
  });