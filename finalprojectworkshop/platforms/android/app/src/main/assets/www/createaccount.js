 // Wait until DOM is ready to register callbacks
 document.addEventListener("DOMContentLoaded", function(){
    //Do this when DOM is loaded
    //Set event listeners/handlers for buttons
    document.getElementById('signup').onclick = dosignup;
  });

  var dosignup = function(){
    var newUsername_array = [];
    var newPassword_array = [];
    var newUsername = document.getElementById("newinputusername").value;
    var newPassword = document.getElementById("newinputpassword").value;
    if(newUsername == " " && newPassword == " ") {
        window.alert("username/password empty please fill them out");
    }
    else{
        newUsername_array.push(newUsername);
        newPassword_array.push(newPassword);
        location.replace("home.html");
    }
}