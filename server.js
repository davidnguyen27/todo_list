const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server start in ${port}`));
