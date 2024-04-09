const express = require("express");
const { catchErrors } = require("../../handlers/errorHandlers");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/apple-app-site-association", async (req, res) => {
  try {
    console.log("object");
    console.log(__dirname);
    const filePath = path.join(__dirname, "apple-app-association.json"); // Adjust the path as needed
    console.log(__dirname);
    // Read the JSON file content
    const fileContent = fs.readFileSync(filePath, "utf-8");
    // Parse the JSON content
    const jsonData = JSON.parse(fileContent);
    // Send the JSON data as a response
    res.json(jsonData);
  } catch {
    return res.status(500).json({
      success: false,
      result: [],
      message: "Oops there is an Error",
    });
  }
});

module.exports = router;
