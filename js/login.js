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

function getUserInfo() {
    return "사용자 정보";
}