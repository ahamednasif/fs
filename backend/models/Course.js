const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
  },
  instructor: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  modules: [{
    moduleTitle: { type: String, required: true },
    videoUrl: { type: String, required: true },
  }]
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
