
var publishMessage = exports.publishMessage = function publishMessage(message, io) {
    if(message.message === undefined) {
	console.warn("Got null message", message);
	return {status: 'ignored'};
    }
    else {
	console.log("Publishing: ", message);
	io.emit('message', message);
	return { status: 'ok' };
    }
};

exports.postMessage = function (req, res) {
    var body = req.body;
    var result = publishMessage(body, req.app.get('io'));
    res.json(result);
};
