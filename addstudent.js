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
 