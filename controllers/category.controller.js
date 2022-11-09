/**
 * This file contains the controller logic for the category
 * resource.
 * Everytime a CRUD request come for the category, methods define in this controller file wiil be executed.
 */



const db = require("../models");
const Category = db.category;

/**
 * POST:Create and save a new category
 */

 exports.create = (req, res) => {
    /**
     * Validation of request body
     */

    if(!req.body.name) {
        res.status(400).send({
            message: "Name of the category can't be empty !"
        })
        return;
    }

    /**
     * Creation of the category object to be stored in the db.
     */
    //{
       //name:"footwear",
       //description: "Footwear items"
    
    // }

    const category = {
        name: req.body.name,
        description: req.body.description
    };

    Category.create(category).then(category => {
        console.log(`category name: [$category.name] got inserted`)
        res.status(201).send(category);

    })
    .catch(err=> {
        console.log(`Issue in inserting category name: [${category}]`)
        console.log(`Error Message : ${err.message}`)
        res.status(500).send({
            message:"Some internal error while storing the category"
        })

        })
    };

    /**
     * Get a list of all the categories
     */
  
    exports.findAll = (req, res) => {

        let categoryName = req.body.name;
        let promise;
        if(categoryName) {
            promise = Category.findAll({
                where: {
                    name: categoryName
                }
            });         
        }else{
            promise = Category.findAll();
        }
        promise
        .then(categories=> {
          res.status(200).send(categories);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal error while fetching the categories"

        })
    })
}

/**
 * Get a category based on the category id
 */

exports.findOne = (req, res) => {
    const categoryId = req.params.id; //1

 Category.findByPk(categoryId)
 .then(category => {
res.status(200).send(category);
 })
.catch(err => {
    res.status(500).send({
        message: "Some internal error while fetching the category"
    }) 
})
}

/**
 * Update the existing category
 */
exports.update = (req, res) => {

    const category = {
        name: req.body.name,
        description: req.body.description
    };
    const categoryId = req.params.id

    Category.update(category, {
        where: {id: categoryId}
    })
    .then(updatecategory =>  {
        //where the updation happened successfully.
        //You need to send the updated row to the table.
        //But while fetching that row and sending it to user
        //there can be a error.
        Category.findByPk(categoryId)
        .then(category => {
            res.status(200).send(category);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some internal error while fetching the category by id"
            })
        })
    })
    .catch(err => {
        //wher the updation task failed.
        res.status(500).send({
            message: "Some internal error while fetching the category by id"
        })
    })
}     


        

        
    


