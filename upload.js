const multer = require("multer");
const slugify = require("slugify");
const { uid } = require("uid");
const fs = require("fs");
const slugOptions = {
  replacement: "-",
  remove: undefined,
  lower: true,
  strict: false,
  locale: "vi",
  trim: true,
};
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const path = `uploads/${file.mimetype}`;
      fs.mkdirSync(path, { recursive: true });
      cb(null, path);
    },
    filename: function (req, file, cb) {
      cb(null, uid() + slugify(file.originalname, slugOptions));
    },
  }),
});
const imgUrlArr = (req) => {
  return req.files.map((image) => {
    return `${req.protocol}://${req.hostname}:${
      req.socket.localPort
    }/${image.path.replace("public\\", "")}`;
  });
};
module.exports = {
  upload,
  imgUrlArr,
};
