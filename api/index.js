


import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import multer from "multer"
import mailgun from "mailgun-js"
// import * as ailgun from 'mailgun-js';
// import dotenv from "dotenv"
import * as dotenv from 'dotenv'
dotenv.config();

const mg = ()=>
  mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/api/email', (req, res) => {
  const { email, message } = req.body;
  mg()
    .messages()
    .send(
      {
        from: 'MEYD.IT <vittoriasalim@gmail.com>',
        to: `${email}`,
        subject: 'Job Request Notification',
        html: `${message}`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: 'Error in sending email' });
        } else {
          console.log(body);
          res.send({ message: 'Email sent successfully' });
        }
      }
    );
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  }); 

const upload = multer({storage});

app.post("/api/upload",upload.single("file"),function(req,res){
    const file = req.file;
    return res.status(200).json(file.filename);
});

app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)


app.listen(8800,()=>{
    console.log("Connected!")
})