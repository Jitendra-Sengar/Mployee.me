const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  jobId: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  job_link: { type: String },
  seniority_level: { type: String },
  employment_type: { type: String },
  source: { type: String },
  experience: { type: String },
  company_url: { type: String },
  companyImageUrl: { type: String },
  postedDateTime: { type: Date },
  min_exp: { type: Number },
  max_exp: { type: Number },
  country: { type: String },
  companytype: { type: String }
});

module.exports = mongoose.model('Job', JobSchema);
