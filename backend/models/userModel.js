import mongoose from "mongoose";
import { type } from "os";
const {Schema}=mongoose;

const UserSchema=new mongoose.Schema({

    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state:{
        type: String,
        required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    residenceType: {
      type: String,
      required: true,
      enum: ["House", "Apartment", "Condo", "Townhouse"],
    },
    monthlyIncome: {
      type: Number,
      required: true,
    },
    previousLoans: {
        type: Number,
        required: true,
    },
    maritalStatus: {
        type: String,
        required: true,
        enum: ["Single", "Married", "Divorced", "Widowed"],
    },
    numberOfDependents: {
        type: Number,
        required: true,
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);