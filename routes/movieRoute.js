const { Router } = require('express');
const moviedb = require('../models/Movie');
const router = require('express').Router();
const fetchuser = require('../middleware/fetchuser');

router.get('/movie' , fetchuser, async(req,res)=>{
    try {
        const movie = await moviedb.find()
        res.json(movie);



    } catch (error) {
        console.error(error);
    }
})

router.post('/addmovie', fetchuser, async(req,res)=>{


    try {
         const {overview,poster_path,release_date,title} = req.body;

         const movie = moviedb({
            overview: overview,
            poster_path: poster_path,
            release_date: release_date,
            title: title,
            user: req.user.id
         })
         const data = await movie.save();

         res.json(data);

        
    } catch (error) {
        console.error(error);
        
    }
});


//delete the file
router.delete("/movie/:id", fetchuser, async function (req, res) {
    try {
      let post = await moviedb.findByIdAndDelete(req.params.id);
      res.json({ success: "deleted the file" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Error occurred deleting the post");
    }
  });

module.exports = router;