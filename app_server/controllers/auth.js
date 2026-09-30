/* GET Login page */
const login = function(req, res){
    res.render('login', { title: 'Login'});
};


/* GET register page */
const register = function(req, res){
    res.render('register', {title: 'Register'});
};

module.exports = {
    login,
    register
};