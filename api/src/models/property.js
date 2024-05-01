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
    },

    address: {
      type: String,
      required: [true, "Address not provided"],
      unique: [true, "Address already exist"],
    },
    location: {
      type: String,
      required: [true, "Location not provided"],
      unique: [true, "Location already exist"],
    },
    property_type: {
      type: String,
      enum: {
        values: ["buy", "rent", "sell"],
        message: `{VALUE} does not match either of buying, renting or selling`,
      },
    },

    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
