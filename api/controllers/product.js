module.exports = app => {
  let productDB = "";
  const controller = {};
  const https = require('https');

  controller.listProducts = (req, res) => {
    https.get(`https://embed.2b.uy/data/${req.query.productLine}/data.json`, (resp) => {
      let data = '';

      // A d of data has been received.
      resp.on('data', (d) => {
        data += d;
      });

      resp.on('end', () => {
        productDB = JSON.parse(data);
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });


    res.status(200).json(productDB.lett_products);
  }

  return controller;
}