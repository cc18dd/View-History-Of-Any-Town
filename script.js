function lookupTown() {
    var townName = document.getElementById("townName").value.trim();
    var resultsTableBody = document.getElementById("resultsTableBody");

    if (townName !== "") {
        resultsTableBody.innerHTML = `
            <tr>
                <td>VintageAerial</td>
                <td><a href="https://vintageaerial.com/photos/search?q=${encodeURIComponent(townName)}">Old Aerial Photos for ${townName}</a></td>
                <td></td>
            </tr>
            <tr>
                <td>City-Data</td>
                <td><a href="https://www.city-data.com/search/?&siteurl=www.city-data.com/#&gsc.q=${encodeURIComponent(townName)}">Info about ${townName}</a></td>
                <td></td>
            </tr>
            <tr>
                <td>ExtremeWeatherWatch</td>
                <td><a href="https://www.extremeweatherwatch.com/cities/${encodeURIComponent(townName)}">${townName} Weather Data</a></td>
                <td></td>
            </tr>
            <tr>
                <td>PlaneCrashMap</td>
                <td><a href="https://www.google.com/search?q=site:planecrashmap.com%20${encodeURIComponent(townName)}">${townName} Plane Crashes</a></td>
                <td></td>
            </tr>
            <tr>
                <td>Wikipedia</td>
                <td><a href="https://en.wikipedia.org/wiki/${encodeURIComponent(townName)}">${townName} - Wikipedia</a></td>
                <td></td>
            </tr>
            <tr>
                <td>US Census</td>
                <td><a href="https://data.census.gov/all?q=${encodeURIComponent(townName)}">US Census Search</a></td>
                <td></td>
            </tr>
            <tr>
                <td>Google Maps</td>
                <td><a href="geo://?q=${encodeURIComponent(townName)}">Launch Maps</a></td>
                <td><a href="https://google.com/maps/search/${encodeURIComponent(townName)}">Launch Google Maps</a></td>
                
            </tr>
            <tr>
                <td>Facebook</td>
                <td><a href="https://www.facebook.com/search/?q=${encodeURIComponent(townName)}%20History">${townName} History</a></td>
                <td><a href="https://www.facebook.com/search/?q=If you grew up in ${encodeURIComponent(townName)}%20then you know">If you grew up in ${townName} then you know</a></td>
            </tr>
            <tr>
                <td>YouTube</td>
                <td><a href="youtube://www.youtube.com/results?search_query=${encodeURIComponent(townName)%20History">Youtube Search</a></td>
                <td><a href="https://youtube.com/results?search_query=${encodeURIComponent(townName)%20History">Youtube Search</a></td>
            </tr>
            <tr>
                <td>TopoView</td>
                <td><a href="https://ngmdb.usgs.gov/topoview/">Launch Topoview</a></td>
                <td></td>
            </tr>
        `;
    } else {
        resultsTableBody.innerHTML = `
            <tr>
                <td colspan="3">Please enter a town name.</td>
            </tr>
        `;
    }
}
