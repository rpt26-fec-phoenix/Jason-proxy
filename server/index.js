const express = require ('express');
const app = express();
const port = 3000;

//app.use on the propertyID url
app.use(':propertyID', express.static(__dirname + '/../dist'));

//send get request to title service

//send get request to photos service

//send get request to details service

//send get request to calendar component

//send get request to reviews service

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});