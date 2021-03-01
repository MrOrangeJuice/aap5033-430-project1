// console.log('Random joke service starting up ...');

// 1 - pull in the HTTP server module
const http = require('http');

// 2 - pull in URL and query modules (for URL parsing)
const url = require('url');
const query = require('querystring');

const htmlHandler = require('./htmlResponses');
const jsonHandler = require('./responses');

const urlStruct = {
  '/random-game': jsonHandler.getRandomGameResponse,
  '/random-games': jsonHandler.getRandomGameResponse,
  '/home': htmlHandler.getBombHome,
  '/app': htmlHandler.getBombApp,
  '/random': htmlHandler.getBombRandom,
  '/admin': htmlHandler.getBombAdmin,
  '/default-styles': htmlHandler.getDefaultCSS,
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

  notFound: htmlHandler.get404Response,
};

// 3 - locally this will be 3000, on Heroku it will be assigned
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// 7 - this is the function that will be called every time a client request comes in
// this time we will look at the `pathname`, and send back the appropriate page
// note that in this course we'll be using arrow functions 100% of the time in our server-side code
const onRequest = (request, response) => {
  // console.log(request.headers);
  let acceptedTypes = request.headers.accept && request.headers.accept.split(',');
  acceptedTypes = acceptedTypes || [];

  const httpMethod = request.method;

  const parsedUrl = url.parse(request.url);
  const { pathname } = parsedUrl;
  // console.log('parsedUrl=', parsedUrl);
  // console.log('pathname=', pathname);

  const params = query.parse(parsedUrl.query);
  // const { limit } = params;

  if (urlStruct[pathname]) {
    urlStruct[pathname](request, response, params, acceptedTypes, httpMethod);
  } else {
    urlStruct.notFound(request, response, params, acceptedTypes, httpMethod);
  }
};

// 8 - create the server, hook up the request handling function, and start listening on `port`
http.createServer(onRequest).listen(port);

// console.log(`Listening on 127.0.0.1: ${port}`);
