const express = require('express')
const router = express.Router()
const Feeds = require('./feedsformat')
const mongoose = require('mongoose')

router.get('/', async (req,res) => {
    try{
           const feeds = await Feeds.find()   // find is a method in mongodb to get data
           res.json(feeds)   // since response will be shown in the form of json
    }catch(err){
        console.log(err);
        res.send('Error ' + err)
    }
})

/* router.get('/:id', async(req,res) => {   //getting a particular data from database using id
    try{
           const news = await News.findById(req.params.id) 
           res.json(news)
    }catch(err){
        res.send('Error ' + err)
        console.log(err);
    }
}) */


router.post('/', async(req,res) => {  
    // router to post data
   // console.log
    const feedslist = new Feeds({
        _id: new mongoose.Types.ObjectId(),
        title:req.body["title"],
       url: req.body["url"],
      views: req.body["views"],
       likes: req.body["likes"]  
    })
    //console.log(newslist);

    try{
        const feeds1 =  await feedslist.save() 
        res.json(feeds1)
        
    }catch(err){
        res.send('Error ' + err)
        console.log(err);
    }
})

 router.patch('/:id',async(req,res)=> {   // router to patcha particular data using id
    try{
        const feeds = await Feeds.findById(req.params.id) 
       
        feeds.likes =req.body.likes;
        
        const feedslist = await feeds.save() 
        res.json(feedslist)  
    }catch(err){
        res.send('Error' + err)
        console.log(err);
    }
    

})

router.delete('/:id',async(req,res)=> {  // creating delete router using a particular id 
    try{
        const feeds = await Feeds.findById(req.params.id) 
       // news.sub = req.body.sub;
        
        const feedslist = await feeds.delete()
        res.json(feedslist)   
    }catch(err){
        res.send('Error' + err)
        console.log(err);
    }
});

module.exports = router



