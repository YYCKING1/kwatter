
//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCIuTZcp8IQAW9kaa9MYA5szmiYWvBDt0U",
    authDomain: "class-text-624a4.firebaseapp.com",
    databaseURL: "https://class-text-624a4-default-rtdb.firebaseio.com",
    projectId: "class-text-624a4",
    storageBucket: "class-text-624a4.appspot.com",
    messagingSenderId: "784847864558",
    appId: "1:784847864558:web:48cd75787648501830e9ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome Fellow Being " + user_name + ":D";


function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update
  (
  {
    purpose : "adding A Room Name to talk"
  }
  );

  localStorage.setItem("room_name",room_name);
  
  window.location = "kwitter_page.html";

}
 
function getData() 
{
  firebase.database().ref("/").on('value', 

function(snapshot) {document.getElementById("output").innerHTML = "";

snapshot.forEach(function(childSnapshot) {

  childKey  = childSnapshot.key;

       Room_names = childKey;

      //Start code
      console.log( "Room Name - " + Room_names);
      row = "<div class = room_name id="+Room_names+" onclick=redirectToRoomName(this.id) >#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });
    });
  }
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  window.location = "index.html";
}