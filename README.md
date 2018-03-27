# chatbot_workshop
Este repositório tem como objetivo mapear, passo-a-passo, como é feito um chatbot simples utilizando Hubot e Wit.ai

## Rodando localmente
- `git@github.com:asserdna/chatbot_workshop.git`
- `cd chatbot_workshop`
- `touch .env`

rode o hubot pelo Docker ou Node

### Docker
- `sh ./start.sh`
- Se voce está no windows, inicie a aplicaçao rodando `
docker run -it --env-file ".env" chatbot-witai`

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


## Criando uma Aplicacao no WIT.ai
Uma explicaçao mais detalhada se encontra [AQUI](https://github.com/asserdna/chatbot_workshop/wiki/04-Wit.ai)

Abaixo está os passos para a configuração da Aplicação:
1. Crie uma conta
2. New APP
3. Adicione um nome em App Name
4. Clique em intent
5. Clique em keywords (vamos trabalhar apenas com palavras-chave neste exemplo)
5. Adicione uma nova palavra-chave [Add a new keyword] chamado "grettings"
6. Adicione sinônimos (são palavras que vão ser reconhecidas e associadas a esta palavra-chave) como: "hi", "oi", "eae", "olá"
7. Vá em configurações [Settings]
8. Copie seu Server Access Token (será o token usado na variável de ambiente WIT_SERVER_TOKEN)
