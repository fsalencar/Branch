'use strict';

const http = require('http'),
	port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(filtro(req));
});

	function filtro(req){
		switch (req.method) {

		case 'GET':
		return getGroselha(req.url)
		break;

		case 'PUT':
		return putGroselha(req.url)
		break;

		case 'PULL':
		return pullGroselha(req.url)
		break;

		case 'DELETE':
		return delGroselha(req.url)
		break;

		default:
			return "Deu ruim amiguinho"
			break;
	}
	return req.url + " " + req.method;
}

function getGroselha(url){
	return "a url "+ url + " foi chamada com o metodo get";
}

function putGroselha(url){
	return "a url "+ url + " foi chamada com o metodo put";
}

function postGroselha(url){
	return "a url "+ url + " foi chamada com o metodo post";

}

function delGroselha(url){
	return "a url "+ url + " foi chamada com o metodo delete";
}

server.listen(port,()=>{
  console.log(`Server running`);
});
