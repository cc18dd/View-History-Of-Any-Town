function lookupTown() {
    var townName = document.getElementById("townName").value.trim();
    var resultsTableBody = document.getElementById("resultsTableBody");
    var metaDescriptionTableBody = document.getElementById("metaDescriptionTableBody");

    if (townName !== "") {
        resultsTableBody.innerHTML = `
            <tr>
                <td>TopoView</td>
                <td><a href="https://ngmdb.usgs.gov/topoview/?q=${encodeURIComponent(townName)}" target="_blank">Link</a></td>
                <td id="topoViewMetaDescription"></td>
            </tr>
            <!-- Add similar rows for other links -->
        `;

        // Fetch meta descriptions for each link
        fetchMetaDescription("https://ngmdb.usgs.gov/topoview/?q=" + encodeURIComponent(townName), "topoViewMetaDescription");
        // Add similar fetchMetaDescription calls for other links
    } else {
        resultsTableBody.innerHTML = `
            <tr>
                <td colspan="3">Please enter a town name.</td>
            </tr>
        `;
    }
}

// Function to fetch meta description and update the table cell
function fetchMetaDescription(url, cellId) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Parse the HTML to extract the meta description
            var parser = new DOMParser();
            var doc = parser.parseFromString(html, "text/html");
            var metaDescription = doc.querySelector('meta[name="description"]');
            var descriptionContent = metaDescription ? metaDescription.getAttribute("content") : "No description available";

            // Update the table cell with the meta description
            document.getElementById(cellId).textContent = descriptionContent;
        })
        .catch(error => {
            console.error("Error fetching meta description:", error);
            // Handle errors if necessary
        });
}
