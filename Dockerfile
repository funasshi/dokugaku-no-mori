FROM node:16.13.0
WORKDIR /template
COPY package.json yarn.lock ./
RUN yarn install
COPY run.sh /usr/bin/run
RUN chmod +x /usr/bin/run
EXPOSE 3000

CMD [ "run" ]