const Product = require('../models/products');
exports.getAddProduct = (req,res)=>{
  res.render('add-form',{pTitle:'Add Product',path:'/views/add-product'});
};
exports.addProduct = (req,res)=>{
  const prod = new Product(req.body.name,req.body.price);
  console.log(req.body);
  prod.add();
  res.redirect('/');
};
exports.getAllProduct = (req,res)=>{
  res.render('list',{prods:Product.getAll(),pTitle:'Products List',path:'/'});
};
// exports.removeItem = (req,res)=>{
//   console.log(req.params['id']);
//   Product.getAll().remove(req.params['id']);
//   res.redirect('/');
// }