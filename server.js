require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Routes = require("./route");
const { upload } = require("./upload");
const PORT = process.env.PORT || 1110;

//middlewares
// app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("short"));

//Static Route
app.use("/", express.static("uploads"));
app.use("/", upload.any("file"), Routes);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${PORT}/`);
});
