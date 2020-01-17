const express = require('express');

const router = new express.Router();
require('../db/mongoose');
const Right = require('../models/right');

router.post('/coco', (req, res) => {
    const right = new Right(req.body);
    right.save().then(() => {
      res.send(right);
    }).catch((error) => {
      res.status(500).send(error);
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
