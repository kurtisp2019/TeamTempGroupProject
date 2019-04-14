/**
 * 
 *      store.js
 * 
 */
module.exports = function (_sequelize, _Sequelize) {

    var StoreItem = _sequelize.define("StoreItem", {
        
        name: {
            type: _Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        description: {
            type: _Sequelize.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        price: {
            type: _Sequelize.FLOAT,
            allowNull: false
        },
        quantity: {
            type: _Sequelize.INTEGER,
            allowNull: false
        }//,
        // image: {
        //     type: _Sequelize.IMAGE,
        //     allowNull: true
        // }
    });
    return StoreItem;
}

