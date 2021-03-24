
module.exports = app => {
    const lettServer = {};
    let respData = '';
    const https = require('https');
    lettServer.listProducts = (req, res) => {return `olá`}

    // lettServer.listProducts = () => {
    //     console.log('call listProducts')
    //     const req = https.get('https://embed.2b.uy/data/seara/data.json', (resp) => {
    //         console.log('statusCode: ${res.statusCode}')

    //         // A d of data has been received.
    //         resp.on('data', (d) => {
    //             respData += d;
    //         });
    //     });

    //     req.on("error", (err) => {
    //         console.log("Error: " + err.message);
    //     });

    //     req.write(data);
    //     req.end()

    //     return respData.lett_products;
    // }

    return lettServer
}