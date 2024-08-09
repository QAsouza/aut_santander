Feature: Cadastro

  Scenario: Enviando uma requisicao com os campos obrigatorios incorretos
    Given que eu tenha uma requisicao com campos obrigatorios incorretos
    When enviar esta requisicao
    Then a resposta do status code deve ser 403

  Scenario: Efetuando o cadastro com sucesso
    Given que eu tenha uma requisicao com dados corretos
    When enviar esta requisicao com valores corretos
    Then status code deve ser 200
