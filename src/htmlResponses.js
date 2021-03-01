const fs = require('fs');

const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`);
const bombHome = fs.readFileSync(`${__dirname}/../client/bomb-home.html`);
const bombApp = fs.readFileSync(`${__dirname}/../client/bomb-app.html`);
const bombAdmin = fs.readFileSync(`${__dirname}/../client/bomb-admin.html`);
const bombRandom = fs.readFileSync(`${__dirname}/../client/bomb-random.html`);
const defaultCSS = fs.readFileSync(`${__dirname}/../client/default-styles.css`);

const get404Response = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(errorPage);
  response.end();
};

const getBombHome = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(bombHome);
  response.end();
};

const getBombApp = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(bombApp);
  response.end();
};

const getBombRandom = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(bombRandom);
  response.end();
};

const getBombAdmin = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(bombAdmin);
  response.end();
};

const getDefaultCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(defaultCSS);
  response.end();
};

module.exports.get404Response = get404Response;
module.exports.getBombHome = getBombHome;
module.exports.getBombApp = getBombApp;
module.exports.getBombAdmin = getBombAdmin;
module.exports.getBombRandom = getBombRandom;
module.exports.getDefaultCSS = getDefaultCSS;
