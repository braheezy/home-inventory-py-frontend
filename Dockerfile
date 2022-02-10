FROM node:10

COPY . /app

WORKDIR /app

RUN npm ci

EXPOSE 9000

CMD ["npm", "run", "start"]