const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const initRoute = require("./routers/main.router");
const connectDatabase = require("./configs/connectDatabase");
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoute(app);
connectDatabase();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server start in ${port}`));
