FROM node:10

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 9000

CMD ["npm", "run", "start"]