FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .

# Hardening: Chạy với user non-root 'node'
USER node

EXPOSE 3000
CMD ["node", "server.js"]