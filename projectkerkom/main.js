function login() {
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;

    if(email == "malehoyuye@gmail.com" && password == "123"){
        return window.location.href = "index.html";
    }else{
        alert("Login gagal ")
    }
}