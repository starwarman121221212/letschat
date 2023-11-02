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
    
var username=localStorage.getItem("username");
var room_name=localStorage.getItem("roomname");
function send() {
  msg=document.getElementById("msg").value ;
  firebase.database().ref(room_name).push({
    name:username,
    messeage:msg,
    like:0
  })
  document.getElementById("msg").value="";
}

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
   name=message_data["name"] ;
   messeage=message_data["messeage"];
   like=message_data["like"];
   name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
   messeage_with_tag="<h4 class='message_h4'>"+messeage+"</h4>";
   like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
   span_widht_tag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
   row=name_with_tag+messeage_with_tag+like_button+span_widht_tag;
   document.getElementById("output").innerHTML+=row
   
//End code"
   } });  }); }
  getData();

function updatelike (messeage_id) {
likes=document.getElementById(messeage_id).value
updatedlikes=Number(likes)+1;

firebase.database().ref(room_name).child(messeage_id).update({
  like:updatedlikes
})
}
function logout(){
  localStorage.removeItem("username")
  localStorage.removeItem("roomname")

  window.location="index.html"
}

