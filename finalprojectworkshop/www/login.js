
 // Wait until DOM is ready to register callbacks
 document.addEventListener("DOMContentLoaded", function(){
    //Do this when DOM is loaded
    //Set event listeners/handlers for buttons
    document.getElementById('signin').onclick = dologin;
  });

  var dologin = function(){
      var inputUsername = document.getElementById("inputusername").value;
      var inputPassword = document.getElementById("inputpassword").value;
      var hardUsername = "user";
      var hardPassword = "password";
      if (inputUsername == hardUsername && inputPassword == hardPassword) {
        location.replace("home.html");
    }
    else if(newUsername_array.length != 0 && newPassword_array.length != 0) {
        var array_length = newUsername_array.length;
        for(i = 0; i <= array_length; i++){
            if(inputUsername == newUsername_array[i] && inputPassword == newPassword_array[i]){
                location.replace("home.html");
            }
        }
    }
    else { 
        alert("invalid username/password");
    }
  }