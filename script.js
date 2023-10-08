function lookupTown() {
    var townName = document.getElementById("townName").value.trim();
    var resultsTableBody = document.getElementById("resultsTableBody");

    if (townName !== "") {
        resultsTableBody.innerHTML = `
            <tr>
                <td>VintageAerial</td>
                <td><a href="https://vintageaerial.com/photos/search?q=${encodeURIComponent(townName)}">Link</a></td>
                <td></td>
            </tr>
            <tr>
                <td>City-Data</td>
                <td><a href="https://www.city-data.com/search/?&siteurl=www.city-data.com/#&gsc.q=${encodeURIComponent(townName)}">Link</a></td>
                <td></td>
            </tr>
            <tr>
                <td>ExtremeWeatherWatch</td>
                <td><a href="https://www.extremeweatherwatch.com/cities/${encodeURIComponent(townName)}">Link</a></td>
                <td></td>
            </tr>
            <tr>
                <td>PlaneCrashMap</td>
                <td><a href="https://www.google.com/search?q=site:planecrashmap.com%20${encodeURIComponent(townName)}">Link</a></td>
                <td></td>
            </tr>
            <tr>
                <td>Wikipedia</td>
                <td><a href="https://en.wikipedia.org/wiki/${encodeURIComponent(townName)}">Link</a></td>
                <td></td>
            </tr>
            <tr>
                <td>US Census</td>
                <td><a href="https://data.census.gov/all?q=${encodeURIComponent(townName)}">Link</a></td>
                <td></td>
            </tr>
            <tr>
                <td>Google Maps</td>
                <td><a href="https://google.com/maps/search/${encodeURIComponent(townName)}">Link</a></td>
                <td></td>
            </tr>
            <tr>
                <td>Facebook</td>
                <td><a href="https://www.facebook.com/search/?q=${encodeURIComponent(townName)}%20History">Link</a></td>
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
