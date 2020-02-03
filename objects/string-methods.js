let isValidPassword = function(password) {
    let length = password.length;
    let hasPassword = password.includes('password');
    if (length < 11) {
        return `Your password must be at least 11 characters. Please try again.`
    } else if (hasPassword) {
        return `Your password cannot include the word password. Please try again.`
    } else {
        return `You are logged in`
    }

}
console.log(isValidPassword('123456;lsjgil'));