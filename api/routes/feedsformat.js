const mongoose = require('mongoose');

const feeds_schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    title:{
        type: String,
        required: true,
    },
      url: {
        type: String,
        required : true,
    },
    views:{
        type: String,
        required : true,
    },
    likes:{
        type: String,
        required : true,
    }
}
);
 

module.exports = mongoose.model('feedsformat',feeds_schema); 
// exporting the schematype of news
//feeds_schema.set('validateBeforeSave',false)