module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define("Products", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        decription: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Products;
}