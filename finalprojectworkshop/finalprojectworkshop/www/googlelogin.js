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
    gplusLogin();
    changepage();
  }

  //Logs into Google
    function gplusLogin(){
      window.plugins.googleplus.login({
    
      }, function(obj){
        alert(JSON.stringify(obj));
        
      }, function(msg){
        alert('error: ' + msg);
      });
      
    }
    
    //Supposed to change the page
    function changepage(){
        location.replace("home.html");
    }