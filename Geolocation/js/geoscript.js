var coordinates = {};
var ApiAccess = false;
$(function () {
    /*
     *Gets and display the user's coordinates
     */
    $('#showCoord').on('click', showCoord);

    /**
     *Show the user's location by name.     
     */
    $('#showCity').on('click', showCity);

    /**
     * show the specified location of on the map given it's coordinayes
     */
    $('#showLocation').on('click', showMapLocation);
});

/**
 * Checks if geolocation capability is present in the device.
 * Collections the position object on success.
 */
function showCoord() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, failure)
    } else {
        console.log("Sorry no geolocation device on your machine");
    }
}

/**
 * Handle a sucessful collection of geolocation position object.
 */
function success(position) {
    coordinates.lat = position.coords.latitude;
    coordinates.lng = position.coords.longitude;
    $('#lat').val(coordinates.lat);
    $('#lng').val(coordinates.lng);

    ApiAccess = true;
}

/**
 * Handle failure on trying to get geolocation position.
 */
function failure(error) {
    showError(error);
}

/**
 * Display error details
 */
function showError(error) {
    const details = `<p><b>Error Code</b> ${error.code}</p><p><b>Message</b> ${error.message}</p>`
    $('#errorDiv').html(details).slideDown();
    setTimeout(() => {
        $('#errorDiv').slideUp();
    }, 4000);
    console.error(error);
}

/**
 *Display the physical address of the user using his coordinates.
 */
function showCity() {
    if (jQuery.isEmptyObject(coordinates)) {
        //console.log('no corrds yet');
        showCoord();
    }

    if (ApiAccess == true) {
        reverseGeocode(coordinates.lat, coordinates.lng);
    }
}

/**
 * Makes a googlemap API request for a user's human readable location.
 */
function reverseGeocode(lat, lng) {
    var key = "AIzaSyCOao_SuwVRuY9dtThQ-Ke1_ezxTKpUFro"; //Google Places API key
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + coordinates.lat + "," + coordinates.lng + "&key=" + key;
    //var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyD86c1dZT9mHEUGukevgsHFsjA5CvkUbeU";
    console.log(url);
    $.get(url, function (data, status) {
        //$('#board').html(JSON.stringify(data));
        //console.log(status);
        if (status == 'success' && data.status == "OK") {
            getAddress(data);
        } else {
            handleFailure(status, data)
        }
    });
}

/**
 * Processes the data obtained from the googlemap API request.
 */
function getAddress(data) {
    var results = data.results;
    var addr;
    var i = 1;
    $('#addr').empty();
    for (var address in results) {
        addr = results[address]["formatted_address"];
        $('#addr').append("<p>" + i + ". " + addr + "</p>");
        i++;
    }
}

/**
 * Handle cases of failure after the googlemap API request.
 */
function handleFailure(status, data) {
    console.log("Request status: " + status);
    if (data) {
        console.log("Response: " + data.status);
        console.log("Response: " + data.error_message);
    }
}

/**
 * Shows the new location on the map for the input lat and lng input data.
 */
function showMapLocation() {
    var lat = $('#lat').val();
    var lng = $('#lng').val();
    if (lat && lng) {
        console.log("lat: " + lat + " lng" + lng);
        AdjustMapPointer(lat, lng)
    }
}

/**
 * Rebuilds the google map shown on the screen.
 */
function AdjustMapPointer(latInput, lngInput) {
    var coordinates = {
        lat: parseFloat(latInput),
        lng: parseFloat(lngInput)
    };
    var mapOptions = {
        center: coordinates,
        zoom: 5
    };
    var map = new google.maps.Map(document.getElementById("mapDiv"), mapOptions);
    var maker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
}
