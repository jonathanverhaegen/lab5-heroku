const Message = require("../../../models/messages");

function store(req, res){

    let username = req.query.user;
    let message = req.query.text;

    if(username == null || message == null){
        username = "pikachu";
        message = "nodejs isn’t hard, or is it?"

        let m = new Message();
        m.user = username;
        m.text = message;

        m.save((err, doc) => {
            if(!err){
                res.json({
                    "status": "succes",
                    "data":{
                    "message": doc
                    }
             })
            }
     });

    }else{

        let m = new Message();
        m.user = username;
        m.text = message;

        m.save((err, doc) => {
            if(!err){
                res.json({
                    "status": "succes",
                    "data":{
                        "message": doc
                 }
             })
            }
        });

    }
    
}



function getOne(req,res){
    let id = req.params.id;

    Message.findById(id, (err, doc)=>{
        if(!err){
            res.json({
                "status": "succes",
                "data":{
                    "message": doc
                }
            })
        }else{
            res.json({
                "status": "succes",
                "message": `Couldn't find a message by ${id}`
            })
        }
    })

};


function getAll(req,res){

    let user = req.query.user;

    

    if(user != null){
        Message.find({"user": user},(err,doc)=>{
            if(!err){
                res.json({
                    "status": "succes",
                    "data": {
                        "message": doc
                    }
                });
            }
        });
    }else{

        Message.find((err,doc)=>{
            if(!err){
                res.json({
                    "status": "succes",
                    "data": {
                        "message": doc
                    }
                });
            }
        });
        
    }

    
    
}


function update(req,res){
    let id = req.params.id;

    let change = req.query;

    console.log(change);

    Message.findByIdAndUpdate(id,change,(err,doc)=>{
        if(!err){
            res.json({
                "status": "succes",
                "data":{
                    "message": doc
                }
            })
        }
    })
}

function deleteOne(req,res){
    let id = req.params.id;
    
    Message.deleteOne({_id: id},(err,doc)=>{
        if(!err){
            res.json({
                "status": "succes",
                "message": "the message was removed"
            })
        }
    })
}


module.exports.store = store;
module.exports.getOne = getOne;
module.exports.getAll = getAll;
module.exports.update = update;
module.exports.deleteOne = deleteOne;