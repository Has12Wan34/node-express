var express = require('express');
const path = require('path');
var cors = require('cors');
var app = express();

const userRouter = require('./routes/user');
const travelRouter = require('./routes/travel');

app.use(cors());
app.use(express.json());
// ตั้งค่า middleware เพื่อให้ Express ใช้งาน static files ในโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/user', userRouter);
app.use('/api/travel', travelRouter);

app.get('/notfound', (req, res, next) => {
  let options = {
      root: __dirname,
      headers: {
          'Content-Type': 'text/html; charset=UTF-8'
      }
  };
  res.sendFile('/notfound.html', options, function (err) {
      if (err) {
          next(err);
      } else {
          console.log('Sent: signup.html');
      }
  });
});

//*****การใช้ Middleware เพื่อจัดการข้อผิดพลาด ===>
  //code*** if (เงื่อนไข) {
  //   throw new Error("err.message")
  // }
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  // res.status(404).sendFile(path.join(__dirname, 'public', 'notfound.html'));
});

app.listen(process.env.NODE_PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})
