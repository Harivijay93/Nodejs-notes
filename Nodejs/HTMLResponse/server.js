const http = require('http');
const fs = require('fs');

const server= http.createServer((req, res)=>{

    res.setHeader('Content','text/html');
    fs.readFile('./index.html', (err, data) =>{
        if(err){
            console.log(err.message);
            
        }
        else {
            res.write(data);
            res.end();
        }
    })
    
});

server.listen(3000, 'localhost', ()=>{
    console.log('Server is listening');    
})