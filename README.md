## สรุปเนื้อหา
- `Fundementals`
    - `javaScript` : ภาษาคอมพิวเตอร์ที่ใช้ในการพัฒนาเว็บร่วมกับ HTML สามารถตอบสนองกับผู้ใช้งานหรือแสดงเนื้อหา เป็นภาษาที่ทำงานฝั่งผู้ใช้ (Client Side Script) โดยเว็บเบราว์เซอร์จะทำหน้าที่ประมวลผลคำสั่งที่ถูกเขียนขึ้นมาและตอบสนองต่อผู้ใช้ได้ทันที
    - `Node.js` : เป็นชุดเครื่องมือสามารถนำ JavaScript ไปรันใน Windows , Mac , Linux ได้ โดยไม่ขึ้นกับ Web Browser ส่งผลให้สามารถรันโค้ด JavaScript ด้วย Nodejs ได้เลย โดยไม่จำเป็นต้องสร้างเป็นเว็บเพจแล้วนำเว็บเพจไปรันใน Web Browser นั่นเอง (ไม่ง้อ Web Browser) เพื่อทำงานฝั่ง Server เป็นหลัก ผู้พัฒนาเว็บสามารถควบคุมการทำงานของเว็บทั้งฝั่ง Frontend และ Backend ได้โดยใช้ JavaScript เพียงภาษาเดียว
- `Module บน Node.js`
    - เป็นแค่เพียงไฟล์ของโปรแกรม เมื่อคุณสร้างไฟล์ของโปรแกรมใหม่ขึ้นมาบน Node.js นั่นหมายความว่าคุณสร้างโมดูลโดยปริยาย โมดูลช่วยให้เราสามารถแบ่งโค้ดออกเป็นส่วน
    - โดยใช้ฟังก์ชัน `require` ในการนำเข้าโมดูลเข้ามาใช้งานในโปรแกรม และส่งออกค่าจากโมดูลไปภายนอกด้วยการกำหนดค่าผ่านออบเจ็ค `module.exports`
    - สามารถใช้ได้บน Node.js เช่น ES modules ซึ่งเป็นระบบโมดูลของ ECMAScript 2015 หรือ ES6 ที่ใช้คำสั่ง `import` ในการนำเข้าโมดูลและใช้คำสั่ง `export` ในการส่งออกโมดูลแทน
- `NPM (Node Package Manager)` : โปรแกรมสำหรับจัดการแพ็กเกจของภาษา JavaScript และเป็นตัวจัดการแพ็กเกจที่มาพร้อมกับตัวติดตั้งของ Node.js มันเป็นเครื่องมือที่ช่วยอำนวยความสะดวกและแนะนำให้ใช้โดย Node.js สำหรับใช้จัดการกับแพ็กเกจและไลบรารีของภาษา JavaScript ที่คุณต้องการใช้งานสำหรับการเขียนโปรแกรมบน Node.js
- `package.json` : 
    - ไฟล์ที่ใช้สำหรับอธิบายรายละเอียดเกี่ยวกับโปรเจ็ค มันใช้เก็บรายชื่อของแพ็กเกจและเวอร์ชันที่ใช้งานในโปรเจ็ค ซึ่งนี่เป็นไฟล์ที่ npm จะใช้ในการค้นหาและติดตั้งแพ็กเกจ และใช้ในการเผยแพร่แพ็กเกจขึ้นสู่ npm registry คำสั่ง `npm init`
    - dependencies ใช้สำหรับเก็บรายชื่อของแพ็กเกจหลักที่ใช้ในโปรเจ็ค ส่วน devDependencies เก็บรายชื่อของแพ็กที่ใช้ในระหว่างการพัฒนาโปรแกรมเท่านั้น นั่นหมายความว่าโค้ดส่วนนี้จะไม่ถูกเผยแพร่ไปกับ Buddle ไฟล์เมื่อคุณเผยแพร่โปรเจ็คขึ้นไปยัง Production
- `express` : นี่เป็นโปรแกรมสำหรับสร้างเว็บเซิร์ฟเวอร์อย่างง่ายโดยการใช้งานแพ็กเกจ Express.js หรือกล่าวอีกนัยหนึ่งเราใช้มันสำหรับสร้างเว็บไซต์ที่รันบน Node.js
- `Module มาตรฐานบน Node.js` :
    - fs : เป็นโมดูลสำหรับทำงานกับไฟล์ มันประกอบไปด้วยฟังชันสำหรับทำงานกับไฟล์ระบบในรูปแบบต่างๆ เช่น การอ่านไฟล์ การเขียนไฟล์ การลบไฟล์ หรือการจัดการสิทธิบนไฟล์ 
    ```bash
    const fs = require('fs');
    const content = 'Hello World!';
    fs.writeFile('./myfile.txt', content, (err) => {
            if (err) {
                console.error(err)
                return
            }
            console.log('File written successfully.');
        });
    ```
    - path : ฟังก์ชันสำหรับทำงานและจัดการกับพาธ ยกตัวอย่างเช่น รับเอาชื่อไฟล์จากพาธ หรือรับเอาโฟล์เดอร์จากพาธ
    ```bash
        const path = require('path');
        path.basename('/test/myfile.txt'); // myfile
        path.dirname('/test/myfile.txt'); // test
    ```
    - Events : เป็นโมดูลหลักที่ Node.js ใช้เป็นตัวรับและส่ง Event ในระบบของมัน โมดูลนี้ประกอบไปด้วยคลาส EventEmitter ที่ใช้สำหรับส่งและรับ Event บน Node.js แนวคิดนี้เหมือนกับการใช้งาน Event บนเว็บเบราว์เซอร์โดยที่ผู้ใช้งานจะเป็นผู้ส่ง Event โดยการมีปฏิสัมพันธ์กับหน้าเว็บเพจ เช่น การคลิกเมาส์ การกดคีย์บอร์ด การส่งฟอร์ม เป็นต้น
    ```bash
        const EventEmitter = require('events');
        const eventEmitter = new EventEmitter();

        eventEmitter.on('start', () => {
            console.log('Handing start event');
        });

        eventEmitter.emit('start');
    ```
    - http : สามารถใช้สำหรับสร้าง HTTP เซิร์ฟเวอร์ นอกจากนี้ยังมีโมดูลที่คล้ายกันนั่นคือโมดูล https สำหรับสร้าง HTTPS เว็บเซิร์ฟเวอร์ 
    ```bash
        const http = require('http');
        const port = 3000;
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Hello, World!</h1>');
        })
        server.listen(port, () => {
            console.log(`Server running at port ${port}`);
        });
    ```
- `Lodash` : เป็นไลบรารี่ของภาษา JavaScript ที่ประกอบไปด้วยฟังก์ชันอำนวยความสะดวกในการทำงานกับอาเรย์ ตัวเลข ออบเจ็ค และ String และอื่นๆ ที่คุณสามารถนำมาใช้โดยที่ไม่ต้องเขียนขึ้นมาเอง คำสั่ง `npm install lodash`
- `Express.js บน Node.js` :
    - เป็นเว็บเฟรมเวิร์คจาก NPM ที่ใช้สำหรับพัฒนาเว็บแอพพลิเคชันหรือเว็บไซต์บน Node.js ที่ทำงานที่ฝั่งของ Backend ตัวของเฟรมเวิร์คนั้นถูกพัฒนามาจากโมดูล http ซึ่งเป็นโมดูลของ Node.js เอง นั่นหมายความว่าใช้เพียงแค่ Node.js อย่างเดียวคุณก็สามารถทำทุกอย่างเหมือนกับ Express ได้ แต่เราใช้มันเพื่อทำให้การพัฒนาเว็บแอพพลิเคชันบน Node.js ทำได้ง่ายขึ้น และ Express.js มีคุณสมบัติที่โดดเด่นคือ

        - การจัดการ Routing ที่ง่าย
        - ฟังก์ชันช่วยสำหรับ HTTP
        - สนับสนุน Template engines สำหรับสร้าง View
        - ทำงานได้รวดเร็วและมีประสิทธิภาพ
        - สนับสนุน Middleware
    - `npm install body-parser` : ทำให้หน้าที่อ่านข้อมูลที่ส่งแบบ POST และเก็บในตัวแปรที่เราสามารถนำมาใช้งานได้ทันที ถ้าหากไม่ใช้แพ็กเกจนี้ เราจะต้องเขียนฟังก์ชันเพื่ออ่านและแปลงค่าจากคำร้องขอด้วยตัวเอง
- `การรับค่าผ่าน Command line อาร์กิวเมนต์ บน Node.js`
    - code :
    ```bash
        console.log(process.argv)
    ```
    - Command line
    ```bash
        node server.js hello //คำสั่ง
        [
            'C:\\Program Files\\nodejs\\node.exe',
            'D:\\node-express\\Class-1\\server.js',
            'hello'
        ]
    ```