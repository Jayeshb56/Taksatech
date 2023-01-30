const express = require('express');
const app = express()




app.post('/next', (req, res) =>{
    var id = req.body.id
    res.status('/next' + id),json() 
})

app.listen(3000,() => console.log('server running on 3000 port'))

