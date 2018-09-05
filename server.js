let express = require('express');
let app = express();
let http = require('http').Server(app);

app.use('/', express.static(__dirname+'/'));


app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
});

http.listen(process.env.PORT || 5000, () => console.log('server started on 5000 port'));