/* GET Login page */
const login = function(req, res){
    res.render('login', {
        title: 'Login',
        pageHeader: {
            title: 'Login'
        }
        });
};

const loginPost = function(req, res){
    res.send('Login POST - TODO');
}


/* GET register page */
const register = function(req, res){
    res.render('register', {
        title: 'Register',
        pageHeader: {
            title: 'Register'
        }
    });
};

const registerPost = function(req, res){
    res.send('Register POST - TODO');
}

module.exports = {
    login,
    register,
    loginPost,
    registerPost
};