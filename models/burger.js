module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	allowNull: false,},
    date: {type: DataTypes.DATE},
    image: {type: DataTypes.TEXT}
   }, {
    timestamps:false
  });
  return Burger;
};
