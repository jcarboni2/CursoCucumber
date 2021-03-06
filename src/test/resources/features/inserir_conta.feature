# language: pt
@funcionais @inserir_conta
Funcionalidade: Cadastro de contas
  Como um usuário 
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada

  Contexto: 
    Dado que estou acessando a aplicação
    #Alterar email e senha para os cadastrados no site https://srbarriga.herokuapp.com/contas
    Quando informo o usuário "jch@jch.com"
    E a senha "1234"
    E seleciono entrar
    Então visualizo a página inicial
    Quando seleciono Contas
    E seleciono Adicionar

  Cenário: Deve inserir uma conta com sucesso
    E informo a conta "Conta de Teste"
    E seleciono Salvar
    Então a conta é inserida com sucesso

  Cenário: Não deve inserir uma conta sem nome
    E seleciono Salvar
    Então sou notificado que o nome da conta é obrigatório

  Cenário: Não deve inserir uma conta com nome já existente
    E informo a conta "Conta de Teste"
    E seleciono Salvar
    Então sou notificado que já existe uma conta com esse nome

  Esquema do Cenário: Deve validar regras cadastro contas
    Quando informo a conta "<conta>"
    E seleciono Salvar
    Então recebo a mensagem "<mensagem>"

    Exemplos: 
      | conta                  | mensagem                           |
      | Conta de Teste Esquema | Conta adicionada com sucesso!      |
      |                        | Informe o nome da conta            |
      | Conta mesmo nome       | Já existe uma conta com esse nome! |
