# Stage 1
FROM node:22-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "-s", "dist"]