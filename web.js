const port = Number(process.env.PORT || 5000);

var httpServer = require('http');
var serverPath = require('./server');

const server = httpServer.createServer(
	function(req, res){
		serverPath(req,res);
	}
);

server.listen(port, '0.0.0.0', function() {
    console.log('Listening on port '+port+'. Hit CTRL-C to stop the server.');
});
