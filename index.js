require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hello',(req,res) =>{
  res.send('<h4>say heldlo</h4>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})

// dot env chaiye kyuke agar isse kahi deploy kroge to port number or bhibhot kuch vo he transfer hojega jo ke shayad uske device me vo port available na ho isliye .env file chaiye