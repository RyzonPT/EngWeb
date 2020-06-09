FROM node:latest
COPY ./ ./app
WORKDIR ./app
RUN npm install && npm audit fix
CMD ["npm", "start"]

