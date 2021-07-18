var bcrypt = require('bcryptjs');

function hashPass(password){
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

function comparePass(password, encrypted){
    return bcrypt.compareSync(password, encrypted);
}

module.exports = {
    hashPass,
    comparePass
}