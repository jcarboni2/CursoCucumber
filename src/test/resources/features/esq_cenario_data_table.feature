#language: pt

@unitarios @loc_esqcenario_dt
Funcionalidade: Locadora com esquema de cenário e data table
	Como um usuário
	Eu quero cadastrar aluguéis de filmes
	Para controlar preços e datas de entrega
	
	@data_table
	Cenário: Deve alugar um filme com sucesso
		Dado filme
		|estoque |2 		|
		|preco   |3 		|
		|tipo		 |comum |
		Quando alugar este
		Então preço do aluguel será R$ 3
		E data de entrega será em 1 dia
		E estoque do filme será 1 unidade
	
	Cenário: Não deve alugar filme sem estoque
		Dado filme com estoque de 0 unidades
		Quando alugar este
		Então não será possivel pela falta de estoque
		E estoque do filme será 0 unidade
	
	@esq_cenario	
	Esquema do Cenário: Deve dar condições conforme tipo de aluguel
		Dado filme com estoque de 2 unidades
		E o preço do aluguel seja R$ <preco>
		E o tipo do aluguel seja <tipo>
		Quando alugar este
		Então preço do aluguel será R$ <valor>
		E data de entrega será em <qtdDias> dias
		E pontuação recebida será de <pontuacao> pontos
		Exemplos:
		|preco |tipo			|valor |qtdDias |pontuacao |
		|4		 |extendido |8		 |3			  |2				 |
		|4		 |comum		  |4		 |1			  |1				 |
		|5		 |semanal	  |15		 |7			  |3				 |