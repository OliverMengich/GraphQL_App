FROM node:20-alpine3.17
WORKDIR /app
COPY package*.json .
RUN npm install
COPY tsconfig.json .
COPY src/  ./src/
RUN ls -la
EXPOSE 3000
CMD ["npm","run","dev"]
