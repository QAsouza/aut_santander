Feature: Pesquisa de produtos

  Scenario: Efetuando pesquisa de produtos HP USB 3 Button Optical Mouse
    Given que eu tenha uma requisição com produto
    When enviar esta requisição
    Then o status code deve retornar 200 e o produto HP USB 3 Button Optical Mouse deve estar presente na resposta