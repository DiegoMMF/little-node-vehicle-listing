/**
 * - vehicleLoading()
 * - mainListing()
 * - mostExpensive()
 * - cheapestVehicle()
 * - includesLetter()
 * - sortByCost()
 * 
 * 
 * La solución debe ser orientada a objetos.
 * 
 * La salida es por consola y exactamente como se requiere.
 * 
 * Usar solamente librerías provistas por Node JS.
 */

const http = require('http');

const mostramosListadoPrincipal = require('./controllers/showList');
const mostramosElDeMayorPrecio = require("./controllers/mostExpensive");


const hostname = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Bienvenid@! ...Esta app sólo tiene salida por consola.\n')
})

mostramosListadoPrincipal;

// mostramosElDeMayorPrecio;

// cheapestVehicle()

// includesLetter()

// sortByCost()

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Proceso Terminado.\nGracias por elegirnos!\n(jajaja)')
    })
});

process.kill(process.pid, "SIGTERM");