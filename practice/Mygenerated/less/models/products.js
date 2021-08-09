var products = [];
module.exports = class Products{
  constructor(name,price){
    this.name = name;
    this.price =price;
  }
  add(){
    products.push(this);
  }

  remove(element){
    products.splice(element,1);
  }
  
  static getAll(){
    return products;
  }
}