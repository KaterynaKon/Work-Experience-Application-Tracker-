/* GET Landing page */
const landing = function(req, res){
    res.render('landing', { 
        title: 'Work Experience Application Tracker',
        pageHeader: {
            title: 'Work Experience Tracker',
            strapline: 'Track your work experience applications in one place'       
        },
        features: [
            'Register a free account',
            'Add companies you\'ve applied to',
            'Track position, application type, status, date applied, interview date and CV used',
            'See everything in one dashboard'
        ],
        sidebar: {
            title: 'Why use it?',
            text:  'Never lose track of an application again. See deadlines, interview dates and follow-ups at a glance.'
        }
}

    );
};

module.exports = {
    landing
};