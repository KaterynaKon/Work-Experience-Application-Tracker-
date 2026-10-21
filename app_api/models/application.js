const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true, default: 'Applied' },
  dateApplied: { type: Date, required: true, default: Date.now },
  interviewDate: { type: Date },
  cvUsed: { type: String },
  notes: { type: String }

});

mongoose.model('Application', applicationSchema);