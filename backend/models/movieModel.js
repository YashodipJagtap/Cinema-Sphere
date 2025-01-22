const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/movieApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB successfully");
}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

// Comment schema
const commentSchema = new mongoose.Schema({
  commentBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user" // Refers to the user schema
  },
  comment: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Movie schema
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true // Ensure each movie has an image
  },
  video: {
    type: String,
    required: true // Ensure each movie has a video URL or path
  },
  comments: [commentSchema], // Array of comments
  date: {
    type: Date,
    default: Date.now
  }
});

// Create movie model
const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
