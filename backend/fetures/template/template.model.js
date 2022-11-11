const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
    ,heading:{type: String},
    image1display : {type: String},
    image1boxSize : {type: String},
    image1objectFit : {type: String},
    image1src : {type: String},
    image1alt : {type: String},
    heading1color : {type: String},
    heading1content : {type: String},
    text1content : {type: String},
    text1color : {type: String},
    button1colorScheme : {type: String},
    button1width : {type: String},
    button1padding : {type: String},
    button1content : {type: String},
    descriptioncontent : {type: String},
    image2src: {type: String},
    image2alt : {type: String},
    image2borderRadius : {type: String},
    description2content : {type: String},
    iframewidth : {type: String},
    iframeheight : {type: String},
    iframesrc : {type: String},
    iframeframeBorder : {type: String},
    iframeallow : {type: String},
    iframeallowFullScreen : {type: String},
    iframetitle: {type: String}
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Template = mongoose.model("template", TemplateSchema);
module.exports = Template;
