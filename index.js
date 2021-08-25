var email = document.getElementById('email');
var password = document.getElementById('password');
var signUp = document.getElementById('signUp');
var alreadyauser = document.getElementById('alreadyauser');

window.onload = function(){
    email.value = "";
    password.value = "";
    const messaging = firebase.messaging();
    messaging.getToken({vapidKey: "BPfapAjvsJozgi5oiB5O1plXeVWSWWOuBy-pM0xDQ52wISYT8AoUhAoI-C-6lUK-e1zF6hKbeOj9b3ma6G0_IjU"})
    .then((currentToken) => {
        if(currentToken)
        {
            firebase.database().ref('Key').set(currentToken);
        }
        else
        {
            console.log("No registration token available...");
        }
    })
    .catch((err) => {
        console.log('An error occured, ', err);
    });
    messaging.onMessage((payload) => {
        console.log('Message received, ', payload);
    });
};

signUp.addEventListener("click", function(){
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
        window.location.replace("signIn.html","_self");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
    });
});

alreadyauser.addEventListener("click", function(){
    window.open("signIn.html","_self");
});