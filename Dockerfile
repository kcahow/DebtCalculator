# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# build the app
RUN npm install

# copy the app files
COPY . .

# Build the react app
RUN npm run build

# expose the port
EXPOSE 3000

# start / run the app 
CMD ["npm","run", "dev"]


# use docker build -t myapp . (-t = tag name to name the image)