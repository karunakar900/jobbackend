const mongoose = require('mongoose');

const jobschema = new mongoose.Schema({
    Jobid: { type: String, required: true },
    Jobtitle: { type: String, required: true },
    ExperienceRange: { type: String, required: true },
    SalaryRange: { type: String, required: true },
    Jobpriority: { type: String, required: true },
    Postedon: { type: String, required: true },
    status: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true }
})

const jobmodel = mongoose.model("jobdetails", jobschema);
module.exports = jobmodel;