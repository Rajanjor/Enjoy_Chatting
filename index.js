var email = document.getElementById('email');
var password = document.getElementById('password');
var signUp = document.getElementById('signUp');
var alreadyauser = document.getElementById('alreadyauser');

signUp.addEventListener("click", e => {
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    window.location.replace("signIn.html","_self");
    promise.catch(e => alert(e.message));
});

alreadyauser.addEventListener("click", function(){
    window.open("signIn.html","_self");
});