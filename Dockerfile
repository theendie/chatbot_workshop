FROM node:carbon
WORKDIR /usr/projects/chatbot-witai

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "npm", "start" ]
USER node
