/* GET dashboard page */
const request = require('request');
const apiOptions ={
    server:'http://localhost:3000'
};

const _renderDashboard = function(req, res, applications){
    res.render('dashboard', {
        title: 'Dashboard',
        pageHeader: {title: 'My Applications'},
        applications: applications
    });
};

const index = function(req, res){
    const requestOptions = {
        url: apiOptions.server + '/api/applications',
        method: 'GET',
        json: true
    };

    request(requestOptions, (err, response, body) =>{
        let applications = [];
        if(!err && response.statusCode ===200 && Array.isArray(body)){
            applications = body;
        }else{
            console.log('API error or non-array body: ', body);
        }
        _renderDashboard(req, res, applications);
    });
    
};

module.exports = { index };