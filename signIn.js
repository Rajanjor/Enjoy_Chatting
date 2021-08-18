var email = document.getElementById('email');
var password = document.getElementById('password');
var signIn = document.getElementById('signIn');

signIn.addEventListener("click", function(){
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        window.open();
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
    });
});