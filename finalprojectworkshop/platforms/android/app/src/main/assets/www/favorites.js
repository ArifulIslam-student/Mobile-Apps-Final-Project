var domakefav = function(){
    var favorites = " ";
    setfav(favorites);
}

function setfav(favorites){
    favorites = document.getElementById("countryName").value;
    document.getElementById('seefav').onclick = function() {
        displayfav(favorites);
     };
}

function displayfav(favorites){
    document.getElementById("countryName").value = favorites;
}

 