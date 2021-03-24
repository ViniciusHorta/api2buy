module.exports = app => {
    const controller = app.controllers.product;
  
    app.route('/api/v1/product')
      .get(controller.listProducts);
  }