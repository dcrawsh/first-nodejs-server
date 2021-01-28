const http = require('http');
const { parse } = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></input></form></body>');
        res.write('<html>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/users'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body><ul><li>Item 1</li><li>Item 2</li></ul>');
        res.write('<html>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/create-user'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('='));
            res.statusCode = 302;
            res.setHeader('Location', '/');
        })
        return res.end();
    }


});

server.listen(3000);