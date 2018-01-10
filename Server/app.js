import express from 'express';
import path from 'path';
import fs from 'fs';

const port = 8000;
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));

app.get('/api/products.json', function(req, res){
  fs.readFile('./Client/Assets/data/products.json', 'utf8', function(err, data){
    if(err){
      res.json({
        err: err
      });
    }else{
      var jsonData = JSON.parse(data);
      var limit = req.query.limit || 10;
      var offset = req.query.offset || 0;
      var gender = req.query.gender || null;
      var sort = req.query.sort || null;
      if(gender){
        jsonData.data = jsonData.data.filter((product) => {
          if(gender == product.gender){
            return product;
          }
        });
      }
      if(sort){
        jsonData.data = jsonData.data.sort((a, b) => {
          let priceA = parseFloat(a.price);
          let priceB = parseFloat(b.price);
          let ratingA = parseInt(a.rating);
          let ratingB = parseInt(b.rating);
          if(sort == 'plth'){
            return priceA - priceB;
          }else if(sort == 'phtl'){
            return priceB - priceA;
          }else if(sort == 'rlth'){
            return ratingA - ratingB;
          }else if(sort == 'rhtl'){
            return ratingB - ratingA;
          }
        });
      }
      var resData = jsonData.data.splice(offset, limit);
      setTimeout(() => {
        res.json(resData); 
      }, 1000);
    }
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'app.html'));
});

var server = app.listen(port, () => {
  console.log('Server running on port ' + port);
});