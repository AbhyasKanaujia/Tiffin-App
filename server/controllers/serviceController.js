import asyncHandler from "express-async-handler";
import Service from "../models/ServiceModel.js";

// @desc    Fetch all Services
// @route   GET /api/services
// @access  Public
const getServices = asyncHandler(async (req, res) => {
  const query = {
    city: req.query.city ? req.query.city : /.*/,
    state: req.query.state ? req.query.state : /.*/,
    type: req.query.type ? req.query.type : /.*/,
  };
  const services = await Service.find(query);

  res.json(services);
});

const getStateList = asyncHandler(async (req, res) => {
  const states = await Service.collection.distinct("state");
  res.json(states);
});

const getCityList = asyncHandler(async (req, res) => {
  const cities = await Service.distinct("city", { state: req.query.state });
  res.send(cities);
});

export { getServices, getStateList, getCityList };
