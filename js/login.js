//index.html 을 위한 js file
function login(username, password) {
    if(username){
        console.log(username);
    }else if(username && password) {
        console.log(username + ' ' + password);
    }else {
        console.log('[ERROR] login failed');s
    }
};

function logout() {
    console.log('로그아웃');
}