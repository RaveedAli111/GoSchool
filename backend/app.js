const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const promisify = require("es6-promisify");
const errorHandlers = require("./handlers/errorHandlers");
const { isValidToken } = require("./controllers/root/authController");
require("dotenv").config({ path: ".env" });

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.admin = req.admin || null;
  res.locals.currentPath = req.path;
  next();
});
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PATCH,PUT,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization,x-auth-token, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  } else {
    return next();
  }
});

// Define API routes

// Handle all other routes by serving the React app

//root
// app.use("/api/.well-known", require("./routes/root/apple"));
app.use("/api/email", require("./routes/root/sesEmailRoutes"));
app.use("/api/user", require("./routes/SearchCard"));
app.use("/api/auth", require("./routes/root/authApi"));
// app.use("/api/s3link", require("./routes/root/S3LinkRoutes"));
// app.use("/api/drive", require("./routes/root/S3Routes"));
// app.use("/api/card", require("./routes/Card"));
// app.use("/api/card", require("./routes/Card"));

app.use("/api/school", require("./routes/School.route"));

app.use("/api/admin", isValidToken, require("./routes/root/adminRoutes"));
// app.use("/api/follow", isValidToken, require("./routes/root/Follow"));
// app.use(
//   "/api/notification",
//   isValidToken,
//   require("./routes/root/notificationRoutes")
// );

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);
if (app.get("env") === "development") {
  app.use(errorHandlers.developmentErrors);
}
app.use(errorHandlers.productionErrors);

module.exports = app;
