const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles') // access to use file article.js
const app = express()
mongoose.connect('mongodb://localhost/blog', { 
    useNewUrlParser: true, useUnifiedTopology:true
})
app.set('view engine','ejs')

app.use(express.urlencoded({extended: false}))

//setting up route
app.get('/', (req,res)=>{
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description:'Test Description',
    },
    {
        title: 'Test Article2',
        createdAt: new Date(),
        description:'Test Description',
    }
]
    res.render('articles/index',{ articles: articles})
})

app.use('/articles',articleRouter) //to use app router

app.listen(5000) 