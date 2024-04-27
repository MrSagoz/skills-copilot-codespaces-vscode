// Create web server
// Create the web server
var server = http.createServer(function (req, res) {
    // Get the URL
    var url = req.url;
  
    // If the URL is /, serve the index.html file
    if (url === '/') {
      fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      });
    }
  
    // If the URL is /member.js, serve the member.js file
    if (url === '/member.js') {
      fs.readFile('member.js', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
      });
    }
  
    // If the URL is /comments.js, serve the comments.js file
    if (url === '/comments.js') {
      fs.readFile('comments.js', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
      });
    }
  });
  
  // Start the server
  server.listen(3000, function () {
    console.log('Server is listening on port 3000');
  });
  // Create web server
// Create the web server
var server = http.createServer(function (req, res) {
    // Get the URL
    var url = req.url;
  
    // If the URL is /, serve the index.html file
    if (url === '/') {
      fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      });
    }
  
    // If the URL is /member.js, serve the member.js file
    if (url === '/member.js') {
      fs.readFile('member.js', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
      });
    }
  
    // If the URL is /comments.js, serve the comments.js file
    if (url === '/comments.js') {
      fs.readFile('comments.js', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/javascript'