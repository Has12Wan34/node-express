var express = require('express');
var cors = require('cors');
var app = express();

const userRouter = require('./routes/user');

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));
app.use(express.json())
app.use('/api/user', userRouter);

app.listen(process.env.NODE_PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})
