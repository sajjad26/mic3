import express from 'express';
import path from 'path';
import fs from 'fs';

const port = 8000;
const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'app.html'));
});

var server = app.listen(port, () => {
  console.log('Server running on port ' + port);
});