$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("aprender_cucumber.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Aprender cucumber",
  "description": "Como um aluno\r\nEu quero aprender a utilizar o cucumber\r\nPara que eu possa automatizar critérios de aceitação",
  "id": "aprender-cucumber",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitarios"
    },
    {
      "line": 2,
      "name": "@cucumber"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Deve executar especificação",
  "description": "",
  "id": "aprender-cucumber;deve-executar-especificação",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que criei o arquivo corretamente",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "executá-lo",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a especificação deve finalizar com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "AprenderCucumberSteps.queCrieiOArquivoCorretamente()"
});
formatter.result({
  "duration": 313595800,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.executáLo()"
});
formatter.result({
  "duration": 43600,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberSteps.aEspecificaçãoDeveFinalizarComSucesso()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve incrementar contador",
  "description": "",
  "id": "aprender-cucumber;deve-incrementar-contador",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 14,
  "name": "que o valor do contador é 15",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "eu incrementar em 3",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "o valor do contador será 18",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "duration": 33186800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 18
    }
  ],
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "duration": 155400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 25
    }
  ],
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(int)"
});
formatter.result({
  "duration": 8528900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deve incrementar contador",
  "description": "",
  "id": "aprender-cucumber;deve-incrementar-contador",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 19,
  "name": "que o valor do contador é 123",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "eu incrementar em 35",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "o valor do contador será 158",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 26
    }
  ],
  "location": "AprenderCucumberSteps.queOValorDoContadorÉ(int)"
});
formatter.result({
  "duration": 203700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 18
    }
  ],
  "location": "AprenderCucumberSteps.euIncrementarEm(int)"
});
formatter.result({
  "duration": 93000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "158",
      "offset": 25
    }
  ],
  "location": "AprenderCucumberSteps.oValorDoContadorSerá(int)"
});
formatter.result({
  "duration": 83500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Deve calcular atraso na entrega",
  "description": "",
  "id": "aprender-cucumber;deve-calcular-atraso-na-entrega",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 24,
  "name": "que o prazo é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.step({
  "line": 25,
  "name": "a entrega atrasar em 2 dias",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "a entrega será efetuada em 07/04/2018",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 18
    },
    {
      "val": "04",
      "offset": 21
    },
    {
      "val": "2018",
      "offset": 24
    }
  ],
  "location": "AprenderCucumberSteps.queOPrazoÉ(int,int,int)"
});
formatter.result({
  "duration": 425900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "dias",
      "offset": 23
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "duration": 2051000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/04/2018",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "duration": 732600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Deve calcular atraso no prazo de entrega da china",
  "description": "",
  "id": "aprender-cucumber;deve-calcular-atraso-no-prazo-de-entrega-da-china",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 29,
  "name": "que o prazo é dia 05/04/2018",
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "a entrega atrasar em 2 meses",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "a entrega será efetuada em 05/06/2018",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05",
      "offset": 18
    },
    {
      "val": "04",
      "offset": 21
    },
    {
      "val": "2018",
      "offset": 24
    }
  ],
  "location": "AprenderCucumberSteps.queOPrazoÉ(int,int,int)"
});
formatter.result({
  "duration": 281000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    },
    {
      "val": "meses",
      "offset": 23
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaAtrasarEmDias(int,String)"
});
formatter.result({
  "duration": 199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2018",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberSteps.aEntregaSeráEfetuadaEm(String)"
});
formatter.result({
  "duration": 223700,
  "status": "passed"
});
formatter.uri("aprender_cucumber_transform.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Aprender cucumber usando transform",
  "description": "Como um aluno\r\nEu quero aprender a utilizar o cucumber usando transform\r\nPara que eu possa automatizar critérios de aceitação",
  "id": "aprender-cucumber-usando-transform",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitarios"
    },
    {
      "line": 2,
      "name": "@cucumber_transf"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Deve calcular atraso na entrega",
  "description": "",
  "id": "aprender-cucumber-usando-transform;deve-calcular-atraso-na-entrega",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que a entrega é 05/04/2018",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "a entrega atrasar 2 dias",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "a entrega será efetuada 07/04/2018",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2018",
      "offset": 16
    }
  ],
  "location": "AprenderCucumberTransformSteps.queAEntregaÉ(Date)"
});
formatter.result({
  "duration": 1372800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "dias",
      "offset": 20
    }
  ],
  "location": "AprenderCucumberTransformSteps.aEntregaAtrasarDias(int,String)"
});
formatter.result({
  "duration": 260200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/04/2018",
      "offset": 24
    }
  ],
  "location": "AprenderCucumberTransformSteps.aEntregaSeráEfetuada(String)"
});
formatter.result({
  "duration": 272400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Deve calcular atraso no prazo de entrega da china",
  "description": "",
  "id": "aprender-cucumber-usando-transform;deve-calcular-atraso-no-prazo-de-entrega-da-china",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 14,
  "name": "que a entrega é 05/04/2018",
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "a entrega atrasar 2 meses",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "a entrega será efetuada 05/06/2018",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2018",
      "offset": 16
    }
  ],
  "location": "AprenderCucumberTransformSteps.queAEntregaÉ(Date)"
});
formatter.result({
  "duration": 840000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "meses",
      "offset": 20
    }
  ],
  "location": "AprenderCucumberTransformSteps.aEntregaAtrasarDias(int,String)"
});
formatter.result({
  "duration": 372300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2018",
      "offset": 24
    }
  ],
  "location": "AprenderCucumberTransformSteps.aEntregaSeráEfetuada(String)"
});
formatter.result({
  "duration": 445900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "id": "aprender-cucumber-usando-transform;deve-criar-steps-genéricos-para-estes-passos",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 19,
  "name": "que o ticket AF345",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "que o valor da passagem R$ 230,45",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "que o nome do passageiro \"Fulano da Silva\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "que o telefone do passageiro 9999-9999",
  "keyword": "Dado "
});
formatter.step({
  "line": 23,
  "name": "criar o step",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "o teste funciona",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AF345",
      "offset": 13
    }
  ],
  "location": "AprenderCucumberTransformSteps.queOTicketAF(String,String)"
});
formatter.result({
  "duration": 104900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "230,45",
      "offset": 27
    }
  ],
  "location": "AprenderCucumberTransformSteps.queOValorDaPassagemR$(Double)"
});
formatter.result({
  "duration": 3161100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulano da Silva",
      "offset": 26
    }
  ],
  "location": "AprenderCucumberTransformSteps.queONomeDoPassageiro(String)"
});
formatter.result({
  "duration": 73400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999-9999",
      "offset": 29
    }
  ],
  "location": "AprenderCucumberTransformSteps.queOTelefoneDoPassageiro(String)"
});
formatter.result({
  "duration": 79100,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberTransformSteps.criarOStep()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.match({
  "location": "AprenderCucumberTransformSteps.oTesteFunciona()"
});
formatter.result({
  "duration": 30100,
  "status": "passed"
});
formatter.uri("desafio_regex.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Desafio regex",
  "description": "Como um aluno\r\nPreciso realizar as atividades de regex\r\nPara que eu possa aprimorar os conhecimentos",
  "id": "desafio-regex",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitarios"
    },
    {
      "line": 2,
      "name": "@cucumber_regex"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Deve criar steps genéricos para estes passos",
  "description": "",
  "id": "desafio-regex;deve-criar-steps-genéricos-para-estes-passos",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "que o ticket é AF345",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "que o valor da passagem é R$ 230,45",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "que o nome do passageiro é \"Fulano da Silva\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "que o telefone do passageiro é 9999-9999",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "criar os steps",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "o teste vai funcionar",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AF345",
      "offset": 15
    }
  ],
  "location": "DesafioRegexSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 143800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "230",
      "offset": 29
    },
    {
      "val": "45",
      "offset": 33
    }
  ],
  "location": "DesafioRegexSteps.queOValorDaPassagemÉR$(int,int)"
});
formatter.result({
  "duration": 608400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fulano da Silva",
      "offset": 28
    }
  ],
  "location": "DesafioRegexSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 73300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999-9999",
      "offset": 31
    }
  ],
  "location": "DesafioRegexSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 668400,
  "status": "passed"
});
formatter.match({
  "location": "DesafioRegexSteps.criarOsSteps()"
});
formatter.result({
  "duration": 27900,
  "status": "passed"
});
formatter.match({
  "location": "DesafioRegexSteps.oTesteVaiFuncionar()"
});
formatter.result({
  "duration": 24600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Deve reaproveitar os steps \"Dado\" do Cenário anterior",
  "description": "",
  "id": "desafio-regex;deve-reaproveitar-os-steps-\"dado\"-do-cenário-anterior",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 17,
  "name": "que o ticket é AB167",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "que o ticket especial é AB167",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "que o valor da passagem é R$ 1120,23",
  "keyword": "Dado "
});
formatter.step({
  "line": 20,
  "name": "que o nome do passageiro é \"Cicrano de Oliveira\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "que o telefone do passageiro é 9888-8888",
  "keyword": "Dado "
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "AB167",
      "offset": 15
    }
  ],
  "location": "DesafioRegexSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 119000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " especial",
      "offset": 12
    },
    {
      "val": "AB167",
      "offset": 24
    }
  ],
  "location": "DesafioRegexSteps.queOTicketÉAF(String,String)"
});
formatter.result({
  "duration": 81200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1120",
      "offset": 29
    },
    {
      "val": "23",
      "offset": 34
    }
  ],
  "location": "DesafioRegexSteps.queOValorDaPassagemÉR$(int,int)"
});
formatter.result({
  "duration": 145300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cicrano de Oliveira",
      "offset": 28
    }
  ],
  "location": "DesafioRegexSteps.queONomeDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 228700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9888-8888",
      "offset": 31
    }
  ],
  "location": "DesafioRegexSteps.queOTelefoneDoPassageiroÉ(String)"
});
formatter.result({
  "duration": 134300,
  "status": "passed"
});
formatter.uri("esq_cenario_data_table.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Locadora com esquema de cenário e data table",
  "description": "Como um usuário\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "locadora-com-esquema-de-cenário-e-data-table",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitarios"
    },
    {
      "line": 2,
      "name": "@loc_esqcenario_dt"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 8,
      "name": "@data_table"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 11
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 12
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 13
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 14,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 16,
  "name": "data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "EsqCenarioDataTable.filme(DataTable)"
});
formatter.result({
  "duration": 4444500,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 1379400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 25
    }
  ],
  "location": "EsqCenarioDataTable.oPreçoDoaluguelSeráR$(int)"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "EsqCenarioDataTable.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 437000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "EsqCenarioDataTable.oEstoqueDoFilmeSeráDeUnidade(int)"
});
formatter.result({
  "duration": 112400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 20,
  "name": "filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "não será possivel pela falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 23,
  "name": "estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 21
    }
  ],
  "location": "EsqCenarioDataTable.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 204800,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 76500,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.nãoSeráPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 36900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 22
    }
  ],
  "location": "EsqCenarioDataTable.oEstoqueDoFilmeSeráDeUnidade(int)"
});
formatter.result({
  "duration": 87000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 25,
      "name": "@esq_cenario"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "pontuação recebida será de \u003cpontuacao\u003e pontos",
  "keyword": "E "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel;",
  "rows": [
    {
      "cells": [
        "preco",
        "tipo",
        "valor",
        "qtdDias",
        "pontuacao"
      ],
      "line": 36,
      "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel;;1"
    },
    {
      "cells": [
        "4",
        "extendido",
        "8",
        "3",
        "2"
      ],
      "line": 37,
      "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel;;2"
    },
    {
      "cells": [
        "4",
        "comum",
        "4",
        "1",
        "1"
      ],
      "line": 38,
      "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel;;3"
    },
    {
      "cells": [
        "5",
        "semanal",
        "15",
        "7",
        "3"
      ],
      "line": 39,
      "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 37,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@loc_esqcenario_dt"
    },
    {
      "line": 25,
      "name": "@esq_cenario"
    },
    {
      "line": 2,
      "name": "@unitarios"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "preço do aluguel será R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "pontuação recebida será de 2 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "EsqCenarioDataTable.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 124600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "EsqCenarioDataTable.queOPreçoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 104800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 23
    }
  ],
  "location": "EsqCenarioDataTable.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 78100,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 102600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 25
    }
  ],
  "location": "EsqCenarioDataTable.oPreçoDoaluguelSeráR$(int)"
});
formatter.result({
  "duration": 1435200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "EsqCenarioDataTable.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 310400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "EsqCenarioDataTable.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 96800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@loc_esqcenario_dt"
    },
    {
      "line": 25,
      "name": "@esq_cenario"
    },
    {
      "line": 2,
      "name": "@unitarios"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "preço do aluguel será R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "pontuação recebida será de 1 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "EsqCenarioDataTable.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 121800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "EsqCenarioDataTable.queOPreçoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 101900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 23
    }
  ],
  "location": "EsqCenarioDataTable.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 61000,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 97100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 25
    }
  ],
  "location": "EsqCenarioDataTable.oPreçoDoaluguelSeráR$(int)"
});
formatter.result({
  "duration": 84200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "EsqCenarioDataTable.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 364700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "EsqCenarioDataTable.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 101300,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 2,
      "name": "@loc_esqcenario_dt"
    },
    {
      "line": 25,
      "name": "@esq_cenario"
    },
    {
      "line": 2,
      "name": "@unitarios"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 28,
  "name": "o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "preço do aluguel será R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 32,
  "name": "data de entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 33,
  "name": "pontuação recebida será de 3 pontos",
  "matchedColumns": [
    4
  ],
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "EsqCenarioDataTable.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 164900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 27
    }
  ],
  "location": "EsqCenarioDataTable.queOPreçoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 89800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "semanal",
      "offset": 23
    }
  ],
  "location": "EsqCenarioDataTable.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 71200,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 97800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 25
    }
  ],
  "location": "EsqCenarioDataTable.oPreçoDoaluguelSeráR$(int)"
});
formatter.result({
  "duration": 97900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "EsqCenarioDataTable.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 412400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "EsqCenarioDataTable.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 106700,
  "status": "passed"
});
formatter.uri("locadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Locadora",
  "description": "Como um usuário\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "locadora",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@unitarios"
    },
    {
      "line": 2,
      "name": "@locadora"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "locadora;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 9,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "que o preço do aluguel seja R$ 3",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "o preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 13,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "LocadoraSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 181900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 31
    }
  ],
  "location": "LocadoraSteps.queOPreçoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 1081500,
  "status": "passed"
});
formatter.match({
  "location": "LocadoraSteps.alugar()"
});
formatter.result({
  "duration": 202200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "LocadoraSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "LocadoraSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 410700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "LocadoraSteps.oEstoqueDoFilmeSeráDeUnidade(int)"
});
formatter.result({
  "duration": 143700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "locadora;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 17,
  "name": "um filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 18,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 19,
  "name": "não será possivel por falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 20,
  "name": "o estoque do filme será 0 unidade",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "LocadoraSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 120700,
  "status": "passed"
});
formatter.match({
  "location": "LocadoraSteps.alugar()"
});
formatter.result({
  "duration": 62500,
  "status": "passed"
});
formatter.match({
  "location": "LocadoraSteps.nãoSeráPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "LocadoraSteps.oEstoqueDoFilmeSeráDeUnidade(int)"
});
formatter.result({
  "duration": 59500,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Deve dar condições especiais para a categoria extendida",
  "description": "",
  "id": "locadora;deve-dar-condições-especiais-para-a-categoria-extendida",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 23,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 24,
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "que o tipo do aluguel seja extendido",
  "keyword": "E "
});
formatter.step({
  "line": 26,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 27,
  "name": "o preço do aluguel será R$ 8",
  "keyword": "Então "
});
formatter.step({
  "line": 28,
  "name": "a data de entrega será em 3 dias",
  "keyword": "E "
});
formatter.step({
  "line": 29,
  "name": "a pontuação recebida será de 2 pontos",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "LocadoraSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 208500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "LocadoraSteps.queOPreçoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 64800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extendido",
      "offset": 27
    }
  ],
  "location": "LocadoraSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 229100,
  "status": "passed"
});
formatter.match({
  "location": "LocadoraSteps.alugar()"
});
formatter.result({
  "duration": 180800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 27
    }
  ],
  "location": "LocadoraSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 74200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 26
    }
  ],
  "location": "LocadoraSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 343100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "LocadoraSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 68200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Deve alugar para categoria comum",
  "description": "",
  "id": "locadora;deve-alugar-para-categoria-comum",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 32,
  "name": "um filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "que o preço do aluguel seja R$ 4",
  "keyword": "E "
});
formatter.step({
  "line": 34,
  "name": "que o tipo do aluguel seja comum",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "alugar",
  "keyword": "Quando "
});
formatter.step({
  "line": 36,
  "name": "o preço do aluguel será R$ 4",
  "keyword": "Então "
});
formatter.step({
  "line": 37,
  "name": "a data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 38,
  "name": "a pontuação recebida será de 1 ponto",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "LocadoraSteps.umFilmeComEstoqueDeUnidades(int)"
});
formatter.result({
  "duration": 99200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "LocadoraSteps.queOPreçoDoAluguelSejaDeR$(int)"
});
formatter.result({
  "duration": 496700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "comum",
      "offset": 27
    }
  ],
  "location": "LocadoraSteps.queOTipoDoAluguelSejaExtendido(String)"
});
formatter.result({
  "duration": 45700,
  "status": "passed"
});
formatter.match({
  "location": "LocadoraSteps.alugar()"
});
formatter.result({
  "duration": 821200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "LocadoraSteps.oPreçoDoAluguelSeráR$(int)"
});
formatter.result({
  "duration": 1445200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "LocadoraSteps.aDataDeEntregaSeráEmDias(int)"
});
formatter.result({
  "duration": 299300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 29
    }
  ],
  "location": "LocadoraSteps.aPontuaçãoRecebidaSeráDePontos(int)"
});
formatter.result({
  "duration": 124600,
  "status": "passed"
});
});