const SECRET_KEY = '4ef8b988cdb341ee87045175696390ae';
const ACCESS_KEY = '9767b425101349fd8b6af07d28746954';

module.exports =  {

	callBokunApi = function(res, path, httpMethod, data){
		var date = new Date();
		var concat = date + ACCESS_KEY + httpMethod + path;

		var crypto = require('crypto')

		var hash = crypto.createHmac('sha1', SECRET_KEY).update(concat).digest('utf-8')
		var encoded = Buffer.from(hash, 'base64');
		var headers = {"Content-Type": "application/json; charset=UTF-8",'X-Bokun-Date': date.toString(), 'X-Bokun-AccessKey': ACCESS_KEY, 'X-Bokun-Signature': encoded}

		var http = require('http');

		var options = {
			host: 'https://api.bokun.is',
			path: path,
			method: httpMethod,
			headers: headers
		};

		callback = function(response) {
			res.status(200).json({ response });
		}


		if(httpMethod = "GET"){
			http.request(options, callback).end();
		}else{
			var req = http.request(options, callback);
			req.write(data);
			req.end();
		}
	}
};
