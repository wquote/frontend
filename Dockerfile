FROM node:18.13 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@latest && npm install

COPY . .

RUN npm run build --prod

FROM nginx:latest

COPY --from=build /app/dist/quote-web/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]
