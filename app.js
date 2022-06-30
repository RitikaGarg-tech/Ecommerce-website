//To create a Server
//We have use const here so that in future we dont overwrite it
//We have use ./ to reqire a local file and we can remove this to refer to a global file.
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use('/shop',shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);



/*const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    //process.exit();
    if(url==='/')
    {
       
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action ="/message" method="POST"><input type="text"><button type="submit">Send</button></form> </body>')
        res.write('/<html>');
        return res.end();
    }
    
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);*/