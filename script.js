const Email = "admin@gmail.com"
const Pass = "admin123"

function login(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if(email === Email && pass === Pass){
        window.location.href = "dashboard.html";
    }
    else{
        alert("Invalid email or password");
    }
}