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
		return getGroselha(req.url) + groselhaMaster(req.url)
		break;

		case 'PUT':
		return putGroselha(req.url)+ groselhaMaster(req.url)
		break;

		case 'POST':
		return postGroselha(req.url)+ groselhaMaster(req.url)
		break;

		case 'DELETE':
		return delGroselha(req.url)+ groselhaMaster(req.url)
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

function groselhaMaster(x){
	let topper = [];
	for (let i = 0; i<x.length ; i++){
		if (i % 2==0){
			topper.push("_par_"+" ")
		}else {
			topper.push("_impar_" + " ")
		}
	}
	return topper;
}

server.listen(port,()=>{
  console.log(`Server running`);
});
