// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
var rows;
var limit = document.getElementById('limit').value;
console.log(limit);
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});








}).resize();

function showInfo(data) {
    //console.log(data);
    var cells = data.cells;
    var i = 0;
    var test = [];
    for(var i = 0; i < data.length; i++) {
        test[i] = data[i].innerHTML;
    }
    console.log(test);
    localStorage.setItem("row", JSON.stringify(test));
    document.location.href = "./info.html";
}
$(document).ready(function() {
    var database = firebase.database();

    alert("welcome " + localStorage.getItem("user"));
    var topUserPostsRef = database.ref('rat-sighting-list').orderByChild("Created Date").limitToLast(parseInt(limit));

    database.ref('rat-sighting-list');
    topUserPostsRef.on("child_added", function(data) {
        var newPlayer = data.val();

        var table = document.getElementById("table");
        var row = table.insertRow(0);
        var i = 0;
        var formatted;
        console.log(data.key);
        for (key in data.val()) {
            var cell = row.insertCell(i);
            if (key == "Created Date") {
                var t = new Date( key );
                var h = moment.unix(data.val()[key] / 1000);
                formatted = moment().format("MM/DD/YYYY hh:MM:ss");
                //console.log(formatted);
            } else {
                formatted = data.val()[key];
            }
            cell.innerHTML = formatted;
            i++;
        }
        var rows = document.getElementById("table").rows;
        $('#table').find('tr').click( function(){
            showInfo( rows[($(this).index())].cells );
        });


    });







  /* code here */ });
function graph() {
    var table = document.getElementById("table");
    var sightings = {};
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];



    while(table.rows.length > 0 ) {
        var d = new Date(table.rows[0].cells[2].innerHTML);
        //var month = moment(table.rows[0].cells[2].innerHTML, "MM/DD/YYYY").getMonth();

        sightings[monthNames[d.getMonth()]] = isNaN(parseFloat(sightings[monthNames[d.getMonth()]])) ? 1 : parseFloat(sightings[monthNames[d.getMonth()]]) + 1;
        localStorage.setItem("sightings", JSON.stringify(sightings));
        //var h = moment.unix(table.rows[0].cells[2].innerHTML.split(" ")[0] / 1000);
        //formatted = moment().format("YYYY/MM/DD hh:MM:ss");
        //sightings[]
        table.deleteRow(0);
    }
    document.location.href = "./chart.html";
}


function input() {
    document.location.href = "./input.html";
}
function map() {
    var table = document.getElementById("table");
    console.log(table.rows[0].cells[5].innerHTML);
    var coords = [];
    while(table.rows.length > 0) {
        coords.push({lat: parseFloat(table.rows[0].cells[5].innerHTML), lng: parseFloat(table.rows[0].cells[7].innerHTML)});
        table.deleteRow(0);

    }

    localStorage.setItem("coords", JSON.stringify(coords));
    document.location.href = "./map.html";
}


function query() {
    var table = document.getElementById("table");
    while(table.rows.length > 0) {
        table.deleteRow(0);
    }
    rows = null;



    var database = firebase.database();

    //var date1 = 1;
    //var date2 = 160000000;
    var date1 = moment(document.getElementById("dateR1").value, "MM/DD/YYYY").valueOf();
    var date2 = moment(document.getElementById("dateR2").value, "MM/DD/YYYY").valueOf();



    var limit = document.getElementById('limit').value;
    var topUserPostsRef2 = database.ref('rat-sighting-list').orderByChild("Created Date").startAt(date1).endAt(date2).limitToFirst(parseInt(limit));


    topUserPostsRef2.on("child_added", function(data) {
        var newPlayer = data.val();

        var table = document.getElementById("table");
        var row = table.insertRow(0);
        var i = 0;
        var formatted;
        for (key in data.val()) {
            var cell = row.insertCell(i);
            if (key == "Created Date") {
                var t = new Date( key );
                var h = moment.unix(data.val()[key] /  1000);
                var l = moment(h);
                console.log(h);
                var s = h.format("MM/DD/YYYY");
                formatted = s;
            } else {
                formatted = data.val()[key];
            }
            cell.innerHTML = formatted;
            i++;
        }
        var rows = document.getElementById("table").rows;
        $('#table').find('tr').click( function(){
            showInfo( rows[($(this).index())].cells );
        });

    });

}