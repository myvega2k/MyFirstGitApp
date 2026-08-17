function login(username, password) {
    if(username){
        console.log(username);
    }else if(username && password) {
        console.log(username + ' ' + password);
    }else {
        console.log('>>>> 로그인 실패했습니다');
    }
};

function logout() {
    console.log('로그아웃');
}