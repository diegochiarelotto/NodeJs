const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'Public', file);
    const extname = path.extname(filePath)
    
    const allowedFileTypes = ['.html', '.css', '.js', '.png']
    const allowed = allowedFileTypes.find(item => item == extname) //ret True ou False

      if(!allowed) return    

    
    //if(req.url === '/') //Home Page
    //return res.end('<h1>Pagina Principal</h1>')
        fs.readFile(
       // path.join(__dirname, 'Public', 'index.html'),
         filePath,
         (err, content) => {
          if(err) throw err
                
          res.end(content)
          }
        )

   // if(req.url === '/contato') // Pg Contato
   // return res.end('<h1>Contato</h1>')
}). listen(8000, console.log("Sv-Rodando"));