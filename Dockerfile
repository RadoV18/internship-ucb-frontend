FROM node:18.15.0-alpine AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./

RUN npm install
COPY . .
RUN npm install -g @angular/cli
RUN ng build --configuration production

FROM nginx:1.17.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/internship-ucb-frontend /usr/share/nginx/html