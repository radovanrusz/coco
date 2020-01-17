const express = require('express');

const router = new express.Router();
require('../db/mongoose');
const Right = require('../models/right');

router.post('/coco', (req, res) => {
    Right.collection.insertMany(req.body, function (err, data){
      if (err){
        res.status(500).send(error);
      }
      else {
        console.log('Inserted data:'+JSON.stringify( data ));
        res.status(200).send(data);
      }
    });
    
  });

  


router.get('/coco', (req, res) => {
    console.log(req.query);
    const params = {};
    Right.find(params).limit(500).then((right) => {
        res.send(right);
  }).catch((error) => {
    res.status(500).send(error);
  });
});

module.exports = router;
