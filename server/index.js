const axios = require('axios');
const express = require ('express');
const app = express();
const port = 3000;


//app.use on the propertyID url
app.use('/:propertyID', express.static(__dirname + '/../public'));

//send get request to title service

//send get request to photos service
app.get('/photos/:propertyID', (req, res) => {
  axios.get(`http://localhost:3002/photos/${req.params.propertyID}`)
  .then((photos) => {
    res.send(photos.data);
  })
  .catch((err) => {
    res.send(err);
  })
});

//send get request to details service
app.get('/details/:propertyID', (req, res) => {
  axios.get(`http://localhost:3003/details/${req.params.propertyID}`)
  .then((details) => {
    res.send(details.data);
  })
  .catch((err) => {
    res.send(err);
  })
});

//send get request to checkout/calendar component
app.get('/checkoutInformation/:productID', (req, res) => {
  axios.get(`http://localhost:3004/checkoutInformation/${req.params.productID}`)
  .then((info) => {
    res.send(info.data);
  })
  .catch((err) => {
    res.send(err);
  })
})

//send get request to reviews service - 2 requests
app.get('/:listingID/reviews', (req, res) => {
  axios.get(`http://localhost:3006/${req.params.listingID}/reviews`)
  .then((reviews) => {
    res.send(reviews.data);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.get('/:listingID/averageReviewsRating', (req, res) => {
  axios.get(`http://localhost:3006/${req.params.listingID}/averageReviewsRating`)
  .then((avgReviews) => {
    res.send(avgReviews.data);
  })
  .catch((err) => {
    res.send(err);
  })
});

app.listen(port, () => {
  console.log(`Proxy server running on http://localhost:${port}`);
});