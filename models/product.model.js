/**
 * This file will be used to represend the Product Schema 
 * 
 * Product Fields:
 * 1. Id
 * 2. Name
 * 3. description
 * 4. cost
 */


module.exports = (Sequelize, sequelize) => {
    const products = sequelize.define("products", {
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncreament : true,
        },
        name : {
            type : Sequelize.STRING,
            allowNull: false,
        },
        description : {
            type : Sequelize.STRING,
        },
        cost : {
            type : Sequelize.INTEGER,
            allowNUll : false,
        }
    } ,
    {
        tableName: 'products'
    })
    return products;

    
}