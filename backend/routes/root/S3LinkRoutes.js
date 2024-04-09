const express = require("express");
const router = express.Router();
const util = require("util");
const fs = require("fs");
const unlinkFile = util.promisify(fs.unlink);
const multer = require("multer");
const {
  uploadAndGetLink,
  S3DeleteLink,
} = require("../../controllers/root/S3Controller");

var imageUpload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/image");
  },
  filename: function (req, file, cb) {
    const str = file.originalname;
    const newstr = str;
    cb(null, Math.random() + newstr);
  },
});
var fileUpload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/files");
  },
  filename: function (req, file, cb) {
    const str = file.originalname;
    const newstr = str;
    cb(null, Math.random() + newstr);
  },
});
var upload = multer({ storage: imageUpload });
var uploadFiles = multer({ storage: fileUpload });
router.route("/delete").delete(S3DeleteLink);
router.use(function (err, req, res, next) {
  console.log("This is the invalid field ->", err.field);
  next(err);
});

router.post("/image", upload.single("image"), async (req, res, next) => {
  const file = req.file;
  console.log(file);
  const folder = req.query.folder;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  const result = await uploadAndGetLink(file, folder);
  await unlinkFile(file.path);
  console.log(result);
  res.json({
    link: result.Location,
  });
});
router.post("/file", uploadFiles.single("file"), async (req, res, next) => {
  const file = req.file;
  const folder = req.folder;

  if (!file || !folder) {
    const error = new Error("Upload file error");
    error.httpStatusCode = 400;
    return next(error);
  }
  const result = await uploadAndGetLink(file, folder);
  await unlinkFile(file.path);

  res.json({
    link: result.Location,
  });
});

module.exports = router;
