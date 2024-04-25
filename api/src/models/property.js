const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name not provided"],
      unique: true,
    },
    description: {
        type: String,
        required: [true, "Description not provided"],
        unique: true,
      },
    imageUrls: {
      type: String,
      required: [true, "Image url not provided"],
      unique: true,
    },

    address: {
      type: String,
      required: [true, "Address not provided"],
      unique: [true, "Address already exist"],
    },
    property_type: {
      type: String,
      enum: {
        values: ["School", "House", "Hotels"],
        message: `{VALUE}Does not match either of school, house or hotel`,
      },
    },

    type: {
      type: String,
      enum: {
        values: ["School", "House", "Hotels"],
        message: `{VALUE}Does not match either of school, house or hotel`,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    years: {
      type: Number,
      required: true,
    },
    poster: {
      ref: "User",
      type: mongoose.Types.ObjectId,
      required: [true, "No product poster provided"],
      //this will make a reference to this poster
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
