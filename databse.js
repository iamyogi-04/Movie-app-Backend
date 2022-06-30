const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://yogesh:yogesh@cluster0.spkags6.mongodb.net/?retryWrites=true&w=majority', ()=> {
    console.log('mongoose connected')
})