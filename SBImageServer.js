var http = require("http");
var url = require("url");
var util = require("util");
var requestHandlers = require("./requestHandlers.js");
var json = require('./utils/jsonUtils.js');

var httpPort=8888;
var handle = {};
	handle["/getProfilePic"] = requestHandlers.getProfilePic;


function dispatch(pathname,response) 
{
  //Dispatcher can route requests either to a script or to a node.js function
  if (typeof handle[pathname] === 'function') 
  {
    handle[pathname](response);
  } 
  else
  {
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("404 Not found");
	response.end();		
  }
}

function onRequest(request, response) 
{
  var pathname = url.parse(request.url).pathname;
  dispatch(pathname,response);
}
http.createServer(onRequest).listen(httpPort);
util.log("SBImageServer::httpserver started, serving requests on port: " + httpPort);


