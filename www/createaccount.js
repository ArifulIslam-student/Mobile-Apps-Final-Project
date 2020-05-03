//Will alter the default alert messages
document.addEventListener('deviceready', function () {
  if (navigator.notification) { // Override default HTML alert with native dialog
      window.alert = function (message) {
          navigator.notification.alert(
              message,    // message
              null,       // callback
              "Corona Central", // title
              'OK'        // buttonName
          );
      };
  }
}, false);

 // Wait until DOM is ready to register callbacks
 document.addEventListener("DOMContentLoaded", function(){
    //Do this when DOM is loaded
    //Set event listeners/handlers for buttons
    document.getElementById('signup').onclick = dosignup;
  });

  //Called when signup button is pressed
  var dosignup = function(){
    var new_username = " ";
    var new_password = " ";
    makelogin(new_username, new_password);
  }

  //Makes a new account
  function makelogin(username, password){
      if(document.getElementById("inputusername").value == "" && document.getElementById("inputpassword").value == ""){
          alert("Username/password fields are empty")
      }
      else{
        username = document.getElementById("inputusername").value;
        password = document.getElementById("inputpassword").value;
      }
      //When login button is pressed the new username/password is used
      document.getElementById('login').onclick = function() {
        uselogin(username, username)
     };

  }

  //Checks to see if input fields matches new account
  function uselogin(username, password){
      if(document.getElementById("inputusername").value == username && document.getElementById("inputpassword").value == password){
        location.replace("home.html");
      }
      else{
        alert("invalid username/password");
      }
  }