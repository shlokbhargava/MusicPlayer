const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(request, response){
    console.log(request.url);

    

    let filePath;

    switch(request.url){
        case '/':
            response.writeHead(200, {'content-type' : 'text/html'});
            filePath = './index.html'
            break;
        case '/home':
            response.writeHead(200, {'content-type' : 'text/html'});
            filePath = './index.html'
            break;   
        case '/styles.css':
            response.writeHead(200, {'content-type' : 'text/css'});
            filePath = './styles.css'
            break;     
            
            
        default: 
            filePath = '404.html'    
    }

    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('error:', err);
            return response.end('<h1>Error</h1>');
        }

        return response.end(data);

    })
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
    if(err){
        console.log('error', err);
        return;
    }

    console.log('server is running on port:', port);
})
