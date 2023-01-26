function login(){
    let user = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (user == "correo@mail.com" || password == "pass123"){
        window.location.href = "./main-page.html"
    }else{
        window.alert("Correo y/o Contraseña Incorrecta")
    }
}