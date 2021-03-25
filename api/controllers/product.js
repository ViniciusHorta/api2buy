module.exports = app => {
  const controller = {};
  
  controller.listProducts = (req, res) => {
    let https = require('https');

    https.get(`https://embed.2b.uy/data/${req.query.productLine}/data.json`, (resp) => {
      let data = '';
      
      console.log(req.query.productLine);

      // A d of data has been received.
      resp.on('data', (d) => {
        data += d;
      });

      resp.on('end', () => {
        res.status(200).json(JSON.parse(data).lett_products);
      });
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });


    
  }

  return controller;
}