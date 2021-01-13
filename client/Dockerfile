FROM node:14.8-slim

# set working directory
WORKDIR /app/client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

#if can't insall use (
RUN npm config set strict-ssl false && npm install
# RUN  npm install
# add app
COPY . ./
# RUN npm run build

# start app
CMD ["npm", "start"]