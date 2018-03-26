# chatbot_workshop
Este repositório tem como objetivo mapear, passo-a-passo, como é feito um chatbot simples utilizando Hubot e Wit.ai

## Rodando localmente
- `git@github.com:asserdna/chatbot_workshop.git`
- `cd chatbot_workshop`
- `touch .env`

rode o hubot pelo Docker ou Node

### Docker
- `sh ./start.sh`

### Node
- `npm install`
- `npm start`

### Variaveis de ambiente
Voce precisará criar um arquivo `.env` após clonar o repositório, na pasta raiz do projeto e adicionar
```
WIT_ACCESS_TOKEN=<INSIRA_SEU_TOKEN_DE_ACESSO_AQUI>
ACCUWEATHER_APIKEY=<INSIRA_SUA_APIKEY_AQUI>
```

## Pré-requisito:
Favor consultar [AQUI](https://github.com/asserdna/chatbot_workshop/wiki/02-Preparando-ambiente).
