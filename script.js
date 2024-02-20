var lat1, lon1;
function lookupTown() {

      const urlParams = new URLSearchParams(window.location.search);
      const queryParam = urlParams.get('q');
    
    var townName = document.getElementById("townName").value.trim();
    var resultsTableBody = document.getElementById("resultsTableBody");

    if (townName !== "") {
          var apiKey = '65d4e81aee5b6058596037odse26f95';
        var geocodeUrl = 'https://geocode.maps.co/search?q=' + encodeURIComponent(townName) + '&api_key=' + apiKey;

        fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                var latitude = data[0].lat;
                var longitude = data[0].lon;

                // Outputting coordinates to variables
                var lat1 = latitude;
                var lon1 = longitude;

                var topoViewUrl = 'https://ngmdb.usgs.gov/topoview/viewer/#14/' + lat1 + '/' + lon1;
                document.getElementById('topoViewLink').href = topoViewUrl;
            } else {
                var topoViewUrl = 'https://ngmdb.usgs.gov/topoview/viewer/#14/' + 'nooutputdata' + '/' + 'nooutputdata';
                document.getElementById('topoViewLink').href = topoViewUrl;
            }
        })
        .catch(error => {
            
            
        });
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
                <td><a href="https://google.com/maps/search/${encodeURIComponent(townName)}">Launch Google Maps</a></td>
                <td><a href="geo://?q=${encodeURIComponent(townName)}">Launch Maps</a></td>
                
            </tr>
            <tr>
                <td>Google Earth</td>
                <td><a href="https://earth.google.com/web/search/${encodeURIComponent(townName)}">Launch Google Earth</a></td>
                <td></td>
                
            </tr>
            <tr>
                <td>Facebook</td>
                <td><a href="https://www.facebook.com/search/?q=${encodeURIComponent(townName)}%20History">${townName} History</a></td>
                <td><a href="https://www.facebook.com/search/?q=If you grew up in ${encodeURIComponent(townName)}%20then you know">If you grew up in ${townName} then you know</a></td>
            </tr>
            <tr>
                <td>YouTube</td>
                <td><a href="https://youtube.com/results?search_query=${encodeURIComponent(townName)}%20History">Youtube Search</a></td>
                <td><a href="youtube://www.youtube.com/results?search_query=${encodeURIComponent(townName)}%20History">Youtube Search</a></td>
            </tr>
            <tr>
                <td>TopoView</td>
                <td><a id="topoViewLink" href="#" target="_blank">Launch Topoview</a></td>
                <td></td>
            </tr>
            <tr>
                <td>Google Search</td>
                <td><a href="https://google.com/?q=${encodeURIComponent(townName)}%20History">${townName} History</a></td>
                <td><a href="https://images.google.com/?q=${encodeURIComponent(townName)}%20History">${townName} History Images</a></td>
            </tr>
            <tr>
                <td>Bing Search</td>
                <td><a href="https://bing.com/?q=${encodeURIComponent(townName)}%20History">${townName} History</a></td>
                <td><a href="https://images.bing.com/?q=${encodeURIComponent(townName)}%20History">${townName} History Images</a></td>
            </tr>
            <tr>
                <td>DuckDuckGo Search</td>
                <td><a href="https://duckduckgo.com/?q=${encodeURIComponent(townName)}%20History">${townName} History</a></td>
                <td></td>
            </tr>
            <tr>
                <td>Subreddit Search</td>
                <td><a href="https://old.reddit.com/r/${encodeURIComponent(townName)}/search?q=subreddit:${townName}%20history">Subreddit Search</a></td>
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
