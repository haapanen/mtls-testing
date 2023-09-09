FROM node:latest
WORKDIR /app
COPY index.js /app/index.js

CMD ["node", "index.js"]
