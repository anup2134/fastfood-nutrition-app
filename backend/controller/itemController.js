import { Item } from "../models/itemSchema.js";
import ErrorHandler from "../middlewares/error.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";

export const createItem = catchAsyncErrors(async (req, res, next) => {
  const {
    name,
    company,
    size,
    category,
    dietary,
    calories,
    protein,
    fats,
    saturated,
    trans,
    cholesterols,
    carbs,
    sugar,
    sodium,
  } = req.body;

  const nutrition = {
    protein: protein,
    fats: fats,
    saturated: saturated,
    trans: trans,
    cholesterols: cholesterols,
    carbs: carbs,
    sugar: sugar,
    sodium: sodium,
  };

  const data = await Item.create({
    name,
    company,
    size,
    category,
    dietary,
    calories,
    nutrition,
  });
  res.status(201).json({
    success: true,
    message: "Item Created",
    data,
  });
});

export const getItem = catchAsyncErrors(async (req, res, next) => {
  // const name = req.body;
  const data = await Item.findById(req.params.id);

  if (data === null) {
    // return next(new ErrorHandler(`No item named ${req.body.name} found`));
    res.status(200).json({
      success: false,
      message: `Item name ${req.body.name} not found`,
    });
    return next();
  }

  res.status(200).json({
    success: true,
    message: "Item retrieved",
    data,
  });
});

export const searchItem = catchAsyncErrors(async (req, res, next) => {
  if (!req.params.query) {
    return next();
  }
  const data = await Item.find({
    $text: { $search: req.params.query, $caseSensitive: false },
  })
    .select({ score: { $meta: "textScore" } })
    .sort({ score: { $meta: "textScore" } })
    .limit(10);

  res.status(200).json({
    success: true,
    message: "Items retrieved successfully",
    data,
  });
});
