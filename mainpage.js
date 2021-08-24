var nickname = document.getElementById('nickname');
var roomKey = document.getElementById('roomKey');
var secret = document.getElementById('secret');
var createChat = document.getElementById('createChat');
var signOut = document.getElementById('signOut');

createChat.addEventListener("click", function(){
    if(roomKey != null && secret != null && nickname != null)
    {
        var databaseKey = (roomKey+"/"+secret);
        const abc = {key: databaseKey};
        const xyz = JSON.stringify(abc);
        localStorage.setItem("Data", xyz);
    }
    else
    {
        alert("Room key and/or Secret cannot be empty!");
    }
})