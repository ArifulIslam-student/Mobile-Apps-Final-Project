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
    document.getElementById('google').onclick = dogoogle;
  });

  var dogoogle = function(){
    //gplusLogin();
    //alert("google pressed");
    //location.replace("https://www.w3schools.com")
    changepage();
  }

  //Logs into Google
    function gplusLogin(){
      //location.replace("home.html");
      window.plugins.googleplus.login({
    
      }, function(obj){
        //alert("Login Sucessful");
        alert(JSON.stringify(obj));
        //location.replace("home.html");
      }, function(msg){
        alert('error: ' + msg);
        //location.replace("home.html");
      });
      
    }
    
    function changepage(){
        document.location.replace("home.html");
    }