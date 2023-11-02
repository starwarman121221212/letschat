const firebaseConfig = {
      apiKey: "AIzaSyAW_kM0XFNwUSB72TyTSFYfBdgAZ1tw_7M",
      authDomain: "kwitter-next-next-gen.firebaseapp.com",
      databaseURL: "https://kwitter-next-next-gen-default-rtdb.firebaseio.com",
      projectId: "kwitter-next-next-gen",
      storageBucket: "kwitter-next-next-gen.appspot.com",
      messagingSenderId: "993864014504",
      appId: "1:993864014504:web:ca81c4c1eef421c143809d"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("username");
     document.getElementById("username").innerHTML="welcome "+username+"!!!!!!!!!!";
     function addroom(){
      var roomname=document.getElementById("roomname").value ;
      firebase.database().ref("/").child(roomname).update({
            purpous:"addingroomname"
      })
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
      document.getElementById("roomname").value="";

     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroom(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirecttoroom(roomid) {
localStorage.setItem("roomname",roomid);
window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")

      window.location="index.html"
}
