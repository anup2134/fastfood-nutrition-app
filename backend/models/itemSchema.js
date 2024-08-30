import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  size: {
    type: String,
    default: null,
    trim: true,
    required: false,
  },
  category: {
    type: String,
    default: null,
    trim: true,
  },
  dietary: {
    type: String,
  },
  nutrition: {
    calories: {
      type: Number,
      min: 0,
    },
    protein: {
      type: Number,
      min: 0,
    },
    fats: {
      type: Number,
      min: 0,
    },
    saturated: {
      type: Number,
      min: 0,
    },
    trans: {
      type: Number,
      min: 0,
    },
    cholesterol: {
      type: Number,
      min: 0,
    },
    carbs: {
      type: Number,
      min: 0,
    },
    sugar: {
      type: Number,
      min: 0,
    },
    sodium: {
      type: Number,
      min: 0,
    },
  },
});

export const Item = mongoose.model("Item", itemSchema);
