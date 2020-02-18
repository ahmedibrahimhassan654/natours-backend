const Tour = require('./../models/tourModel');

const catchAsyn = require('./../utils/catchAsync');

exports.getOverViews = catchAsyn(async (req, res, next) => {
  //1)get all the tour from the collection

  const tours = await Tour.find();
  //2)build Template

  //3)render the data to overview template
  res.status(200).render('overview', {
    title: 'all tour',
    tours
  });
});

exports.getTour = catchAsyn(async (req, res, next) => {
  //1)get tour params with with another collection data sets like reviews
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user createdAt'
  });
  //2)build tour template

  //3)puplish tour params
  res.status(200).render('tour', {
    title: tour.slug,
    tour
  });
});
