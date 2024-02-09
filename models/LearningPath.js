const mongoose = require('mongoose');

const LearningPathSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  resources: [{ type: String }],
  relatedCareers: [String],
});

const LearningPath = mongoose.model('LearningPath', LearningPathSchema);
module.exports = LearningPath;
