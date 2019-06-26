FROM node:carbon

WORKDIR /data/

COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

