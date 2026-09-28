/* GET home page */
const index = function(req, res){
    res.render('index', { title: 'Work Experience Application Tracker' });
};

module.exports = {
    index
};