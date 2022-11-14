/**
 * This file will contain the logic for the product resource.
 * Everytime any CRUD request comes for the product, methods defined in this controller file will be executed.
 */



const { product } = require("../models");
const db = require("../models");
const Product = db.product;

/**
 * Create and save a  new product
 */
exports.create = (req, res) => {

    /**
     * Validation of the request body
     */
    console.log("hello");
    
    if(!req.body.name) {
        res.status(400).send ({
            message: "Name of the product can't be empty !"
        })
        return;
    }

    if(!req.body.cost) {
        res.status(400).send ({
            message: "Cost of the product can't be empty !"
        })
        return;
    }

    const product = {
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost
    }

    Product.create(product)
    .then(product => {
      console.log(`product name: [ ${product.name}] got inserted in db `);
      res.status(200).send(product);
    })
    .catch(err => {
      console.log(`Issue in inserting product name: [ ${product.name}].  Error Message: ${err.message}`)
      res.status(500).send ({
        message: "Some internal error while storing product"
      })
    })
}

/** 
 * Get list of all products
*/
// products/
//products/nikeshoes

exports.findAll = (req, res) => {

  let productName = req.query.name;
  let promise;

  if(productName) {
      promise = Product.findAll({
          where: {
          name: productName
          }
      })
  
  }else{
      promise = Product.findAll();
  }

  promise
  .then(products => {
      res.status(200).send(products);
  })
  .catch(err => {
      res.status(500).send({
          message: "Some internal error while fetching all the products"
      })
  })
}

/**
 * Get a product based on product id
 */

exports.findOne = (req, res) => {
    const productId = req.params.id; 

    Product.findByPk(productId)
    .then(product => {

     
        if(!product) {
            return res.status(404).json({
                message: 'product not found'
            })
        }
        res.status(200).send(product);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal error while fetching the product based on id"
        })
    })
}

exports.update = (req, res) => {
    if(!req.body.name) {
        res.status(400).send ({
            message: "Name of the product can't be empty !"
        })
    }
        if(!req.body.cost) {
            res.status(400).send ({
                message: "cost of the product can't be empty !"
            })
        }
    const product = {
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost
    }
    const productId = req.params.id
    Product.update(product, {
        where: {id: productId}
    })
    .then(updateproduct => {
        Product.findByPk(productId) .then(product => {
        res.status(200).send(product)
    })
})
.catch(err => {
    res.status(500).send({
        message: "Upadation happend successfully , but some internal error in fetching details "
    })
})
.catch(err => {
    res.status(500).send({
        message: "Some internal error while updating details"
    })
})
}

/**
 * Delete an existing product based on product id
*/
exports.delete = (req, res) => {
    const productId = req.params.id;

    Product.destroy({
        where: {
            id: productId
        }
    })
    .then(result => {
        res.status(200).send({
            message: "Successfully deleted the product"
        })
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal error while deleting the product"
        })
    })
}
