// File System


const fs =require ('fs');

// // mkdir

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


// //// File Written

fs.writeFile ('./docs/file.txt','Hello World!' ,(err) => {
    if (err) {
        console.log(err.message);     
    }
    else{
        console.log('File Written'); 
    }
})

//// Read file
if(fs.existsSync('./docs/file.txt'))
{
    fs.readFile ('./docs/file.txt', (err, data) => {
        if (err) 
            console.log(err.message);
        else
            console.log(data.toString());
    })
}


// File Delete

if(fs.existsSync('./docs/file.txt'))
{
    fs.unlink('./docs/file.txt', (err) =>{
        if (err) 
            console.log(err.message);
        else 
            console.log('File Deleted');
            
    });
}
