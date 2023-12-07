// loadHeader.js
document.addEventListener('DOMContentLoaded', function () {
    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Specify the path to your header file
    var headerPath = 'headers.html';

    // Use the GET method to retrieve the content of the header file
    xhr.open('GET', headerPath, true);

    // Define the callback function to handle the response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Insert the header content into the headerContainer
            document.getElementById('headerContainer').innerHTML = xhr.responseText;
        }
    };

    // Send the request
    xhr.send();
});

