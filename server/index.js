const express = require("express");
const app = express();
require('dotenv').config()

const port = process.env.PORT || 3002

const db = require('./models');

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
    
