
// https://www.w3schools.com/howto/howto_js_toggle_password.asp

function showPassword() {
    //var x = document.getElementById("tm-show-password");
    var x = document.getElementById("txtPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
