var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/


 
/*
 * GET studentlist.
 */
router.get('/studentlist', function(req, res) {
    var db = req.db;
    db.collection('studentcollection').find().toArray(function (err, items) {
        res.json(items);
    });
});


/*

 * POST to addstudent.

 */

router.post('/addstudent', function(req, res) {

    var db = req.db;

    db.collection('studentcollection').insert(req.body, function(err, result){

        res.send(

            (err === null) ? { msg: '' } : { msg: err }

        );

    });

});


/*

 * POST to updatestudent.

 */

router.post('/updatestudent', function(req, res) {

    var db = req.db;

    var studentToUpdate=req.params.id;

    db.collection('studentcollection').update({id:studentToUpdate},req.body, function(err, result){

        res.send(

            (err === null) ? { msg: '' } : { msg: err }

        );

    });

})









module.exports = router;
