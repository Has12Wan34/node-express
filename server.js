var express = require('express');
var cors = require('cors');
var app = express();

const userRouter = require('./routes/user');

app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter);

app.listen(5001, function () {
  console.log('CORS-enabled web server listening on port 80')
})