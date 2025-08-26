const http = require('http');

const server= http.createServer((req, res)=>{
    console.log("Request Made");
    console.log(req.url);
    console.log(req.method)
});

server.listen(3000, 'localhost', ()=>{
    console.log('Server is listening');
    
})