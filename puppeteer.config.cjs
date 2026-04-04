const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration} */
module.exports = {
  // Changes the cache location for Puppeteer to a path Render can track
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
