var express = require('express');
var cors = require('cors');
var app = express();

const userRouter = require('./routes/user');

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())
app.use('/api/user', userRouter);

app.listen(process.env.NODE_PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})
