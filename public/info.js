// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
var rows;
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});








}).resize();


$( document ).ready(function() {

    var data = JSON.parse(localStorage.getItem("row"));
    console.log(data);
    var row = document.getElementById('table').insertRow(0);
    for (var i = 0; i < 8; i++) {
        row.insertCell(i);
    }
    console.log(row.cells);
   for (var i = 0; i < row.cells.length; i++) {
       row.cells[i].innerHTML = data[i];
   }

});