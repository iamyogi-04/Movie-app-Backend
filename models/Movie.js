const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({


    overview:{
        type: String,
        required: true
    },
    poster_path:{
        type: String,
        required: true
    },

    release_date:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userdb",
    },
})

const moviedb = mongoose.model("moviedb",MovieSchema);

module.exports = moviedb;
    