const mongoose = require('mongoose');
const Application = mongoose.model('Application');

const applicationsList = function(req, res) {
    Application.find()
        .then(applications => {
            res.status(200).json(applications);
        })
        .catch(err => {
            res.status(500).json({ message: "Error retrieving applications", error: err });
        });
        
};


const applicationsReadOne = function(req, res) {
    if (req.params && req.params.applicationid) {
        Application.findById(req.params.applicationid) 
            .then(application => {
                if (!application) {
                    return res.status(404).json({ message: "applicationid not found"
                    });
                }

                res.status(200).json(application);
            })
            .catch(err => {
                res.status(500).json({ message: "Error retrieving application", error: err});
            });
        
    } else {
        res.status(400).json({ message: "No applicationid in request"});
    }

};

module.exports = {
    applicationsList,
    applicationsReadOne
};