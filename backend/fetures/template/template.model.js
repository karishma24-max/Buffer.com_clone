const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },heading:""
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Template = mongoose.model("template", TemplateSchema);
module.exports = Template;
