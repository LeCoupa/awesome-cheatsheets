/* *****************************************************************
 * Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
 * Mongoose supports both promises and callbacks.
 * ****************************************************************/

// Import Mongoose
const mongoose = require("mongoose");

/* *****************************************************************
    List of Mongoose Data Types:
        String
        Number
        Date
        Buffer
        Boolean
        Mixed
        ObjectId
        Array
        Decimal128
        Map
        Schema
        UUID
    ******************************************************************/

/* *****************************************************************
 * Schema
 * A schema is a blueprint for a model.
 * It defines the structure of the document, default values, validators, etc.
 * ****************************************************************/

// Define schema for the a collection
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    immutable: true, // This field cannot be changed after creation
  },
  price: {
    type: Number,
    min: 0, // Minimum value is 0
    max: 10000, // Maximum value is 10000
    required: true, // Not specifying a required field will result in validation error
  },
  category: {
    type: String,
    enum: ["fruit", "vegetable", "dairy"], // Only these values are allowed for 'category'
  },
  tags: [
    // Array of String
    {
      type: String,
      minLength: 2, // Minimum length of a single tag is 2
      maxlength: 10, // Maximum length of a single tag is 10
    },
  ],
  createdAt: {
    type: Date,
    // WRONG!
    // default: Date.now(), // This results in the current date being set (as a static value) when the schema is compiled

    // Correct!
    default: () => Date.now(), // We instead use a getter function that returns the current date when called
  },
});

// Create a model from the schema
const Product = mongoose.model("Product", productSchema);
// We can now use the model to create new documents in the 'products' collection

/* *****************************************************************
 * Promises
 * ****************************************************************/

Product.create({
  name: "guava",
  price: 10,
  category: "fruit",
  tags: ["green", "sweet", "fresh"],
});

Product.insertMany([
  {
    name: "apple",
    price: 5,
    category: "fruit",
    tags: ["red", "sweet"],
  },
  {
    name: "banana",
    price: 3,
    category: "fruit",
    tags: ["yellow", "sweet"],
  },
  {
    name: "broccoli",
    price: 2,
    category: "vegetable",
    tags: ["green", "healthy"],
  },
  {
    name: "milk",
    price: 4,
    category: "dairy",
    tags: ["white", "healthy"],
  },
]);

Product.find(); // Get documents in  'product' colelction

Product.find({ name: "guava" }); // Get documents where name = 'guava'

Product.find({ price: { $gt: 5, $lt: 10 } }); // Get documents where 5 < price < 10

Product.find({ name: "banana" }).select({ name: 1, price: 1 }); // Get documents where name = 'banana' and only return name and price

Product.countDocuments({ category: "vegetables" }); // Get count of documents where category = 'vegetables'

Product.updateOne({ name: "guava" }, { price: 15 }); // Update the price of the document where name = 'guava' to 15

Product.deleteOne({ name: "guava" }); // Delete the document where name = 'guava'

Product.deleteMany({ category: "fruit" }); // Delete all documents where category = 'fruit'

/* *****************************************************************
 * Aggregation
 * The aggregation pipeline refers to a specific flow of operations that processes, transforms, and returns results.
 * In a pipeline, successive operations are informed by the previous result.
 * Check out the MongoDB documentation at: https://www.mongodb.com/docs/manual/aggregation/
 * ****************************************************************/

// * $match
// The following aggration pipeline returns all products where price > 80 AND price < 120.
let pipeline = [
  {
    $match: {
      price: {
        $gt: 80,
        $lt: 120,
      },
    },
  },
];

// or you can use:
pipeline = [
  {
    $match: {
      price: {
        $and: [{ $gt: 80 }, { $lt: 120 }],
      },
    },
  },
];

// Similarly, you can use $or:
pipeline = [
  {
    $match: {
      category: {
        $or: [{ $eq: "fruit" }, { $eq: "vegetable" }],
      },
    },
  },
];

// * $group
// The following aggregation pipeline returns the total number of products created less than a year ago, in each category.
pipeline = [
  {
    $match: {
      date: {
        $gte: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
      },
    },
  },
  {
    $group: {
      _id: "$category",
      count: { $sum: 1 },
    },
  },
];

// * $sort
// The following aggregation pipeline returns top 10 most expensive products.
// Note: The $sort stage must come before $limit.
pipeline = [
  {
    $sort: {
      price: -1,
    },
  },
  {
    $limit: 10,
  },
];

// * $project
// To get the name and price of all products along with their ObjectId:
pipeline = [
  {
    $project: {
      name: 1,
      price: 1,
    },
  },
];

// or you can exclude all other fields:
pipeline = [
  {
    $project: {
      category: 0, // 0 means exclude
      tags: 0,
      date: 0,
    },
  },
];
// Note: You may not use both 0 and 1 in the same projection
// other than _id, which is included by default:
pipeline = [
  {
    $project: {
      _id: 0, // exclude ObjectId as well
      name: 1,
      price: 1,
    },
  },
];

// * $unwind
// The following aggregation returns a new document for 'guava' for each of its tags.
pipeline = [
  {
    $match: {
      name: "guava",
    },
  },
  {
    $unwind: {
      path: "$tags", // Name of array field that we want to unwind
      includeArrayIndex: "arrayIndex", // This will add a new field 'arrayIndex' to each document
      preserveNullAndEmptyArrays: true, // This will return a document for each tag, even if the 'tags' is null or empty
    },
  },
];
