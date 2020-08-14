const http = require('http');

const { dummyList } = require('./helpers/dummyList');
const showList = require('./controllers/showList');
const mostExpensive = require('./controllers/mostExpensive');
const cheapest = require('./controllers/cheapestVehicle');
const includesLetter = require('./controllers/includesLetter');
const sortByCostWrapper = require('./controllers/sortByCost');

const hostname = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Bienvenid@! ...Esta app sólo tiene salida por consola.\n')
})

showList(dummyList);

mostExpensive(dummyList);

cheapest(dummyList);

includesLetter(dummyList);

sortByCostWrapper(dummyList);

server.listen(process.env.PORT);

process.on('SIGTERM', () => {
    server.close()
});

process.kill(process.pid, "SIGTERM");