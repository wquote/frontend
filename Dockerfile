FROM node:18.20.3 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.27.0

COPY --from=build /app/dist/quote-web/* /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]


# docker run --name wq-web-render -p 81:80 wquote-fe 
# docker container start wq-web-render
