var nickname = document.getElementById('nickname');
var avatar = document.getElementById('avatar');
var profilePhoto = document.getElementById('profilePhoto');
var roomKey = document.getElementById('roomKey');
var secret = document.getElementById('secret');
var createChat = document.getElementById('createChat');
var signOut = document.getElementById('signOut');

profilePhoto.addEventListener("click", function(){
    avatar.src = profilePhoto.value;
});

createChat.addEventListener("click", function(){
    if(roomKey != null && secret != null && nickname != null)
    {
        var databaseKey = (roomKey+"/"+secret);
        const abc = {key: databaseKey};
        const xyz = JSON.stringify(abc);
        localStorage.setItem("Data", xyz);

        var storageRef = firebase.storage().ref();
        var imageRef = storageRef.child(nickname);
        var task = imageRef.put(profilePhoto);
        task.on("state_changed", (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is '+progress+' % done.');
                switch (snapshot.state) {
                    case firebase.storage().TaskState.PAUSED:
                        console.log("Upload is paused");
                        break;
                    case firebase.storage().TaskState.RUNNING:
                        console.log("Upload is running...");
                        break;
                }
            },
            (error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                console.log(errorCode);
            },
            () => {
                task.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log("File available at "+downloadURL);
                });
            }
        );
    }
    else
    {
        alert("Room key and/or Secret cannot be empty!");
    }
})