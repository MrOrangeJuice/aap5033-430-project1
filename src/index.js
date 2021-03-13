// console.log('Random joke service starting up ...');

// Pull in the HTTP server module
const http = require('http');

// Pull in URL and query modules (for URL parsing)
const url = require('url');
const query = require('querystring');

// Load html and json handlers
const htmlHandler = require('./htmlResponses');
const jsonHandler = require('./responses');

// Endpoint list
const urlStruct = {
  '/random-game': jsonHandler.getRandomGameResponse,
  '/random-games': jsonHandler.getRandomGameResponse,
  '/home': htmlHandler.getBombHome,
  '/': htmlHandler.getBombHome,
  '/app': htmlHandler.getBombApp,
  '/random': htmlHandler.getBombRandom,
  '/admin': htmlHandler.getBombAdmin,
  '/default-styles': htmlHandler.getDefaultCSS,
  // Images
  '/red': htmlHandler.getRedImg,
  '/blue': htmlHandler.getBlueImg,
  '/mario-land': htmlHandler.getMarioLandImg,
  '/mario-land-2': htmlHandler.getMarioLand2Img,
  '/wario-land': htmlHandler.getWarioLandImg,
  '/kirby': htmlHandler.getKirbyImg,
  '/tetris': htmlHandler.getTetrisImg,
  '/gallery': htmlHandler.getGalleryImg,
  '/dk': htmlHandler.getDK94Img,
  '/mm2': htmlHandler.getMM2Img,
  '/mm3': htmlHandler.getMM3Img,
  '/mm4': htmlHandler.getMM4Img,
  '/mm5': htmlHandler.getMM5Img,
  '/alleyway': htmlHandler.getAlleywayImg,
  '/ff': htmlHandler.getFFAdventureImg,
  '/dracula': htmlHandler.getKidDraculaImg,
  '/metroid': htmlHandler.getMetroid2Img,
  '/street': htmlHandler.getSF2Img,
  '/balloon': htmlHandler.getBalloonImg,
  '/kirby2': htmlHandler.getKirby2Img,
  '/yellow': htmlHandler.getYellowImg,
  '/warioblast': htmlHandler.getWarioBlastImg,
  '/faceball': htmlHandler.getFaceballImg,
  '/castlevania': htmlHandler.getCastlevaniaImg,
  '/kof': htmlHandler.getKOFImg,

  notFound: htmlHandler.get404Response,
};

// Create port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const handlePost = (request, response, parsedUrl) => {
  if (parsedUrl.pathname === '/addUser') {
    const body = [];

    // https://nodejs.org/api/http.html
    request.on('error', () => {
      response.statusCode = 400;
      response.end();
    });

    request.on('data', (chunk) => {
      body.push(chunk);
    });

    request.on('end', () => {
      const bodyString = Buffer.concat(body).toString();
      const bodyParams = query.parse(bodyString);

      jsonHandler.addUser(request, response, bodyParams);
    });
  }
};

const handleGet = (request, response, parsedUrl) => {
  if (parsedUrl.pathname === '/getUsers') {
    jsonHandler.getUsers(request, response);
  }
};

// handle client request
const onRequest = (request, response) => {
  // console.log(request.headers);
  let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
  acceptedTypes = acceptedTypes || [];

  const httpMethod = request.method;

  const parsedUrl = url.parse(request.url);
  const { pathname } = parsedUrl;

  const params = query.parse(parsedUrl.query);
  // const { limit } = params;

  if (pathname === '/addUser') {
    handlePost(request, response, parsedUrl);
  } else if (pathname === '/getUsers') {
    handleGet(request, response, parsedUrl);
  } else if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params, acceptedTypes, httpMethod);
  } else {
    urlStruct.notFound(request, response, params, acceptedTypes, httpMethod);
  }
};

// create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port);
