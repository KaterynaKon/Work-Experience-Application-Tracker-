/* GET dashboard page */

const index = function(req, res){
    res.render('dashboard', { 
        title: 'Dashboard',
        pageHeader: { title: 'My Applications'},
        applications: [{
            company: 'Company A',
            position: 'Software Intern',
            type: 'Work Experience',
            status: 'Applied',
            dateApplied: '16 Sep',
            cvUsed: 'Backend Developer CV'
        },{
            company: 'Company B',
            position: 'Developer Intern',
            type: 'Internship',
            status: 'Interview',
            dateApplied: '14 Sep',
            cvUsed: 'General CV'
        },{
            company: 'Company C',
            position: 'IT Work Experience',
            type: 'Work Experience',
            status: 'Applied',
            dateApplied: '12 Sep',
            cvUsed: 'Backend Developer CV'
        }]
    
    
    });
};

module.exports = { index };