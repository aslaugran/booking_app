const bokunApi = require('../../utils/bokunApi');

module.exports = (req, res) => {

	var httpMethod = "GET";
	var path = "/shopping-cart.json/session/" + req.params.sessionId + "?lang=EN&currency=EUR";

	bokunApi.callBokunApi(path, httpMethod)
};
