var http = require('http');
var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options

var server = http.createServer(function(req, res) {
  proxy.web(req, res, { target: 'http://www.google.com' });
});

console.log("listening on port 3000")
server.listen(3000);
