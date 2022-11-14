/**
 * This file will be used to represent the category schema
 * 
 * Category fields:
 * 1. id
 * 2. name
 * 3. description
 * 4. cost
*/

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING
        },
        cost: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, 
    {
        tableName: 'products'
    });
    return Product;
}