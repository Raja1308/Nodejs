const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended :false}))

app.get('/add',(req, res)=>{
    res.send('<form method="post" action="/saveform"><input type="text" name="name" placeholder="name"><input type="email" name="email" placeholder="email"><button type="submit">Save</button></form>')
})

app.post('/saveform',(req, res)=>{
 res.send(req.body)
})
app.listen(3000)