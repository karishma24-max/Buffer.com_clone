const mongoose = require("mongoose");

const calenderSchema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Post = mongoose.model("post", calenderSchema);

module.exports = Post;
