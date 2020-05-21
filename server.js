var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var apiRouter = require('./routes/apirouter')
var app = express()



app.set('views', path.join(__dirname+'/views'))
app.set('view engine', 'ejs')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', apiRouter)
// app.use('/', (req, res)=>{

// })

// get 방식으로 라우팅 처리
// app.get('/', function(request,response){
//  console.log(request.body)
//  response.render('index')
// })
// listen(포트 , url , backlog , callback)
app.listen(8080, function(){
    console.log("Server is starting at http://localhost:8080")
})