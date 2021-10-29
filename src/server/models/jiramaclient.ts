const db= require('mongoose');

const client=db.shema({
    id:{
        type: Number,
        required :true
    },
    nom:{
        type: String,
        required :true
    },
    num:{
        type: String,
        required :true
    },
    prix:{
        type: Number,
        required :true
    }
    
})