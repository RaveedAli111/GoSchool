require("dotenv").config({ path: __dirname + "/../.env" });
const fs = require("fs");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once
// const patients = JSON.parse(
//   fs.readFileSync(__dirname + "/patients.json", "utf-8")
// ); 
// async function deleteData() {
//   console.log("😢😢 Goodbye Data...");
//   await Patient.remove();
//   console.log(
//     "Data Deleted. To load sample data, run\n\n\t npm run sample\n\n"
//   );
//   process.exit();
// }

// async function loadData() {
//   try {
//     await Item.insertMany(patients);
//     console.log("👍👍👍👍👍👍👍👍 Done!");
//     process.exit();
//   } catch (e) {
//     console.log(
//       "\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n"
//     );
//     console.log(e);
//     process.exit();
//   }
// }

async function createAdmin() {
  try {
    const Admin = require("../models/Admin");
    var newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash("12345678");
    await new Admin({
      email: "admin@metagrc.org",
      password: passwordHash,
      confirm: passwordHash,
      oldId: "322",
      firstName: "Admin",
      lastName: "Demo",
      name: "Demo Metagrc",
      role: "admin",
      gender: "male",
      process: "IT",
      designation: "System Manger",
      phone: "03000000000",
      address: "META GRC",
      joinedAt: "1993-05-31T13:20:02.250Z",
      birthAt: "1993-05-31T13:20:02.250Z",
      isAdmin: true,

      createdAt: Date.now(),
    }).save();
    console.log("👍👍👍👍👍👍👍👍 Admin created successfuly: Done!");
    process.exit();
  } catch (e) {
    console.log("\n👎👎👎👎👎👎👎👎 Error! The Error info is below");
    console.log(e);
    process.exit();
  }
}
createAdmin();
// if (process.argv.includes("--delete")) {
//   deleteData();
// } else {
//   loadData();
// }

