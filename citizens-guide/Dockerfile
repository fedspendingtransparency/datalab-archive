FROM node:8

RUN mkdir /cg-docker
WORKDIR /cg-docker

# Run and cache npm install
COPY package.json /cg-docker 
RUN npm install

COPY . /cg-docker
