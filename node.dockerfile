FROM node:18.12.1-alpine3.16

ENV NODE_ENV=production


COPY ./app/ app/

WORKDIR /app
RUN npm install

# COPY . .
RUN npm run build:babel

EXPOSE 1520

CMD [ "npm", "run", "start:prod" ]
