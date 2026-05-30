// Display today's date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('date-display').innerText = new Date().toLocaleDateString(undefined, options);

// Function to save prayer data
function togglePrayer(prayerName) {
    // For now, we'll just alert the action. 
    // In a full app, this would change the color and save to localStorage.
    alert(prayerName + " marked as completed!");
}

function saveRecitation() {
    const verses = document.getElementById('verse-count').value;
    if(verses) {
        localStorage.setItem('versesRead', verses);
        alert("Progress saved: " + verses + " verses.");
    }
}