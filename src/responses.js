const games = [
  {
    title: 'Super Mario Land',
    year: '1989',
  },
  {
    title: 'X',
    year: '1992',
  },
  {
    title: 'Super Mario Land 2: 6 Golden Coins',
    year: '1992',
  },
  {
    title: 'Tetris',
    year: '1989',
  },
  {
    title: 'Kid Dracula',
    year: '1993',
  },
  {
    title: 'Space Invaders',
    year: '1994',
  },
  {
    title: 'Metroid 2: Return of Samus',
    year: '1991',
  },
  {
    title: 'Super Mario Land 3: Wario Land',
    year: '1994',
  },
  {
    title: 'Pokemon Red',
    year: '1997',
  },
  {
    title: 'Pokemon Blue',
    year: '1989',
  },
  {
    title: 'Donkey Kong',
    year: '1994',
  },
  {
    title: 'Final Fantasy Adventure',
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
  const max = 10;
  const responseObj = [];
  for (let i = 0; i < limit2; i += 1) {
    number = Math.floor(Math.random() * max);
    responseObj.push({
      title: games[number].title,
      year: games[number].year,
    });
  }
  if (type === 'text/xml') {
    let responseXML = '<games>';
    for (let i = 0; i < limit2; i += 1) {
      number = Math.floor(Math.random() * max);
      responseXML += `
        <game>
          <q>${games[number].title}</q>
          <a>${games[number].year}</a>
        </game>
        `;
    }
    responseXML += '</games>';
    return responseXML; // bail out
  }

  return JSON.stringify(responseObj);
};

module.exports.getRandomGameResponse = getRandomGameResponse;
