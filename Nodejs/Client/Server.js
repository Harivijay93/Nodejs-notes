const http = require('http');

const server= http.createServer((req, res)=>{
    console.log("Request Made");
    console.log(req.url);
    console.log(req.method);

    res.setHeader('Content','text/html');
    res.write('<h1>Say hi to hari</h1>');
    res.write('<h4>Obey The Order</h4>');
    res.end();
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('Server is listening');    
})
