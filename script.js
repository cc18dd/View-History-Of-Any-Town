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
            <!-- Add similar rows for other services -->
        `;
    } else {
        resultsTableBody.innerHTML = `
            <tr>
                <td colspan="3">Please enter a town name.</td>
            </tr>
        `;
    }
}
