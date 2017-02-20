const bokunApi = require('../../utils/bokunApi');

module.exports = (req, res) => {

	var httpMethod = "POST";
	var path = "/activity.json/search?lang=EN&currency=EUR";

	// filter parameters can be added here as per the api
	var data = {

	}

	bokunApi.callBokunApi(res, path, httpMethod, data)
};
