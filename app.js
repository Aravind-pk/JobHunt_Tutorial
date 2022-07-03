const express = require('express')
const morgan = require('morgan')

const app = express()


app.set('view engine', 'ejs');
app.use(morgan("tiny"))


app.get('/', (req,res) =>{
    res.send('<h1>hi</h1>');
})

app.get('/hello', (req,res) =>{
    res.send('hello000');
})

// not found
app.use((req,res) =>{
    res.send('Ooops 404 not found');
})





app.listen(3000)
console.log('listinig @port 3000');