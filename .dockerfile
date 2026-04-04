FROM ghcr.io/puppeteer/puppeteer:22.6.0
COPY . .
RUN npm install
CMD ["node", "index.js"]
