// Display today's date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('date-display').innerText = new Date().toLocaleDateString(undefined, options);

// Load data when page loads
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load active prayer button states
    ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].forEach(prayer => {
        const isCompleted = localStorage.getItem(prayer) === 'true';
        if (isCompleted) {
            document.getElementById(`btn-${prayer}`).classList.add('active');
        }
    });

    // 2. Render Quran History list
    renderHistory();

    // 3. Register PWA Service Worker (Needed for Home Screen & Notifications)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
        .then(() => console.log("Service Worker Registered"));
    }
});

// Fix: Function to toggle prayer visually and save state
function togglePrayer(prayerName) {
    const button = document.getElementById(`btn-${prayerName}`);
    const isActive = button.classList.contains('active');

    if (isActive) {
        button.classList.remove('active');
        localStorage.setItem(prayerName, 'false');
    } else {
        button.classList.add('active');
        localStorage.setItem(prayerName, 'true');
    }
}

// Function to save Quran recitation with dynamic date/time stamps
function saveRecitation() {
    const versesInput = document.getElementById('verse-count');
    const count = versesInput.value;
    
    if (!count || count <= 0) {
        alert("Please enter a valid number of verses.");
        return;
    }

    // Capture current date and time
    const now = new Date();
    const timestamp = now.toLocaleDateString() + ' @ ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    // Retrieve existing logs or make a new array
    let history = JSON.parse(localStorage.getItem('quranHistory')) || [];
    
    // Add new log entry
    history.unshift({ timestamp: timestamp, verses: count });
    
    // Save back to local storage
    localStorage.setItem('quranHistory', JSON.stringify(history));
    
    // Clear input and update the screen list
    versesInput.value = '';
    renderHistory();
    alert(`Saved ${count} verses!`);
}

// Function to read history list from local storage and build HTML elements
function renderHistory() {
    const listElement = document.getElementById('history-list');
    listElement.innerHTML = ''; // Reset list
    
    let history = JSON.parse(localStorage.getItem('quranHistory')) || [];
    
    if (history.length === 0) {
        listElement.innerHTML = '<li>No history recorded yet.</li>';
        return;
    }

    history.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.verses} verses</strong> read on ${item.timestamp}`;
        listElement.appendChild(li);
    });
}

// --- NOTIFICATION FUNCTIONALITY ---
function requestNotificationPermission() {
    if (!('Notification' in window)) {
        alert("This browser does not support notifications.");
        return;
    }
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            alert("Reminders enabled successfully!");
            // Fire a quick baseline test notification
            navigator.serviceWorker.ready.then(reg => {
                reg.showNotification("Tracker Connected", {
                    body: "You will receive reminders to keep up your daily habits!",
                    icon: "icon.png"
                });
            });
        }
    });
}
