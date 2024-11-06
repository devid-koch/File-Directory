const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const folderRoutes = require('./routes/routes');
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Alternatively, configure CORS to allow specific domains
// app.use(cors({
//   origin: 'http://your-frontend-domain.com'  // replace with your frontend's domain
// }));

app.use('/api', folderRoutes);

module.exports = app;
