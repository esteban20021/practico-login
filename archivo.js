function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let usu2 = "Esteban_02"
    let pass2 = "1357";
    let usu3 = "Pachilulu";
    let pass3 = "2023";
    if ((user == usu2 && pass == pass2) || (user == usu3 && pass == pass3)){
        window.location = 'index.html'
    }
    else{
        alert("El usuario y/o contrasenia son incorrectos")
    }
}