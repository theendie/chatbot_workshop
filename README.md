# chatbot_workshop
Este repositório tem como objetivo mapear, passo-a-passo, como é feito um chatbot simples utilizando Hubot e Wit.ai

##Pré-requisito:
Node 8+
// CASE NODE INSTALADO NÃO SEJA UMA VERSÃO recomendamos: https://github.com/creationix/nvm

```
git clone https://github.com/asserdna/chatbot_workshop.git
npm init
npm install hubot
npm install node-wit
export WIT_SERVER_TOKEN=SEU-WIT.AI-TOKEN-123
```

Note que SEU-WIT.AI-TOKEN-123 equivale a seu token VALIDO, que poderá ser pego na configuração da sua Aplicação no Wit.AI.

Abaixo está os passos para a configuração da Aplicação:
1. Crie uma conta
2. New APP
3. Adicione um nome em App Name
4. Clique em intent 
5. Clique em keywords (vamos trabalhar apenas com palavras-chave neste exemplo)
5. Adicione uma nova palavra-chave [Add a new keyword] chamado "grettings"
6. Adicione sinônimos (são palavras que vão ser reconhecidas e associadas a esta palavra-chave) como: "hi", "oi", "eae", "olá"
7. Vá em configurações [Settings]
8. Copie seu Server Access Token (será o toke usado na variável de ambiente WIT_SERVER_TOKEN)

Para rodar o Hubot e conversar com nossa aplicação (por meio das palavras-chave cadastradas no Wit.ai), rode o comando:
```
bin/hubot
```
E divirta-se :P
Se os astros estiverem alinhados, é para retornar, de forma randômica, as respostas estáticas que estão no script src/answers/static.js quando este robozinho reconhecer a palavra-chave "grettings". Se escrevermos "oi", deve retornar alguma resposta!

