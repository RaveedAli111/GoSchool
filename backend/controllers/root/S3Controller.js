//require("dotenv").config();
const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");

const bucketName = process.env.LINK_BUCKET;
const region = process.env.FyndmeREGION;
const accessKeyId = process.env.FyndmeA_ID;
const secretAccessKey = process.env.FyndmeACCESSKEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});
// uploads a file to s3 and get its link back
exports.uploadAndGetLink = (file, folder) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: `${folder}/${file.filename}`,
    ContentType: file.mimetype,
  };

  return s3.upload(uploadParams).promise();
};
// uploads a file to s3
exports.uploadFile = (file, folder) => {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: `${folder}/${file.filename}`,
    ContentType: file.mimetype,
  };

  return s3.upload(uploadParams).promise();
};
//exports.uploadFile = uploadFile;

// downloads a file
exports.downloadFile1 = async (req, res) => {
  const downloadParams = {
    Key: req.query.filename,
    Bucket: bucketName,
  };

  let file = await s3.getObject(downloadParams).createReadStream();

  res.send(file.Body);
};

exports.downloadFile = async (req, res) => {
  const filename = req.query.filename.split(".com/")[1];

  let file = await s3
    .getObject({ Bucket: bucketName, Key: filename })
    .promise();
  res.send(file.Body);
};

exports.BucketSize = async (req, res) => {
  const objectList = await s3.listObjectsV2({ Bucket: bucketName }).promise();
  //  if (!objectList.Contents) return 0;
  let size = 0;
  objectList.Contents.map((item) => (item.Size ? (size = +item.Size) : size));
  //console.log("first",size)
  res.json({
    size: size,
  });
  //  res.send(size);
};

exports.DeleteObject = async (req, res) => {
  const deleteParams = {
    Key: req.query.filename,
    Bucket: bucketName,
  };
  await s3.deleteObject(deleteParams).promise();
  res.send({ message: "File Deleted Successfully", success: true });
};

exports.ListAllObjects = async (req, res) => {
  let r = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
  let x = r.Contents.map((item) => item.Key);
  res.send(x);
};
exports.S3DeleteLink = async (req, res) => {
  console.log(req.query.path);
  const deleteParams = {
    Key: req.query.path,
    Bucket: bucketName,
  };
  let response = await s3.deleteObject(deleteParams).promise();

  res.send({ message: "File Deleted Successfully", success: true });
};
