module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("product", {
      productname: {
        type: Sequelize.STRING
      },
      productid: {
        type: Sequelize.STRING
      },
      availablestatus: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return product;
  };
  