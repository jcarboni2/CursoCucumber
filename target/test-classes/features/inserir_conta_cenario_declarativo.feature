#language: pt

@funcionais @inserir_conta_declarativo
Funcionalidade: Cadastro de contas
  Como um usuário 
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada
  
  Contexto:
  	Dado que desejo adicionar uma conta
  
	Cenário: Deve inserir uma conta com sucesso
    E adiciono a conta "Conta de Teste"
    Então a conta inserida com sucesso
      
  Cenário: Não deve inserir uma conta sem nome
  	E adiciono a conta ""
    Então sou notificado que nome da conta é obrigatório
    
  Cenário: Não deve inserir uma conta com nome já existente
    E adiciono a conta "Conta de Teste"
    Então sou notificado que existe uma conta com esse nome
    
  Esquema do Cenário: Deve validar regras cadastro contas
  	Quando adiciono a conta "<conta>"
    Então recebo mensagem "<mensagem>"
  
  Exemplos:
  |conta			            |mensagem											      |
  |Conta de Teste Esquema |Conta adicionada com sucesso!      |
  | 								      |Informe o nome da conta			      |
  |Conta mesmo nome       |Já existe uma conta com esse nome! |