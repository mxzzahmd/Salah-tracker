// Display today's date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('date-display').innerText = new Date().toLocaleDateString(undefined, options);

// Load saved data when the page opens
document.addEventListener("DOMContentLoaded", () => {
    // Load prayers
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    prayers.forEach(prayer => {
        const isCompleted = localStorage.getItem(prayer) === 'true';
        if (isCompleted) {
            const button = document.querySelector(`button[onclick="togglePrayer('${prayer}')"]`);
            if (button) button.classList.add('active');
        }
    });

    // Load Quran verses
    const savedVerses = localStorage.getItem('versesRead');
    if (savedVerses) {
        document.getElementById('verse-count').value = savedVerses;
    }
});

// Function to save prayer data and change color
function togglePrayer(prayerName) {
    const button = document.querySelector(`button[onclick="togglePrayer('${prayerName}')"]`);
    
    // Check if it's already active
    const isActive = button.classList.contains('active');
    
    if (isActive) {
        button.classList.remove('active');
        localStorage.setItem(prayerName, 'false');
    } else {
        button.classList.add('active');
        localStorage.setItem(prayerName, 'true');
    }
}

// Function to save Quran recitation
function saveRecitation() {
    const verses = document.getElementById('verse-count').value;
    localStorage.setItem('versesRead', verses);
    alert("Progress saved!");
}
