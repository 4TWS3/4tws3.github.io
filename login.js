window.onload = func;
 function func() {
    document.getElementById('login').onclick = function () {
        var user = document.getElementById('user').value;
        var passd = document.getElementById('passd').value;

        if(user!=='123' || passd!=='123'){
            document.getElementById('msg').innerHTML = "用户名或密码错误";
            document.getElementById('passd').value = '';
        }
        else
            document.getElementById('msg').innerHTML = "登陆成功";


    }
};
