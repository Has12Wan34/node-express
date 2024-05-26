var express = require('express');
var cors = require('cors');
var app = express();

const userRouter = require('./routes/user');

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', "GET,DELETE,POST,PUT");
  res.header('Access-Control-Allow-Headers', "Content-Type");
  next();
});

app.use(express.json())
app.use('/api/user', userRouter);

app.listen(process.env.NODE_PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})
