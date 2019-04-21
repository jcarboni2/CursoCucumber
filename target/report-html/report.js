$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("esq_cenario_data_table.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Locadora com esquema de cenário e data table",
  "description": "Como um usuário\r\nEu quero cadastrar aluguéis de filmes\r\nPara controlar preços e datas de entrega",
  "id": "locadora-com-esquema-de-cenário-e-data-table",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@locEsqCenarioDataTable"
    }
  ]
});
formatter.scenario({
  "line": 10,
  "name": "Deve alugar um filme com sucesso",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;deve-alugar-um-filme-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário",
  "tags": [
    {
      "line": 9,
      "name": "@dataTable"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "filme",
  "rows": [
    {
      "cells": [
        "estoque",
        "2"
      ],
      "line": 12
    },
    {
      "cells": [
        "preco",
        "3"
      ],
      "line": 13
    },
    {
      "cells": [
        "tipo",
        "comum"
      ],
      "line": 14
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 15,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 16,
  "name": "preço do aluguel será R$ 3",
  "keyword": "Então "
});
formatter.step({
  "line": 17,
  "name": "data de entrega será em 1 dia",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "estoque do filme será 1 unidade",
  "keyword": "E "
});
formatter.match({
  "location": "EsqCenarioDataTable.filme(DataTable)"
});
formatter.result({
  "duration": 197422900,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 1795200,
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
  "duration": 4590200,
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
  "duration": 1120900,
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
  "duration": 117400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Não deve alugar filme sem estoque",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;não-deve-alugar-filme-sem-estoque",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 21,
  "name": "filme com estoque de 0 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 22,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "não será possivel pela falta de estoque",
  "keyword": "Então "
});
formatter.step({
  "line": 24,
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
  "duration": 105300,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 89200,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.nãoSeráPossivelPorFaltaDeEstoque()"
});
formatter.result({
  "duration": 47600,
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
  "duration": 93900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Deve dar condições conforme tipo de aluguel",
  "description": "",
  "id": "locadora-com-esquema-de-cenário-e-data-table;deve-dar-condições-conforme-tipo-de-aluguel",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 26,
      "name": "@esqCenario"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "o preço do aluguel seja R$ \u003cpreco\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "o tipo do aluguel seja \u003ctipo\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "preço do aluguel será R$ \u003cvalor\u003e",
  "keyword": "Então "
});
formatter.step({
  "line": 33,
  "name": "data de entrega será em \u003cqtdDias\u003e dias",
  "keyword": "E "
});
formatter.step({
  "line": 34,
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
      "line": 3,
      "name": "@locEsqCenarioDataTable"
    },
    {
      "line": 26,
      "name": "@esqCenario"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "o tipo do aluguel seja extendido",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "preço do aluguel será R$ 8",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 33,
  "name": "data de entrega será em 3 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 34,
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
  "duration": 147900,
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
  "duration": 112500,
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
  "duration": 157300,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 100100,
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
  "duration": 97100,
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
  "duration": 671900,
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
  "duration": 107000,
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
      "line": 3,
      "name": "@locEsqCenarioDataTable"
    },
    {
      "line": 26,
      "name": "@esqCenario"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "o preço do aluguel seja R$ 4",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "o tipo do aluguel seja comum",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "preço do aluguel será R$ 4",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 33,
  "name": "data de entrega será em 1 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 34,
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
  "duration": 146300,
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
  "duration": 100900,
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
  "duration": 79400,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 132000,
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
  "duration": 256600,
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
  "duration": 776100,
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
  "duration": 330400,
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
      "line": 3,
      "name": "@locEsqCenarioDataTable"
    },
    {
      "line": 26,
      "name": "@esqCenario"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "filme com estoque de 2 unidades",
  "keyword": "Dado "
});
formatter.step({
  "line": 29,
  "name": "o preço do aluguel seja R$ 5",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 30,
  "name": "o tipo do aluguel seja semanal",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 31,
  "name": "alugar este",
  "keyword": "Quando "
});
formatter.step({
  "line": 32,
  "name": "preço do aluguel será R$ 15",
  "matchedColumns": [
    2
  ],
  "keyword": "Então "
});
formatter.step({
  "line": 33,
  "name": "data de entrega será em 7 dias",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 34,
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
  "duration": 220300,
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
  "duration": 178700,
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
  "duration": 79700,
  "status": "passed"
});
formatter.match({
  "location": "EsqCenarioDataTable.alugar()"
});
formatter.result({
  "duration": 97700,
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
  "duration": 100800,
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
  "duration": 465800,
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
  "duration": 90700,
  "status": "passed"
});
});