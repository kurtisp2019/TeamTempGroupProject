/**
 * 
 *      user.js
 * 
 */

module.exports = function (_sequelize, _Sequelize) {

    var User = _sequelize.define("User", {

        userName: {
            type: _Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        password: {
            type: _Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        timestamps: false

    });

    User.associate = function (_models) { 

        User.hasMany(_models.ShoppingCart, {
            onDelete: "cascade"
        });
    }

    return User;
}