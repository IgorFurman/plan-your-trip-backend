const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: '*'
}));

const hotelsRouter = require('./api/hotels');
const restaurantsRouter = require('./api/restaurants');
const attractionsRouter = require('./api/attractions');
const detailsRouter = require('./api/details');

app.use('/api/place/hotels', hotelsRouter);
app.use('/api/place/restaurants', restaurantsRouter);
app.use('/api/place/attractions', attractionsRouter);
app.use('/api/place/details', detailsRouter);

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE', 'Access-Control-Allow-Headers': 'Content-Type' });
    res.end();
    return;
  }

  res.status(404).send('Not Found');
});


exports.app = app;
