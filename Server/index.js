const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello juice wrld!'))

app.post('/create',(rq,res) => {
    // const ADD_QUERY = 'insert into CMS.contact (cols) values (statevalues)'
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))