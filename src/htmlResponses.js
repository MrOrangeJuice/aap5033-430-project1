const fs = require('fs');

// Load in necessary files
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
const alleywayImg = fs.readFileSync(`${__dirname}/../media/alleyway.jpg`);
const ffAdventureImg = fs.readFileSync(`${__dirname}/../media/ffadventure.jpg`);
const kidDraculaImg = fs.readFileSync(`${__dirname}/../media/kidDracula.jpg`);
const metroid2Img = fs.readFileSync(`${__dirname}/../media/metroid.jpg`);
const sf2Img = fs.readFileSync(`${__dirname}/../media/sf2.jpg`);
const balloonImg = fs.readFileSync(`${__dirname}/../media/balloon.png`);
const yellowImg = fs.readFileSync(`${__dirname}/../media/yellow.jpg`);
const kirby2Img = fs.readFileSync(`${__dirname}/../media/kirby2.png`);
const warioBlastImg = fs.readFileSync(`${__dirname}/../media/warioblast.jpg`);
const faceballImg = fs.readFileSync(`${__dirname}/../media/faceball.jpg`);
const castlevaniaImg = fs.readFileSync(`${__dirname}/../media/castlevania.jpg`);
const kofImg = fs.readFileSync(`${__dirname}/../media/kof.jpg`);

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
};

const getBlueImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(blueImg);
  response.end();
};

const getMarioLandImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(marioLandImg);
  response.end();
};

const getMarioLand2Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(marioLand2Img);
  response.end();
};

const getWarioLandImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(warioLandImg);
  response.end();
};

const getKirbyImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(kirbyImg);
  response.end();
};

const getTetrisImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(tetrisImg);
  response.end();
};

const getGalleryImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(galleryImg);
  response.end();
};

const getDK94Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(dk94Img);
  response.end();
};

const getMM2Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(mm2Img);
  response.end();
};

const getMM3Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(mm3Img);
  response.end();
};

const getMM4Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(mm4Img);
  response.end();
};

const getMM5Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(mm5Img);
  response.end();
};

const getAlleywayImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(alleywayImg);
  response.end();
};

const getFFAdventureImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(ffAdventureImg);
  response.end();
};

const getKidDraculaImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(kidDraculaImg);
  response.end();
};

const getMetroid2Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(metroid2Img);
  response.end();
};

const getSF2Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(sf2Img);
  response.end();
};

const getBalloonImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(balloonImg);
  response.end();
};

const getYellowImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(yellowImg);
  response.end();
};

const getKirby2Img = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(kirby2Img);
  response.end();
};

const getWarioBlastImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(warioBlastImg);
  response.end();
};

const getFaceballImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(faceballImg);
  response.end();
};

const getCastlevaniaImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(castlevaniaImg);
  response.end();
};

const getKOFImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpeg' });
  response.write(kofImg);
  response.end();
};

module.exports = {
  get404Response,
  getBombHome,
  getBombApp,
  getBombAdmin,
  getBombRandom,
  getDefaultCSS,
  getRedImg,
  getBlueImg,
  getMarioLandImg,
  getMarioLand2Img,
  getWarioLandImg,
  getKirbyImg,
  getTetrisImg,
  getGalleryImg,
  getDK94Img,
  getMM2Img,
  getMM3Img,
  getMM4Img,
  getMM5Img,
  getAlleywayImg,
  getFFAdventureImg,
  getKidDraculaImg,
  getMetroid2Img,
  getSF2Img,
  getBalloonImg,
  getYellowImg,
  getKirby2Img,
  getWarioBlastImg,
  getFaceballImg,
  getCastlevaniaImg,
  getKOFImg,
};
