var express = require('express');
const productsController = require('../controllers/products_controller');
const Product = require('../models/products');
var router = express.Router();

/* GET home page. */
router.get('/', productsController.getAllProduct);
router.get('/add',productsController.getAddProduct);
router.post('/add',productsController.addProduct);
router.get('/remove/:id',(req,res)=>{
  // console.log(req.params.id);
  Product.getAll().Product.remove(req.params['id']);
  res.redirect('/');
});

module.exports = router;
