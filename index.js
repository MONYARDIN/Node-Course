const express = require('express')
const colors = require('colors')
const server = express()


server.get('/', function(req, res){
    res.send('<h1>Hola mundo con Express y Node<h1/>')
    res.end()
})
server.listen(3000, ()=>{
    console.log('Server on port 3000'.red);
})



// const http = require('http');
// const colors = require('colors');

// const handleServer = function(req, res){
//     res.writeHead(200, {'Content-type': 'text/html'});
//     res.write('<h1>Hola Mundo</h1>');
//     res.end;
// }

// const server = http.createServer(handleServer)

// server.listen(3000, function(){
//     console.log('Server on port 3000'.red)
// });


// const os = require('os'); //Importa el modulo os de node
// const fs = require('fs')
// /*
// console.log(os.platform());
// console.log(os.release());
// console.log(os.freemem());
// */

// //Callback código asíncrono. Ejecuta una función una vez terminado un proceso
// fs.writeFile('.texto.txt', 'linea uno', function (err){
//     if(err){
//         console.log(err);
//     }
//     console.log('Archivo creado');
// })

// console.log('ultima línea de código');

// fs.readFile('./.texto.txt', function(err, data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

/*Codigo bloqueante
const result = fs.writeFile('', '');
Tiene que esperar a que termine este método para continuar la ejecución del programa
*/
