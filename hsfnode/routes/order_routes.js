var orderdetails=require("../models/order_model");
var express=require('express');
var router=express.Router();
router.post('/',function(req,res,next){
    orderdetails.addOrderDetails(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


router.get("/", function(req, res, next) {
    
  orderdetails.getAllOrders(function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });

});

// router.get("/:id?", function(req, res, next) {
//     if (req.params.id) {
//       orderdetails.getUserByid(req.params.id,function(err, rows) {
//         if (err) {
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       });
//     } else {
//       orderdetails.getAllOrders(function(err, rows) {
//         if (err) {
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       });
//     }
//   });


module.exports=router;