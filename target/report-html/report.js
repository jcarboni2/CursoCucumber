$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("inserir_conta_cenario_declarativo.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Cadastro de contas",
  "description": "Como um usuário \nGostaria de cadastrar contas\nPara que eu possa distribuir meu dinheiro de uma forma mais organizada",
  "id": "cadastro-de-contas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@funcionais"
    },
    {
      "line": 3,
      "name": "@inserir_conta_declarativo"
    }
  ]
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 9243476600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Deve inserir uma conta com sucesso",
  "description": "",
  "id": "cadastro-de-contas;deve-inserir-uma-conta-com-sucesso",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 13,
  "name": "adiciono a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "a conta inserida com sucesso",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 18
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.adicionoAConta(String)"
});
formatter.result({
  "duration": 1085901900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.aContaInseridaComSucesso()"
});
formatter.result({
  "duration": 106712200,
  "status": "passed"
});
formatter.after({
  "duration": 436810600,
  "status": "passed"
});
formatter.after({
  "duration": 4938697000,
  "status": "passed"
});
formatter.after({
  "duration": 965054100,
  "status": "passed"
});
formatter.after({
  "duration": 848524100,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 7949888400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Não deve inserir uma conta sem nome",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-sem-nome",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 17,
  "name": "adiciono a conta \"\"",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "sou notificado que nome da conta é obrigatório",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.adicionoAConta(String)"
});
formatter.result({
  "duration": 613885900,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.souNotificadoQueNomeDaContaÉObrigatório()"
});
formatter.result({
  "duration": 114600300,
  "status": "passed"
});
formatter.after({
  "duration": 418224600,
  "status": "passed"
});
formatter.after({
  "duration": 4669751000,
  "status": "passed"
});
formatter.after({
  "duration": 889400300,
  "status": "passed"
});
formatter.after({
  "duration": 853504300,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 7950604700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Não deve inserir uma conta com nome já existente",
  "description": "",
  "id": "cadastro-de-contas;não-deve-inserir-uma-conta-com-nome-já-existente",
  "type": "scenario",
  "keyword": "Cenário"
});
formatter.step({
  "line": 21,
  "name": "adiciono a conta \"Conta de Teste\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "sou notificado que existe uma conta com esse nome",
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste",
      "offset": 18
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.adicionoAConta(String)"
});
formatter.result({
  "duration": 708416200,
  "status": "passed"
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.souNotificadoQueExisteUmaContaComEsseNome()"
});
formatter.result({
  "duration": 73446600,
  "status": "passed"
});
formatter.after({
  "duration": 341319200,
  "status": "passed"
});
formatter.after({
  "duration": 4514045400,
  "status": "passed"
});
formatter.after({
  "duration": 883473100,
  "status": "passed"
});
formatter.after({
  "duration": 1052388000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenário"
});
formatter.step({
  "line": 25,
  "name": "adiciono a conta \"\u003cconta\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "recebo mensagem \"\u003cmensagem\u003e\"",
  "keyword": "Então "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;",
  "rows": [
    {
      "cells": [
        "conta",
        "mensagem"
      ],
      "line": 29,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;1"
    },
    {
      "cells": [
        "Conta de Teste Esquema",
        "Conta adicionada com sucesso!"
      ],
      "line": 30,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2"
    },
    {
      "cells": [
        "",
        "Informe o nome da conta"
      ],
      "line": 31,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3"
    },
    {
      "cells": [
        "Conta mesmo nome",
        "Já existe uma conta com esse nome!"
      ],
      "line": 32,
      "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 8199306700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@inserir_conta_declarativo"
    },
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "adiciono a conta \"Conta de Teste Esquema\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "recebo mensagem \"Conta adicionada com sucesso!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta de Teste Esquema",
      "offset": 18
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.adicionoAConta(String)"
});
formatter.result({
  "duration": 1159708700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Conta adicionada com sucesso!",
      "offset": 17
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.receboMensagem(String)"
});
formatter.result({
  "duration": 101488500,
  "status": "passed"
});
formatter.after({
  "duration": 387059400,
  "status": "passed"
});
formatter.after({
  "duration": 5001447000,
  "status": "passed"
});
formatter.after({
  "duration": 885722300,
  "status": "passed"
});
formatter.after({
  "duration": 839724200,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 7559091200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@inserir_conta_declarativo"
    },
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "adiciono a conta \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "recebo mensagem \"Informe o nome da conta\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.adicionoAConta(String)"
});
formatter.result({
  "duration": 795118500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Informe o nome da conta",
      "offset": 17
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.receboMensagem(String)"
});
formatter.result({
  "duration": 96768500,
  "status": "passed"
});
formatter.after({
  "duration": 381572000,
  "status": "passed"
});
formatter.after({
  "duration": 4694183300,
  "status": "passed"
});
formatter.after({
  "duration": 918910500,
  "status": "passed"
});
formatter.after({
  "duration": 840560100,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 10,
  "name": "que desejo adicionar uma conta",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContasStepsCenarioDeclarativo.queDesejoAdicionarUmaConta()"
});
formatter.result({
  "duration": 7532150900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Deve validar regras cadastro contas",
  "description": "",
  "id": "cadastro-de-contas;deve-validar-regras-cadastro-contas;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenário",
  "tags": [
    {
      "line": 3,
      "name": "@inserir_conta_declarativo"
    },
    {
      "line": 3,
      "name": "@funcionais"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "adiciono a conta \"Conta mesmo nome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "recebo mensagem \"Já existe uma conta com esse nome!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Então "
});
formatter.match({
  "arguments": [
    {
      "val": "Conta mesmo nome",
      "offset": 18
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.adicionoAConta(String)"
});
formatter.result({
  "duration": 811681100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Já existe uma conta com esse nome!",
      "offset": 17
    }
  ],
  "location": "InserirContasStepsCenarioDeclarativo.receboMensagem(String)"
});
formatter.result({
  "duration": 81862700,
  "status": "passed"
});
formatter.after({
  "duration": 403045800,
  "status": "passed"
});
formatter.after({
  "duration": 5092428200,
  "status": "passed"
});
formatter.after({
  "duration": 980725800,
  "status": "passed"
});
formatter.after({
  "duration": 856546400,
  "status": "passed"
});
});