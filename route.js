const { upload } = require("./upload");
const Router = require("express").Router();
const fs = require("fs");

// --->UPLOAD SIngle File
Router.post("/upload/single/", (req, res) => {
  res.status(200).json({ path: req.files[0] });
});

// --->UPLOAD Multi FIle
Router.post("/upload/multi", (req, res) => {
  res.status(200).json({ path: req.files });
});

// --->UPDATE SIngle File
Router.put("/update/single", (req, res) => {
  let UpdateFile = req.body.filename;
  fs.unlinkSync(UpdateFile);
  res.status(200).json({ path: req.files[0] });
});

// --->DELETE SIngle File
Router.delete("/delete/single", (req, res) => {
  let DeleteFile = req.body.filename;
  console.log(req.body);
  fs.unlinkSync(DeleteFile);
  res
    .status(200)
    .json({ message: "File Deleted SuccessFully", name: req.body.filename });
});

module.exports = Router;
