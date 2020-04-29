
 var doinfo = function(){
    console.log("REQUESTING COUNTRY");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var country = JSON.parse(this.responseText);
            console.log(country);
            maketable(country); //Generates content
        }
        else
        { 
            console.log("this.readyState=",this.readyState);
            console.log("this.status=",this.status);
        }
    };
    var dataprefix = "https://corona.lmao.ninja/v2/countries/";
    var datasuffix = document.getElementById("countryName").value;
    var data = dataprefix + datasuffix;
    console.log("requesting:", data);
    xmlhttp.open("GET", data, true)
    xmlhttp.send();
 }

 function make_row(arg1,arg2,table){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var text = document.createTextNode(arg1);
    td1.appendChild(text);
    text = document.createTextNode(arg2);
    td2.appendChild(text);
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
  }

 function maketable(conditions) { // Builds out the table of data
    let workspace = document.getElementById("content");
    workspace.innerHTML = "";

    var header = document.createElement('h4'); //Prep the table header
    var textnode = document.createTextNode(conditions.country);
    header.appendChild(textnode);
    workspace.appendChild(header);
    //workspace.appendChild(header);
  }