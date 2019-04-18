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
        },
        image: {
            type: _Sequelize.STRING,
            allowNull: false,
            defaultValue: "https://www.narda-sts.com/fileadmin/_processed_/csm_no-image-available_EN_3dd8d65e1e.png"
        }
    }, {
        timestamps: false});
    return StoreItem;
}

