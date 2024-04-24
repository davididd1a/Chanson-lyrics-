// script.js

// Function to handle form submission and save song
document.getElementById('songForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const lyrics = document.getElementById('lyrics').value;

    // Save the song data to a new HTML file
    saveSong(title, artist, lyrics);

    // Reset the form
    document.getElementById('songForm').reset();
});

// Function to save song data to a new HTML file
function saveSong(title, artist, lyrics) {
    const songHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>${title}</h1>
        <h2>${artist}</h2>
        <p>${lyrics}</p>
        <a href="index.html">Back to Add Song</a>
    </body>
    </html>
    `;

    // Save song HTML to a new file
    // You can implement this part with Node.js file system module
    // For simplicity, we'll just log the HTML content to the console
    console.log(songHTML);
}

// Function to display all saved songs on the songs.html page
function displaySongs() {
    // This function will be implemented later
}
