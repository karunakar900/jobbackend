const jobroute = require('express').Router();
const jobdata = require('../Schema/jobdetails');

jobroute.post("/post", async (req, res) => {
    try {
        const newdata = await jobdata.create({
            Jobid: req.body.Jobid,
            Jobtitle: req.body.Jobtitle,
            ExperienceRange: req.body.ExperienceRange,
            SalaryRange: req.body.SalaryRange,
            Jobpriority: req.body.Jobpriority,
            Postedon: req.body.Postedon,
            status: req.body.status,
            city: req.body.city,
            state: req.body.state

        })

        res.status(200).json({
            status: "jobdetails posted successfully",
            result: newdata
        })
    } catch (e) {
        res.status(404).json({
            status: "failed",
            message: e.message
        })
    }

});

jobroute.put("/update/:id", async (req, res) => {
    try {
        const { Jobid, Jobtitle, ExperienceRange, SalaryRange, Jobpriority, Postedon, status, city, state, _id } =
            req.body;
        const jobupdate = await jobdata.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            { Jobid, Jobtitle, Jobtitle, ExperienceRange, SalaryRange, Jobpriority, Postedon, status, city, state },
            {
                new: true,
            }
        );
        res.status(201).json({
            status: "ok",
            updateresult: jobupdate
        })
    } catch (error) {
        console.log(error);
        res.send("error");
    }
});


jobroute.get("/jobdetails/:id", async (req, res) => {
    try {
        const findById = await jobdata.findOne({ _id: req.params.id });
        res.status(200).json({
            status: "success",
            result: findById
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        });
    }
})




module.exports = jobroute;
