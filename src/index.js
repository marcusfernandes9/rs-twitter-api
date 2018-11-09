const express = require("express");
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://goweek:goweek123@ds157493.mlab.com:57493/goweek-marcus',
    {
            useNewUrlParser: true
    }
);

app.use(express.json());//"forçar o express usar JSON"
app.use(require('./routes'));

app.listen(3000, () => {
    console.log(':) Server started on port 3000');
});