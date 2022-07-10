const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended :false}))

app.get('/add-product',(req, res)=>{
    res.send('<form method="post" action="/saveform"><input type="text" name="name" placeholder="name"><input type="email" name="Email" placeholder="email"><input type="text" name="Size" placeholder="Size"><button type="submit">Save</button></form>')
})

app.post('/saveform',(req, res)=>{

   console.log(req.body); 
//  res.send(req.body)
})
app.listen(2000)