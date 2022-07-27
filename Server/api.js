var db = require('./dboperations')
var order =  require('./tableclass')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const { response, request } = require('express')
var app = express()
var router = express.Router()

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())
app.use('./api', router)

router.use((request, response, next)=> {
    console.log('middleware')
    next()
    }
)

router.route('/tableclass').get((request, response)=>{
    db.getTables().then((data) => 
    response.json(data[0]))
})

router.route('/tableclass/:firstname').get((request, response) => {
    db.getOrder(request.params.firstname).then((data) => {
            response.json(data[0]);
    })
})

router.route('/tableclass').post((request, response) => {
    let tableclass = {...request.body}
    db.addRow(order).then(data => {
        response.status(201).json(data)
    })
})

var port = process.env.PORT || 8090
app.listen(port)
console.log('Contact API is running at ' + port)
