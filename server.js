const http = require('http') //http module plugin
const port = 8080


http.createServer(function (req, res) {

//allow server access from port 3000
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
       // res.setHeader('Access-Control-Allow-Origin', '*');
//all methods allowed
    res.setHeader('Access-Control-Request-Method', '*');
       //res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
//Request header field content-type is not allowed by Access-Control-Allow-Headers
// in preflight response.
    res.setHeader('Access-Control-Allow-Headers', '*');
    console.log('method' + req.method)

    // if (req.method === "POST") {

    var body = "";
    req.on("data", function (chunk) {
        body += chunk;
    });
    //  res.writeHead(200, {'Content-type' : 'text/html charset=utf-8'})

    req.on("end", function () {
        res.writeHead(200, {
            "Content-Type": "text/html",
        });
        console.log(body)
        res.end(body);
    });
    //    }
}).listen(port)
console.log('Server is listening on ' + port)