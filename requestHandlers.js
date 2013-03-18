function streamFile(file,resp,contentType) {
    path.exists(file, function(exists) {
		if (exists) {
			fs.readFile(file, function(err,data) {
				if (err) {
					resp.writeHead(500);
					resp.end();
					log(WARN, "No such file: ", file);
				} else {
					resp.writeHead(200, { 'Content-Type': contentType });
					resp.end(data, 'utf-8');
				}
			});
		} else {
			resp.writeHead(404);
			resp.end();
		}
	});
}


function getProfilePic(response) {
  response.writeHead(200, {"Content-Type": "text/html"}); //text/plain
  response.write("getProfilePic");
  response.end();
}

exports.getProfilePic = getProfilePic;