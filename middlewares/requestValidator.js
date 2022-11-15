
const db = require("../models");
const Category = db.category;

const validateCategoryRequest = (req, res, next) => {
    if(!req.body.name) {
        res.status(400).send ({
            message: "Name of the category can't be empty !"
        })
    }
    next();
}
    const validateProductRequest = (req, res, next) => {
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
    if(!req.body.categoryId) {
     
        Category.findByPk(req.body.categoryId)
        .then(category =>{
            if(!category) {
                res.status(400).send({
                    meassage: "category id passed is not available"
                })
                return;
            }
            next();
            })
            .catch(err => {
             res.status(500).send({
                message: "ome intenal error while fetching product details"
             })
            })
        }else{
            res.status(400).send({
                message: "category id was not passed"
            })
            return;
        }
    }
module.exports = {
    validateCategoryRequest: validateCategoryRequest,
    validateProductRequest : validateProductRequest
}


