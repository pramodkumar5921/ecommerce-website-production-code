import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
      
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("family", userSchema);
