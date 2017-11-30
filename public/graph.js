// '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .



    var database = firebase.database();


    var topUserPostsRef = database.ref('rat-sighting-list').orderByChild("Created Date").limitToLast(10);





$( document ).ready(function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var labels = [];
    var vals = [];
    var sightings = JSON.parse(localStorage.getItem("sightings"));
    Object.keys(sightings).forEach(function(key) {
        labels.push(key);
        vals.push(sightings[key]);

    });


    var options2 = {
        yAxes: [{
            ticks: {
                min: 0,
                max: 3400,
                stepSize: 200
            }
        }]
    };

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: labels,
            datasets: [{
                label: "Rat Sightings",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: vals
            }]
        },

        // Configuration options go here
        options:  {
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        min: 0// minimum value
                        //max: 5000// maximum value
}
}]
}
}
    });
});