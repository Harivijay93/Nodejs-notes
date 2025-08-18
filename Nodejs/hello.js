const hello = (hname)=>{
    console.log(`Hello, ${hname} !`);
}
hello("Hari")

// Global Object
console.log(global);

setTimeout(()=>{
    console.log("Hello world");    //this is a timeout function it will run this string after 2 sec
},2000)


setInterval(()=>{
    console.log('Interval Functtion'); //It will this code every 1 sec
},1000)

// clearInterval function
setTimeout(()=>{
    console.log("Hello world"); 
    clearInterval(intfunc)   
},5000)


const intfunc=setInterval(()=>{
    console.log('Interval Functtion');
},1000)

console.log(__dirname);
console.log(__filename);