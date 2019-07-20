# language: pt
@unitarios @cucumber_transf
Funcionalidade: Aprender cucumber usando transform
  Como um aluno
  Eu quero aprender a utilizar o cucumber usando transform
  Para que eu possa automatizar critérios de aceitação

  Cenário: Deve calcular atraso na entrega
    Dado que a entrega é 05/04/2018
    Quando a entrega atrasar 2 dias
    Então a entrega será efetuada 07/04/2018

  Cenário: Deve calcular atraso no prazo de entrega da china
    Dado que a entrega é 05/04/2018
    Quando a entrega atrasar 2 meses
    Então a entrega será efetuada 05/06/2018

  Cenário: Deve criar steps genéricos para estes passos
    Dado que o ticket AF345
    Dado que o valor da passagem R$ 230,45
    Dado que o nome do passageiro "Fulano da Silva"
    Dado que o telefone do passageiro 9999-9999
    Quando criar o step
    Então o teste funciona
