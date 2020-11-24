$(document).ready(function(){
    $("#name").keyup(function() {
        var val = $("#name").val().length;
        if (val < 2) {
            $("#nb_char_name").html(val + " car.");
        } else {
            $("#nb_char_name").html(val + " cars.");
        }
    });
});

$(document).ready(function(){
    $("#firstname").keyup(function() {
        var val = $("#firstname").val().length;
        if (val < 2) {
            $("#nb_char_firstname").html(val + " car.");
        } else {
            $("#nb_char_firstname").html(val + " cars.");
        }
    });
});




var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
