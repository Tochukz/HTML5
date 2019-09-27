<!DOCTYPE html>
<html>

<head>
    <title>Geoogle Geolocation</title>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="http://localhost/local-cdn/bootstrap-3.3.4-dist/css/bootstrap.min.css">
    <!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"> </script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"> </script>	
	<![endif]-->
</head>

<body>
    <nav class="navbar navbar-default navbar-static-top" id="nav">
        <div class="container">
            <div class="navbar-header">
                <a href="index.php" class="navbar-brand">HTML5 Geolocation</a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-menu" aria-expanded="false">
                <span class="sr-only"> Toggle Navigation </span>
                <span class="icon-bar"> </span>
                <span class="icon-bar"> </span>
                <span class="icon-bar"> </span>
            </button>
            </div>
            <div class="collapse navbar-collapse navbar-right" id="nav-menu">
                <ul class="nav navbar-nav">
                    <li><a href="index.php">HOME</a></li>
                    <li><a href="aboutus.php">ABOUT US</a></li>
                    <li><a href="services.php">SERVICES</a></li>
                    <li><a href="webdesign.php">WEB DESIGN</a></li>
                    <li><a href="portfolio.php">PORTFOLIO</a></li>
                    <li><a href="contactus.php">CONTACT US</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <form>
                        <div class="form-group col-sm-6">
                            <label>Latitude</label>
                            <input type="text" id="lat" class="form-control" />
                        </div>
                        <div class="form-group col-sm-6">
                            <label>Longitude</label>
                            <input type="text" id="lng" class="form-control" />
                        </div>
                        <div class="form-group col-sm-12">
                            <label>Addresses</label>
                            <div id="addr" class="thumbnail">

                            </div>
                        </div>
                        <div class="col-sm-12">
                            <button id="showCoord" class="btn btn-primary" type="button">Coords</button>
                            <button id="showCity" class="btn btn-primary" type="button">City</button>
                            <button id="showLocation" class="btn btn-primary" type="button">Map Loc.</button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-8" id="board">
                    <div id="mapDiv" style="height:400px">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>-->
    <script src="http://localhost/local-cdn/jquery/jquery-1.11.3.min.js"></script>
    <script type="text/javascript">
        function initMap() {
            var coordinates = {
                lat: -26.183,
                lng: 28.016
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

    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD86c1dZT9mHEUGukevgsHFsjA5CvkUbeU&callback=initMap" async defer></script>
    <script src="js/geoscript.js"></script>
</body>

</html>
