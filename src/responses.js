const games = [
  {
    title: 'Super Mario Land',
    developer: 'Nintendo',
    year: '1989',
  },
  {
    title: 'Alleyway',
    developer: 'Intelligent Systems',
    year: '1989',
  },
  {
    title: 'Game and Watch Gallery',
    developer: 'Nintendo',
    year: '1997',
  },
  {
    title: 'Mega Man 2',
    developer: 'Capcom',
    year: '1992',
  },
  {
    title: 'Mega Man 3',
    developer: 'Capcom',
    year: '1993',
  },
  {
    title: 'Mega Man 4',
    developer: 'Capcom',
    year: '1994',
  },
  {
    title: 'Mega Man 5',
    developer: 'Capcom',
    year: '1994',
  },
  {
    title: 'X',
    developer: 'Nintendo',
    year: '1992',
  },
  {
    title: 'Super Mario Land 2: 6 Golden Coins',
    developer: 'Nintendo',
    year: '1992',
  },
  {
    title: 'Tetris',
    developer: 'Nintendo',
    year: '1989',
  },
  {
    title: 'Kid Dracula',
    developer: 'Konami',
    year: '1993',
  },
  {
    title: 'Space Invaders',
    developer: 'Taito',
    year: '1994',
  },
  {
    title: 'Metroid 2: Return of Samus',
    developer: 'Nintendo',
    year: '1991',
  },
  {
    title: 'Super Mario Land 3: Wario Land',
    developer: 'Nintendo',
    year: '1994',
  },
  {
    title: 'Pokemon Red',
    developer: 'Game Freak',
    year: '1997',
  },
  {
    title: 'Pokemon Blue',
    developer: 'Game Freak',
    year: '1989',
  },
  {
    title: 'Donkey Kong',
    developer: 'Nintendo',
    year: '1994',
  },
  {
    title: 'Final Fantasy Adventure',
    developer: 'Square',
    year: '1992',
  },
];

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

// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
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
        </game>
        `;
    }
    responseXML += '</games>';
    return responseXML; // bail out
  }

  return JSON.stringify(responseObj);
};

module.exports.getRandomGameResponse = getRandomGameResponse;
