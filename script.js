function lookupTown() {
    // Get the town name from the input field
    var townName = document.getElementById("townName").value.trim();

    // Check if the town name is not empty
    if (townName !== "") {
        // Create links to the services based on the town name
        var topoViewLink = '<li><a href="https://ngmdb.usgs.gov/topoview/?q=' + encodeURIComponent(townName) + '">TopoView</a></li>';
        var vintageAerialLink = '<li><a href="https://vintageaerial.com/photos/search?q=' + encodeURIComponent(townName) + '">VintageAerial</a></li>';
        var cityDataLink = '<li><a href="https://www.city-data.com/city/' + encodeURIComponent(townName) + '.html">City-Data</a></li>';
        var extremeWeatherWatchLink = '<li><a href="https://www.extremeweatherwatch.com/?q=' + encodeURIComponent(townName) + '">ExtremeWeatherWatch</a></li>';
        var planeCrashMapLink = '<li><a href="https://planecrashmap.com/map/?q=' + encodeURIComponent(townName) + '">PlaneCrashMap</a></li>';

        // Display the links in the results list
        var resultsList = document.getElementById("results");
        resultsList.innerHTML = topoViewLink + vintageAerialLink + cityDataLink + extremeWeatherWatchLink + planeCrashMapLink;
    } else {
        // If the input is empty, show an error message
        var resultsList = document.getElementById("results");
        resultsList.innerHTML = "<li>Please enter a town name.</li>";
    }
}
    
