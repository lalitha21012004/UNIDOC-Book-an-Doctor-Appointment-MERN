const mongoose = require("mongoose");
const User = require("../models/userModel"); // Make sure this path is correct for your project

async function verifyUserId() {
  try {
    // Specify the user ID you're testing with
    const userId = "672cd9abbc7eadd15407d88f"; // Replace with the ID you want to check

    // Query the database for the user by ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (user) {
      console.log("User found:", user); // User exists, print the user data
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error checking user:", error);
  }
}

verifyUserId();
