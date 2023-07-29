const productModel = require("../models/productModel");
const mongoose = require("mongoose");

async function getProducts(req, res) {
  const products = await productModel.find({}).sort({ createdAt: -1 });
  res.status(200).json(products);
}

async function createProduct(req, res) {
  try {
    const product = await productModel.create({ ...req.body });
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json(error.message);
  }
}



async function deleteProduct(req, res){
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(404).json({error: "No such product"});
  }
  
  const product = await productModel.findByIdAndDelete({_id: id});

  if(!product){
    return res.status(404).json({error: "No such product"});
  }
  res.status(200).json(product);
}


async function updateProduct(req, res){
  const {id} = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({error: "No such product"});
  }
  
  const product = await productModel.findByIdAndUpdate(id, {...req.body});

  if(!product){
    return res.status(400).json({error: "No such product"})
  }

  res.status(200).json(product);
}
module.exports = {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct
};
