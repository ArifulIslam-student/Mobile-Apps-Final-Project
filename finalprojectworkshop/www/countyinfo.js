
 var doinfo = function(){
    console.log("REQUESTING COUNTRY");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var country = JSON.parse(this.responseText);
            console.log(country);
            showinfo(country); //Generates content
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

 function showinfo(conditions) { 
    let workspace = document.getElementById("content");
    workspace.innerHTML = "";

    var header = document.createElement('h4'); 
    var textnode = document.createTextNode(conditions.country);
    header.appendChild(textnode);
    workspace.appendChild(header);
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Corona Stats"
        },
        data: [{        
            type: "column",  
            dataPoints: [      
                { y: conditions.cases, label: "Cases" },
                { y: conditions.deaths,  label: "Deaths" },
                { y: conditions.recovered,  label: "Recovered" },
                { y: conditions.active,  label: "Active" },
                { y: conditions.critical,  label: "Critical" },
                { y: conditions.tests, label: "Tests" }
            ]
        }]
    });
    chart.render();

    var chart2 = new CanvasJS.Chart("chartContainer2", {
        animationEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Today's Stats"
        },
        data: [{        
            type: "column",  
            dataPoints: [      
                { y: conditions.todayCases, label: "Today's Cases" },
                { y: conditions.todayDeaths,  label: "Today's Deaths" }
            ]
        }]
    });
    chart2.render();

  }