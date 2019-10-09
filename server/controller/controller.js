const Event = require('./../model/model.js')

let eventController = {
    create: (req,res) => {
        console.log("Hit")
        console.log(req.body, 'this is the body!!')
        Event.find({created: req.body.created, creat: req.body.creat}, (err,data) => {
            // console.log('this is data ', data)
            if(err){return res.send('cant rewrite your old schedule from here')}
            if(data.length){
                Event.findOneAndUpdate({created: req.body.created, creat: req.body.creat},{activities: req.body.activities},(err, result) => {
                    if(err){res.status(404)}
                    else{res.send(result)}
                })
            }
            else{
                let today = Event({ 
                    'activities' : req.body.activities,
                    'created' : req.body.created,
                    'creat' : req.body.creat,
                    'identifier' : req.body.identifier
                }); 
                Event.create(today,function(err,today){
                if (err) throw err;
                console.log('today saved');
                res.send(today)
                })
            }
        })
    },
    getData: (req,res) => {
        Event.find({}, (err, data) => {
            res.send(data)
        });
    },
    patch: (req,res) => {
        // console.log('this is req,', req.body)
        console.log('this is reqparam,', req.params)
        Event.findOneAndUpdate({identifier: req.params.identifier},{activities: req.body.activities}, (err, result) => {
            if(err){res.status(404)}
            else{res.send(result)}
        })
    },
    delete: (req, res) => {
        Event.deleteOne({ identifier : req.params.identifier }, (err, data) => {
            if(err) res.status(404)
            else{
                res.send(data)
            }
        });
    },
}

module.exports = eventController