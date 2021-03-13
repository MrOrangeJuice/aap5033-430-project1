// Game database
const games = [
  {
    title: 'Super Mario Land',
    developer: 'Nintendo',
    year: '1989',
    url: '/mario-land',
  },
  {
    title: 'Alleyway',
    developer: 'Intelligent Systems',
    year: '1989',
    url: '/alleyway',
  },
  {
    title: 'Game and Watch Gallery',
    developer: 'Nintendo',
    year: '1997',
    url: '/gallery',
  },
  {
    title: 'Mega Man 2',
    developer: 'Capcom',
    year: '1992',
    url: '/mm2',
  },
  {
    title: 'Mega Man 3',
    developer: 'Capcom',
    year: '1993',
    url: '/mm3',
  },
  {
    title: 'Mega Man 4',
    developer: 'Capcom',
    year: '1994',
    url: '/mm4',
  },
  {
    title: 'Mega Man 5',
    developer: 'Capcom',
    year: '1994',
    url: '/mm5',
  },
  {
    title: "Kirby's Dream Land",
    developer: 'HAL Laboratory',
    year: '1992',
    url: '/kirby',
  },
  {
    title: 'Super Mario Land 2: 6 Golden Coins',
    developer: 'Nintendo',
    year: '1992',
    url: '/mario-land-2',
  },
  {
    title: 'Tetris',
    developer: 'Nintendo',
    year: '1989',
    url: '/tetris',
  },
  {
    title: 'Kid Dracula',
    developer: 'Konami',
    year: '1993',
    url: '/dracula',
  },
  {
    title: 'Street Fighter 2',
    developer: 'Capcom',
    year: '1995',
    url: '/street',
  },
  {
    title: 'Metroid 2: Return of Samus',
    developer: 'Nintendo',
    year: '1991',
    url: '/metroid',
  },
  {
    title: 'Wario Land: Super Mario Land 3',
    developer: 'Nintendo',
    year: '1994',
    url: '/wario-land',
  },
  {
    title: 'Pokemon Red',
    developer: 'Game Freak',
    year: '1997',
    url: '/red',
  },
  {
    title: 'Pokemon Blue',
    developer: 'Game Freak',
    year: '1989',
    url: '/blue',
  },
  {
    title: 'Donkey Kong',
    developer: 'Nintendo',
    year: '1994',
    url: '/dk',
  },
  {
    title: 'Final Fantasy Adventure',
    developer: 'Square',
    year: '1992',
    url: '/ff',
  },
  {
    title: 'Balloon Kid',
    developer: 'Pax Softnica',
    year: '1990',
    url: '/balloon',
  },
  {
    title: 'Pokemon Yellow',
    developer: 'Game Freak',
    year: '1999',
    url: '/yellow',
  },
  {
    title: "Kirby's Dream Land 2",
    developer: 'HAL Laboratory',
    year: '1995',
    url: '/kirby2',
  },
  {
    title: 'Wario Blast: Featuring Bomberman!',
    developer: 'Hudson Soft',
    year: '1994',
    url: '/warioblast',
  },
  {
    title: 'Faceball 2000',
    developer: 'Xanth Software',
    year: '1991',
    url: '/faceball',
  },
  {
    title: 'Castlevania: The Adventure',
    developer: 'Konami',
    year: '1989',
    url: '/castlevania',
  },
  {
    title: 'King of Fighters 95',
    developer: 'Gaibrain',
    year: '1997',
    url: '/kof',
  },
];

// respond JSON and respond JSON Meta
const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end();
};

// userList array (with some default values)
const userList = {
  Alex: {
    name: 'Alex',
    collection: [
      'kirby',
      'kirby2',
      'warioblast',
    ],
  },
  Jimmy: {
    name: 'Jimmy',
    collection: [
      'mario-land',
      'wario-land',
      'castlevania',
      'balloon',
    ],
  },
  Ash: {
    name: 'Ash',
    collection: [
      'red',
      'blue',
      'yellow',
    ],
  },
};

// Return userList array
const getUsers = (request, response) => {
  const responseJSON = {
    userList,
  };

  respondJSON(request, response, 200, responseJSON);
};

// addUser
const addUser = (request, response, body) => {
  const responseJSON = {
    message: 'Name and game are required',
  };

  if (!body.name || !body.game) {
    responseJSON.id = 'missingParams';
    return respondJSON(request, response, 400, responseJSON);
  }

  let responseCode = 201;

  if (userList[body.name]) {
    responseCode = 204;
  } else {
    userList[body.name] = {};
    userList[body.name].name = body.name;
    userList[body.name].collection = [
      body.game,
    ];
  }

  if (responseCode === 201) {
    responseJSON.message = 'Created Successfully!';
    return respondJSON(request, response, responseCode, responseJSON);
  }

  return respondJSONMeta(request, response, responseCode);
};

// return random game
const getRandomGame = (limit = 1, request, response, type) => {
  let limit2 = Number(limit);
  limit2 = !limit2 ? 1 : limit2;
  limit2 = limit2 < 1 ? 1 : limit2;
  let number = 0;
  const max = games.length;
  const responseObj = [];
  for (let i = 0; i < limit2; i += 1) {
    number = Math.floor(Math.random() * max);
    responseObj.push({
      title: games[number].title,
      developer: games[number].developer,
      year: games[number].year,
      url: games[number].url,
    });
  }
  if (type === 'text/xml') {
    let responseXML = '<games>';
    for (let i = 0; i < limit2; i += 1) {
      number = Math.floor(Math.random() * max);
      responseXML += `
        <game>
          <title>${games[number].title}</title>
          <developer>${games[number].developer}</developer>
          <year>${games[number].year}</year>
          <url>${games[number].url}</url>
        </game>
        `;
    }
    responseXML += '</games>';
    return responseXML; // bail out
  }

  return JSON.stringify(responseObj);
};

const getRandomGameResponse = (request, response, params, acceptedTypes, httpMethod) => {
  let type = 'application/json';
  if (acceptedTypes.includes('text/xml')) {
    type = 'text/xml';
  }

  // Source: https://stackoverflow.com/questions/2219526/how-many-bytes-in-a-javascript-string/29955838
  // Refactored to an arrow function by ACJ
  const getBinarySize = (string) => Buffer.byteLength(string, 'utf8');

  const headers = {
    'Content-Type': 'application/json',
    'Content-Length': getBinarySize,
  };

  if (httpMethod === 'HEAD') {
    response.writeHead(200, headers);
  } else {
    response.writeHead(200, { 'Content-Type': type });
    response.write(getRandomGame(params.limit, request, response, type));
    response.end();
  }
};

module.exports.getRandomGameResponse = getRandomGameResponse;
module.exports.getUsers = getUsers;
module.exports.addUser = addUser;
