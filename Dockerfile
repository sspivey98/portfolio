# select node v22 LTS
FROM node:latest

# define working directory within the docker image
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# install the serve package (to deploy)
RUN npm i -g serve

# copy files over
COPY . .

# compile modules
RUN npm run build

# bind TCP port
EXPOSE 3000

# deploy
CMD [ "serve", "-s", "dist" ]