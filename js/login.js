document.getElementById("login-button").addEventListener("click",function(){
    const emailFild = document.getElementById("email-fild");
    const userEmail = emailFild.value;
    const passwordFild = document.getElementById("password-fild");
    const userPassword = passwordFild.value;

    if(userEmail == "calculus@gmail.com" && userPassword == "password"){
        window.location.href = "banking.html";
    }
});