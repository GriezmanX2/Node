let express = require('express');

let app = express();

app.get('/',(req,res) => {
    res.send('hello express!!');
});
app.use('/public/',express.static('./../../public/'));

app.listen(11520,_ => {
    console.log('Server is runing at http://localhost:11520/');
});