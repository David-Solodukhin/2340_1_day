// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
var rows;
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});








}).resize();



function submit() {

    var database = firebase.database();


    var topUserPostsRef = database.ref('rat-sighting-list' ).push({
        "Created Date": document.getElementById('date').value,
        "Incident Zip": document.getElementById('zip').value,
        "Incident Address": document.getElementById('loc').value,
        "Borough" : document.getElementById('borough').value,
        "Latitude" : document.getElementById('lat').value,
        "Longitude" : document.getElementById('long').value,
        "City" : document.getElementById('city').value,
        "Location Type": document.getElementById('type').value

    });
}
