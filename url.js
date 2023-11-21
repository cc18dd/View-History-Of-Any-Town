function urlLook() {
        // Get the query parameter from the URL
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        // Check if the 'q' parameter is present
        if (urlParams.has('q')) {
            // Get the value of the 'q' parameter
            const queryValue = urlParams.get('q');

            // Set the townName variable to the query value
            const townName = queryValue;

            // Call the lookupTown() function with the extracted query
            lookupTown(townName);
        }
    }

