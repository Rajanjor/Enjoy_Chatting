var email = document.getElementById('signInEmail');
var password = document.getElementById('signInPassword');
var signIn = document.getElementById('signIn');
var back = document.getElementById('back');

signIn.addEventListener("click", function(){
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        var finish = 1;
        const a = {done: finish};
        const b = JSON.stringify(a);
        localStorage.setItem("SignInDone", b);
        window.location.replace("mainpage.html","_self");    
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
    });
});

back.addEventListener("click", function(){
    window.open("index.html","_self");
});