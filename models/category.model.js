/**
 * This file will be used to represent the category schema
 * 
 * category fields:
 * 1. id
 * 2. name
 * 3. description
 */

//Category -> categories
 module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
    id : {
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
                }
            }, {
                tableName: 'categories'
            });
            return Category;
        }
    
    
            