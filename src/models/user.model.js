import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    alternatePhone: {
      type: String,
      trim: true,
      maxlength: 15,
    },
    company: {
      type: String,
      trim: true,
      required: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    orgName: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      maxlength: 15,
    },
    province: {
      type: String,
      trim: true,
      required: true,
    },
    software: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
