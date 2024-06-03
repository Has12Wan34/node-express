var express = require('express');
var cors = require('cors');
var app = express();

const userRouter = require('./routes/user');

// app.use(cors())
const issue2options = {
  origin: true,
  methods: ["POST"],
  credentials: true,
  maxAge: 3600
};
app.options("/api/user", cors(issue2options));
app.use(express.json())
app.use('/api/user', userRouter);

app.listen(process.env.NODE_PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})