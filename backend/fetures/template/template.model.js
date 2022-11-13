const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema(
  {
    image1src : { type: String },
    heading1content : { type: String },
    text1content : { type: String },
    button1content : { type: String },
    button1link : { type: String },
    image2src : { type: String },
    text2content : { type: String },
    descriptioncontent : { type: String },
    image3src : { type: String },
    text3content : { type: String },
    image4src : { type: String },
    description2content : { type: String },
    description3content : { type: String },
    text4content: { type: String },
    button2content: { type: String },
    button2link : { type: String },
    button3content: { type: String },
    button3link : { type: String },
    button4content : { type : String },
    button4link : { type: String },
    iframesrc : {type : String}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Template = mongoose.model("template", TemplateSchema);
module.exports = Template;
