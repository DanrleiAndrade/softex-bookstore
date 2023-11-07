FROM node:16.14-alpine

WORKDIR /app-crud

COPY package* .

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]