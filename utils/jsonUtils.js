exports.json_decode = function (msg)
{
	try{
		return JSON.parse(msg);
	}
	catch(e)
	{return false;}
};

exports.json_encode = function (msg)
{
	try{
		return JSON.stringify(msg);
	}
	catch(e)
	{return false;}
};