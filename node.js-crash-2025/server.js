import http from 'http';

let PORT = 8000;
let server = http.createServer((req,res)=>{
    res.write('Hello World!');
    res.end();
});

server.listen(PORT, ()=>{
    console.log(`Running Server on Port: ${PORT}`)
})