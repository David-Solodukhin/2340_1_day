// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
var rows;
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});








}).resize();
$(document).ready(function() {

    var database = firebase.database();


    var topUserPostsRef = database.ref('rat-sighting-list').orderByChild("Created Date").limitToLast(10);

    topUserPostsRef.on("child_added", function(data) {
        var newPlayer = data.val();

        var table = document.getElementById("table");
        var row = table.insertRow(0);
        var i = 0;
        var formatted;
        for (key in data.val()) {
            var cell = row.insertCell(i);
            if (key == "Created Date") {
                var t = new Date( key );
                var h = moment.unix(data.val()[key] / 1000);
                formatted = moment().format("YYYY/MM/DD hh:MM:ss");
                //console.log(formatted);
            } else {
                formatted = data.val()[key];
            }
            cell.innerHTML = formatted;
            i++;
        }

    });




  /* code here */ });




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
console.log(date1);
console.log(date2);



    var topUserPostsRef2 = database.ref('rat-sighting-list').orderByChild("Created Date").startAt(date1).endAt(date2).limitToFirst(10);


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

    });

}