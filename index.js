const express = require('express')
const app = express()
const port = 8000
const{user} = require("./models/User");

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://soyeon:1234@boilerplate.vgfpd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('sohqppyeon!')
})
app.post('/register',(req,res) => {
  //회원가입할 때 필요한 정보들을 client
  
   const user = new User(req.body)
   user.save((err,userInfo) => {
     if(err) return res.json({success : false, err})
     return res.status(200).json ({
       success: true
     })
   })
 })
 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})