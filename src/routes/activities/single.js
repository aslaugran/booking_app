const bokunApi = require('../../utils/bokunApi');

module.exports = (req, res) => {

	var httpMethod = "GET";
	var path = "/activity.json/" + req.params.activityId + "?lang=EN&currency=EUR";

	bokunApi.callBokunApi(res, path, httpMethod)
};
