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
    document.getElementById('signin').onclick = dologin;
  });

  //Creates hard username/password and checks if input fields match them
  var dologin = function(){
      var inputUsername = document.getElementById("inputusername").value;
      var inputPassword = document.getElementById("inputpassword").value;
      var hardUsername = "user";
      var hardPassword = "password";
      if (inputUsername == hardUsername && inputPassword == hardPassword) {
        location.replace("home.html");
    }
    else { 
        alert("invalid username/password");
    }
  }