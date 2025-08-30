const http = require('http');
const fs = require('fs');

const server= http.createServer((req, res)=>{

    res.setHeader('Content-Type','text/html');
    console.log(req.url);

    let path = './docs/'
    
    
    if(req.url == '/index' || req.url == '/'){
        path += 'index.html';
    }
    else if(req.url == '/about' ){
        path += 'about.html';
    }
    else if(req.url== '/contact' ) {
        path += 'contact.html';
    }
    else {
        path +='notfound.html'
    }
    fs.readFile(path , (err, data) =>{
        if(err){
            console.log(err.message);
            res.end();
        }
        else {
            res.end(data);
        }
    })
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('Server is listening');    
})