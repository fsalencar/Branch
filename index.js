'use strict';

const http = require('http'),
	port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(filtro(req));
});

function filtro(req){
	return req.url + " " + req.method;
}

function getGroselha(){

}
function postGroselha(){
	
}

server.listen(port,()=>{
  console.log(`Server running`);
});
