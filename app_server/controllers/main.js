/* GET Landing page */
const landing = function(req, res){
    res.render('landing', { title: 'Work Experience Application Tracker' });
};

module.exports = {
    landing
};