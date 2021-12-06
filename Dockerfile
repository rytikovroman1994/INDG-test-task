FROM node:14

COPY . .

WORKDIR /

RUN npm i

ENTRYPOINT ["npm", "test"]