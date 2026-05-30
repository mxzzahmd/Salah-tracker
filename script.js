// Data object containing all 114 Surahs and their precise verse counts
const quranData = [
    { name: "Al-Fatihah", ayahs: 7 }, { name: "Al-Baqarah", ayahs: 286 }, { name: "Ali 'Imran", ayahs: 200 }, { name: "An-Nisa", ayahs: 176 }, { name: "Al-Ma'idah", ayahs: 120 }, { name: "Al-An'am", ayahs: 165 }, { name: "Al-A'raf", ayahs: 206 }, { name: "Al-Anfal", ayahs: 75 }, { name: "At-Tawbah", ayahs: 129 }, { name: "Yunus", ayahs: 109 }, { name: "Hud", ayahs: 123 }, { name: "Yusuf", ayahs: 111 }, { name: "Ar-Ra'd", ayahs: 43 }, { name: "Ibrahim", ayahs: 52 }, { name: "Al-Hijr", ayahs: 99 }, { name: "An-Nahl", ayahs: 128 }, { name: "Al-Isra", ayahs: 111 }, { name: "Al-Kahf", ayahs: 110 }, { name: "Maryam", ayahs: 98 }, { name: "Ta-Ha", ayahs: 135 }, { name: "Al-Anbiya", ayahs: 112 }, { name: "Al-Hajj", ayahs: 78 }, { name: "Al-Mu'minun", ayahs: 118 }, { name: "An-Nur", ayahs: 64 }, { name: "Al-Furqan", ayahs: 77 }, { name: "Ash-Shu'ara", ayahs: 227 }, { name: "An-Naml", ayahs: 93 }, { name: "Al-Qasas", ayahs: 88 }, { name: "Al-Ankabut", ayahs: 69 }, { name: "Ar-Rum", ayahs: 60 }, { name: "Luqman", ayahs: 34 }, { name: "As-Sajdah", ayahs: 30 }, { name: "Al-Ahzab", ayahs: 73 }, { name: "Saba", ayahs: 54 }, { name: "Fatir", ayahs: 45 }, { name: "Ya-Sin", ayahs: 83 }, { name: "As-Saffat", ayahs: 182 }, { name: "Sad", ayahs: 88 }, { name: "Az-Zumar", ayahs: 75 }, { name: "Ghafir", ayahs: 85 }, { name: "Fussilat", ayahs: 54 }, { name: "Ash-Shura", ayahs: 53 }, { name: "Az-Zukhruf", ayahs: 89 }, { name: "Ad-Dukhan", ayahs: 59 }, { name: "Al-Jathiyah", ayahs: 37 }, { name: "Al-Ahqaf", ayahs: 35 }, { name: "Muhammad", ayahs: 38 }, { name: "Al-Fath", ayahs: 29 }, { name: "Al-Hujurat", ayahs: 18 }, { name: "Qaf", ayahs: 45 }, { name: "Adh-Dhariyat", ayahs: 60 }, { name: "At-Tur", ayahs: 49 }, { name: "An-Najm", ayahs: 62 }, { name: "Al-Qamar", ayahs: 55 }, { name: "Ar-Rahman", ayahs: 78 }, { name: "Al-Waqi'ah", ayahs: 96 }, { name: "Al-Hadid", ayahs: 29 }, { name: "Al-Mujadilah", ayahs: 22 }, { name: "Al-Hashr", ayahs: 24 }, { name: "Al-Mumtahanah", ayahs: 13 }, { name: "As-Saff", ayahs: 14 }, { name: "Al-Jumu'ah", ayahs: 11 }, { name: "Al-Munafiqun", ayahs: 11 }, { name: "At-Taghabun", ayahs: 18 }, { name: "At-Talaq", ayahs: 12 }, { name: "At-Tahrim", ayahs: 12 }, { name: "Al-Mulk", ayahs: 30 }, { name: "Al-Qalam", ayahs: 52 }, { name: "Al-Haqqah", ayahs: 52 }, { name: "Al-Ma'arij", ayahs: 44 }, { name: "Nuh", ayahs: 28 }, { name: "Al-Jinn", ayahs: 28 }, { name: "Al-Muzzammil", ayahs: 20 }, { name: "Al-Muddaththir", ayahs: 56 }, { name: "Al-Qiyamah", ayahs: 40 }, { name: "Al-Insan", ayahs: 31 }, { name: "Al-Mursalat", ayahs: 50 }, { name: "An-Naba", ayahs: 40 }, { name: "An-Nazi'at", ayahs: 46 }, { name: "Abasa", ayahs: 42 }, { name: "At-Takwir", ayahs: 29 }, { name: "Al-Infitar", ayahs: 19 }, { name: "Al-Mutaffifin", ayahs: 36 }, { name: "Al-Inshiqaq", ayahs: 25 }, { name: "Al-Buruj", ayahs: 22 }, { name: "At-Tariq", ayahs: 17 }, { name: "Al-A'la", ayahs: 19 }, { name: "Al-Ghashiyah", ayahs: 26 }, { name: "Al-Fajr", ayahs: 30 }, { name: "Al-Balad", ayahs: 20 }, { name: "Ash-Shams", ayahs: 15 }, { name: "Al-Layl", ayahs: 21 }, { name: "Ad-Duha", ayahs: 11 }, { name: "Ash-Sharh", ayahs: 8 }, { name: "At-Tin", ayahs: 8 }, { name: "Al-Alaq", ayahs: 19 }, { name: "Al-Qadr", ayahs: 5 }, { name: "Al-Bayyinah", ayahs: 8 }, { name: "Az-Zalzalah", ayahs: 8 }, { name: "Al-Adiyat", ayahs: 11 }, { name: "Al-Qari'ah", ayahs: 11 }, { name: "At-Takathur", ayahs: 8 }, { name: "Al-Asr", ayahs: 3 }, { name: "Al-Humazah", ayahs: 9 }, { name: "Al-Fil", ayahs: 5 }, { name: "Quraysh", ayahs: 4 }, { name: "Al-Ma'un", ayahs: 7 }, { name: "Al-Kauthar", ayahs: 3 }, { name: "Al-Kafirun", ayahs: 6 }, { name: "An-Nasr", ayahs: 3 }, { name: "Al-Masad", ayahs: 5 }, { name: "Al-Ikhlas", ayahs: 4 }, { name: "Al-Falaq", ayahs: 5 }, { name: "An-Nas", ayahs: 6 }
];

// Display today's date formatted nicely
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('date-display').innerText = new Date().toLocaleDateString(undefined, options);

// Centralized Startup Loop
document.addEventListener("DOMContentLoaded", () => {
    const surahSelect = document.getElementById('surah-select');
    
    // 1. Populate the main Surah selector dropdown wheel
    quranData.forEach((surah, index) => {
        let opt = document.createElement('option');
        opt.value = index; 
        opt.innerText = `${index + 1}. ${surah.name} (${surah.ayahs} ayahs)`;
        surahSelect.appendChild(opt);
    });

    // 2. Setup the initial verse selectors (Default to Al-Fatihah numbers)
    updateVerseSelectors();

    // 3. Load active prayer button checkbox highlights
    ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].forEach(prayer => {
        if (localStorage.getItem(prayer) === 'true') {
            document.getElementById(`btn-${prayer}`).classList.add('active');
        }
    });

    // 4. Fill in saved location inputs and historical logs
    document.getElementById('city-input').value = localStorage.getItem('city') || '';
    document.getElementById('country-input').value = localStorage.getItem('country') || '';
    renderHistory();
    fetchPrayerTimes();

    // 5. Start background clock tracking loop (Runs once every 60 seconds)
    setInterval(checkTimersForNotifications, 60000);

    // 6. Connect Service Worker for PWA framework mechanics
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
});

// Dynamically changes "From" and "To" scroll wheel options based on chosen Surah
function updateVerseSelectors() {
    const surahIndex = document.getElementById('surah-select').value;
    const totalAyahs = quranData[surahIndex].ayahs;

    const startSelect = document.getElementById('verse-start');
    const endSelect = document.getElementById('verse-end');

    startSelect.innerHTML = '';
    endSelect.innerHTML = '';

    for (let i = 1; i <= totalAyahs; i++) {
        let optStart = document.createElement('option');
        optStart.value = i;
        optStart.innerText = i;
        startSelect.appendChild(optStart);

        let optEnd = document.createElement('option');
        optEnd.value = i;
        optEnd.innerText = i;
        endSelect.appendChild(optEnd);
    }
    
    endSelect.value = totalAyahs; // Auto-select final verse as convenience
}

// Save dynamic recitation input ranges
function saveRecitation() {
    const surahIndex = document.getElementById('surah-select').value;
    const surahName = quranData[surahIndex].name;
    
    const start = parseInt(document.getElementById('verse-start').value);
    const end = parseInt(document.getElementById('verse-end').value);

    if (start > end) {
        alert("The starting verse cannot be greater than the ending verse!");
        return;
    }

    const now = new Date();
    const timestamp = now.toLocaleDateString() + ' @ ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    let history = JSON.parse(localStorage.getItem('quranHistory')) || [];
    
    history.unshift({ timestamp: timestamp, surah: surahName, start: start, end: end });
    localStorage.setItem('quranHistory', JSON.stringify(history));

    renderHistory();
    alert(`Saved: ${surahName} (Verses ${start}-${end})`);
}

// Fetch API Prayer Times based on location inputs
function fetchPrayerTimes() {
    const city = document.getElementById('city-input').value || "London";
    const country = document.getElementById('country-input').value || "UK";
    
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);

    fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`)
    .then(res => res.json())
    .then(data => {
        if(data.data) {
            const timings = data.data.timings;
            localStorage.setItem('prayerTimesJSON', JSON.stringify(timings));
            ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].forEach(p => {
                document.getElementById(`time-${p}`).innerText = timings[p];
            });
        }
    }).catch(err => console.log("Failed fetching timings: ", err));
}

// Toggle prayer visual buttons and persist data
function togglePrayer(prayerName) {
    const button = document.getElementById(`btn-${prayerName}`);
    const active = button.classList.toggle('active');
    localStorage.setItem(prayerName, active ? 'true' : 'false');
}

// Render dynamic checklist logs with a deletion intercept
function renderHistory() {
    const listElement = document.getElementById('history-list');
    listElement.innerHTML = '';
    let history = JSON.parse(localStorage.getItem('quranHistory')) || [];
    
    if (history.length === 0) {
        listElement.innerHTML = '<li>No history recorded yet.</li>';
        return;
    }

    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.marginBottom = "10px";
        li.style.padding = "6px 0";
        li.style.borderBottom = "1px dashed #eee";

        const textSpan = document.createElement('span');
        textSpan.innerHTML = `📖 <strong>${item.surah}</strong> (v. ${item.start}-${item.end}) <br> <small style="color:#888;">${item.timestamp}</small>`;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = "×";
        deleteBtn.title = "Delete entry";
        deleteBtn.style.background = "none";
        deleteBtn.style.color = "#cc0000";
        deleteBtn.style.border = "none";
        deleteBtn.style.fontSize = "20px";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.style.padding = "0 10px";
        
        deleteBtn.onclick = () => deleteHistoryItem(index);

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        listElement.appendChild(li);
    });
}

// Delete historical elements out of local storage sequence arrays
function deleteHistoryItem(index) {
    let history = JSON.parse(localStorage.getItem('quranHistory')) || [];
    history.splice(index, 1);
    localStorage.setItem('quranHistory', JSON.stringify(history));
    renderHistory();
}

// Background Time Monitor checking loop for automated notification scheduling
function checkTimersForNotifications() {
    const cachedTimes = JSON.parse(localStorage.getItem('prayerTimesJSON'));
    if (!cachedTimes) return;

    const now = new Date();
    const currentHourMin = now.toTimeString().split(' ')[0].substring(0, 5);

    ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].forEach(prayer => {
        if (cachedTimes[prayer] === currentHourMin) {
            sendPushNotification(`Time for ${prayer}`, `It is now time to perform your ${prayer} prayer.`);
        }
    });
}

// Prompt browser clearance rules for notifications
function requestNotificationPermission() {
    if (!('Notification' in window)) return;
    Notification.requestPermission().then(p => {
        if (p === 'granted') {
            sendPushNotification("Reminders Connected!", "You will now receive alerts at local prayer timings.");
        }
    });
}

// Fire actual OS payload notifications
function sendPushNotification(title, msg) {
    if (Notification.permission === 'granted' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(title, { body: msg, icon: "icon.png" });
        });
    }
}
