// File System

const { log } = require('console');
const fs =require ('fs');

// mkdir

if ( ! fs.existsSync('./docs') )
    
{
    fs.mkdir('./docs',(err)=>{
        if(err){
            console.log(err.message);
        }
        else 
            console.log('Folder Created');    
    })
}
