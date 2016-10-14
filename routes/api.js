
exports.postMessage = function (req, res) {
    var body = req.body;
    if(body.message === undefined) {
	// Ignore empty messages
	console.log("Got null message");
	res.json({ status: 'ignored' });
    }
    else {
	// Broadcast to all clients
	var io = req.app.get('io');
	console.log("Received: ", body);
	res.json({ status: 'ok' });
	io.emit('message', body);
    }
};
