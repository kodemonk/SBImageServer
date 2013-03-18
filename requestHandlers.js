function getProfilePic(response) 
{
  response.writeHead(200, {"Content-Type": "text/html"}); //text/plain
  response.write("getProfilePic");
  response.end();
}

exports.getProfilePic = getProfilePic;