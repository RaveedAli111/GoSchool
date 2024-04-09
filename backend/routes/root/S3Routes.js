const express = require('express');
const router = express.Router();
const util = require('util');
const fs = require('fs');
const unlinkFile = util.promisify(fs.unlink);
const multer = require('multer');
const {
  uploadFile,
  downloadFile,
  BucketSize,
  DeleteObject,
  downloadFile1,
} = require('../../controllers/root/S3Controller');

var imageUpload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/image');
  },
  filename: function (req, file, cb) {
    const str = file.originalname;
    const newstr = str.replace(/[^a-zA-Z ]/g, '');
    cb(null, Math.random() + newstr);
  },
});
var fileUpload = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/files');
  },
  filename: function (req, file, cb) {
    const str = file.originalname;
    const newstr = str.replace(/[^a-zA-Z ]/g, '');
    cb(null, Math.random() + newstr);
  },
});
var upload = multer({storage: imageUpload});
var uploadFiles = multer({storage: fileUpload});
router.use(function (err, req, res, next) {
  console.log('This is the invalid field ->', err.field);
  next(err);
});
//Routes
router.route('/deletefile').delete(DeleteObject);
router.route('/download').get(downloadFile);
router.route('/bucketsize').get(BucketSize);
router.post('/uploadimage', upload.single('image'), async (req, res, next) => {
  const file = req.file;

  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  const result = await uploadFile(file, req.query.folder);
  await unlinkFile(file.path);
  console.log(result);
  res.send({path: result.Key});
});
router.post(
  '/uploadfile',
  uploadFiles.single('image'),
  async (req, res, next) => {
    const file = req.file;
    const folder = req.query.folder;
    console.log(file, folder);
    if (!file || !folder) {
      const error = new Error('Upload file error');
      error.httpStatusCode = 400;
      return next(error);
    }
    const result = await uploadFile(file, folder);
    await unlinkFile(file.path);
    console.log(result);
    res.send({path: result.Key});
  },
);

module.exports = router;
