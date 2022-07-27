const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var config = require("./dbconfig");
const sql = require('mssql');
const app = express()
const port = 4000

app.use(cors())
app.use(bodyParser.json())

//Establish a Connection................
sql.connect(config, err => { 
    if(err){
        throw err ;
    }
    console.log("Connection Successful !");

        
});

//Basic Structure for APIs
app.get('/',(req,res) => {
    new sql.Request().query('select * from dbo.contact', (err, result) => {
        //handle err
        if(err) console.log(err)

        res.send(result);
    })
})

app.post('/create',(req,res) => {
    const INSERT_QUERY = 'Insert into dbo.contact (FirstName,Email,ContactNo) values(${req.body.firstName},${req.body.email},${req.body.mobileNo});'
    new sql.query(INSERT_QUERY, (err, result) => {
        //handle err
        if(err) console.log(err)

        res.send(result);
    })

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
