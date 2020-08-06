var pastorder=require('../models/pastorder_model');
var express = require('express');
var router = express.Router();


router.get("/:o_id", function(req,res,next) {
    console.log(req.params.id);
      pastorder.getPastOrderById(req.params.o_id,function(err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    
  });

  module.exports=router;