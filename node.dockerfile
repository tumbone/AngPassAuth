FROM node:latest
MAINTAINER tumbonea
ENV NODE_ENV=dev
ENV PORT=3000
WORKDIR /var/www
ADD . /var/www
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]