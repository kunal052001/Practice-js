const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=="/home"){
        res.end("This is HOME Page")
    }
    else if(req.url=="/about"){
        res.end("this is ABOUT page")

    }
    else{
        res.writeHead(404);
        res.end("url are on wrong urrrl")
    }
})
const port=3000;
server.listen(port,()=>{
    console.log("server is running at port : localhost:3000")
})