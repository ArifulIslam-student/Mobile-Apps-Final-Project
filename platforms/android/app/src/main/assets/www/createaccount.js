 // Wait until DOM is ready to register callbacks
 document.addEventListener("DOMContentLoaded", function(){
    //Do this when DOM is loaded
    //Set event listeners/handlers for buttons
    document.getElementById('signup').onclick = dosignup;
  });

  var dosignup = function(){
    var new_username = " ";
    var new_password = " ";
    makelogin(new_username, new_password);
  }

  function makelogin(username, password){
      if(document.getElementById("inputusername").value == " " && document.getElementById("inputpassword").value == " "){
          alert("Username/password fields are empty")
      }
      else{
        username = document.getElementById("inputusername").value;
        password = document.getElementById("inputpassword").value;
      }
      document.getElementById('login').onclick = function() {
        uselogin(username, username)
     };

  }

  function uselogin(username, password){
      if(document.getElementById("inputusername").value == username && document.getElementById("inputpassword").value == password){
        location.replace("home.html");
      }
      else{
        alert("invalid username/password");
      }
  }