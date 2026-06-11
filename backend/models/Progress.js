const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  progressPercentage: {
    type: Number,
    default: 0
  },
  completedModules: [{
    type: String // Alternatively, ObjectId if modules have their own independent schemas
  }]
}, { timestamps: true });

const Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;
