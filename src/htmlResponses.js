const fs = require('fs');

const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`);
const bombHome = fs.readFileSync(`${__dirname}/../client/bomb-home.html`);
const bombApp = fs.readFileSync(`${__dirname}/../client/bomb-app.html`);
const bombAdmin = fs.readFileSync(`${__dirname}/../client/bomb-admin.html`);
const bombRandom = fs.readFileSync(`${__dirname}/../client/bomb-random.html`);
const defaultCSS = fs.readFileSync(`${__dirname}/../client/default-styles.css`);
const redImg = fs.readFileSync(`${__dirname}/../media/red.png`);
const blueImg = fs.readFileSync(`${__dirname}/../media/blue.png`);
const marioLandImg = fs.readFileSync(`${__dirname}/../media/marioland.jpg`);
const marioLand2Img = fs.readFileSync(`${__dirname}/../media/marioland2.jpg`);
const warioLandImg = fs.readFileSync(`${__dirname}/../media/warioland.png`);
const kirbyImg = fs.readFileSync(`${__dirname}/../media/kirby.png`);
const tetrisImg = fs.readFileSync(`${__dirname}/../media/tetris.jpg`);
const galleryImg = fs.readFileSync(`${__dirname}/../media/gallery.png`);
const dk94Img = fs.readFileSync(`${__dirname}/../media/dk94.jpg`);
const mm2Img = fs.readFileSync(`${__dirname}/../media/mm2.jpg`);
const mm3Img = fs.readFileSync(`${__dirname}/../media/mm3.jpg`);
const mm4Img = fs.readFileSync(`${__dirname}/../media/mm4.jpg`);
const mm5Img = fs.readFileSync(`${__dirname}/../media/mm5.jpg`);

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

const getRedImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(redImg);
  response.end();
}

const getBlueImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(blueImg);
  response.end();
}

const getMarioLandImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(marioLandImg);
  response.end();
}

const getMarioLand2Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(marioLand2Img);
  response.end();
}

const getWarioLandImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(warioLandImg);
  response.end();
}

const getKirbyImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(kirbyImg);
  response.end();
}

const getTetrisImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(tetrisImg);
  response.end();
}

const getGalleryImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(galleryImg);
  response.end();
}

const getDK94Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(dk94Img);
  response.end();
}

const getMM2Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(mm2Img);
  response.end();
}

const getMM3Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(mm3Img);
  response.end();
}

const getMM4Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(mm4Img);
  response.end();
}

const getMM5Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(mm5Img);
  response.end();
}

module.exports.get404Response = get404Response;
module.exports.getBombHome = getBombHome;
module.exports.getBombApp = getBombApp;
module.exports.getBombAdmin = getBombAdmin;
module.exports.getBombRandom = getBombRandom;
module.exports.getDefaultCSS = getDefaultCSS;
module.exports.getRedImg = getRedImg;
module.exports.getBlueImg = getBlueImg;
module.exports.getMarioLandImg = getMarioLandImg;
module.exports.getMarioLand2Img = getMarioLand2Img;
module.exports.getWarioLandImg = getWarioLandImg;
module.exports.getKirbyImg = getKirbyImg;
module.exports.getTetrisImg = getTetrisImg;
module.exports.getGalleryImg = getGalleryImg;
module.exports.getDK94Img = getDK94Img;
module.exports.getMM2Img = getMM2Img;
module.exports.getMM3Img = getMM3Img;
module.exports.getMM4Img = getMM5Img;
module.exports.getMM5Img = getMM5Img;