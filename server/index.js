const express = require ('express');
const app = express();
const port = 3000;

//app.use on the propertyID url
app.use(':propertyID', express.static(__dirname + '/../dist'));

//send get request to photos service

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});