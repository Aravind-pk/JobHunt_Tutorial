const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const Job = require('./models/job')

//server setup  
app.set('view engine', 'ejs');
app.use(morgan("tiny"))
app.use(express.urlencoded({extended:true}))


//db setup
const DB_URL = 'mongodb://mongo:eqLlzsKCippxVaIhB3Tu@containers-us-west-69.railway.app:6396'
mongoose.connect(DB_URL)
    .then( result=>{
        app.listen(3000)
        console.log('db connected , server up');
    }).catch( err=>{
        console.log(err)
    })





app.get('/', (req,res) =>{
    Job.find()
        .then(jobs =>{
            res.render('index' ,{title:'All jobs', jobs})
        }).catch(err=>{
            res.send('something went wrong')
        })


})




app.get('/add', (req,res) =>{
    res.render('create', {title:"Create"});
})

app.post('/add', (req,res) =>{
    console.log(req.body)


    const job = new Job(req.body)
    job.save()
        .then(result =>{
            console.log(result);
            res.redirect('/')
        }).catch(err=>{
            console.log(err);
        })
})  




// not found
app.use((req,res) =>{
    res.send('Ooops 404 not found');
})





