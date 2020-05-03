//Handels the favorite functions
var domakefav = function(){
    var favorites = " ";
    setfav(favorites);
}

//Saves the input field for later use
function setfav(favorites){
    favorites = document.getElementById("countryName").value;
    alert(favorites + " has been favorited");
    document.getElementById('seefav').onclick = function() {
        displayfav(favorites);
     };
}

//Displays the saved country name on the input field
function displayfav(favorites){
    document.getElementById("countryName").value = favorites;
}

 