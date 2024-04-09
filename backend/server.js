const glob = require("glob");
const path = require("path");
require("dotenv").config({ path: ".env" });

//mongodb connection
const connectDB = require("./handlers/dbConnection");
connectDB();

glob.sync("./models/root/*.js").forEach(function (file) {
  require(path.resolve(file));
});

const app = require("./app");

app.set("port", process.env.PORT || 80);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});
