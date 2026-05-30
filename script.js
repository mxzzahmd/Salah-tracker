// List of all 114 Surahs for the selector populate loop
const surahs = ["Al-Fatihah","Al-Baqarah","Ali 'Imran","An-Nisa","Al-Ma'idah","Al-An'am","Al-A'raf","Al-Anfal","At-Tawbah","Yunus","Hud","Yusuf","Ar-Ra'd","Ibrahim","Al-Hijr","An-Nahl","Al-Isra","Al-Kahf","Maryam","Ta-Ha","Al-Anbiya","Al-Hajj","Al-Mu'minun","An-Nur","Al-Furqan","Ash-Shu'ara","An-Naml","Al-Qasas","Al-Ankabut","Ar-Rum","Luqman","As-Sajdah","Al-Ahzab","Saba","Fatir","Ya-Sin","As-Saffat","Sad","Az-Zumar","Ghafir","Fussilat","Ash-Shura","Az-Zukhruf","Ad-Dukhan","Al-Jathiyah","Al-Ahqaf","Muhammad","Al-Fath","Al-Hujurat","Qaf","Adh-Dhariyat","At-Tur","An-Najm","Al-Qamar","Ar-Rahman","Al-Waqi'ah","Al-Hadid","Al-Mujadilah","Al-Hashr","Al-Mumtahanah","As-Saff","Al-Jumu'ah","Al-Munafiqun","At-Taghabun","At-Talaq","At-Tahrim","Al-Mulk","Al-Qalam","Al-Haqqah","Al-Ma'arij","Nuh","Al-Jinn","Al-Muzzammil","Al-Muddaththir","Al-Qiyamah","Al-Insan","Al-Mursalat","An-Naba","An-Nazi'at","Abasa","At-Takwir","Al-Infitar","Al-Mutaffifin","Al-Inshiqaq","Al-Buruj","At-Tariq","Al-A'la","Al-Ghashiyah","Al-Fajr","Al-Balad","Ash-Shams","Al-Layl","Ad-Duha","Ash-Sharh","At-Tin","Al-Alaq","Al-Qadr","Al-Bayyinah","Az-Zalzalah","Al-Adiyat","Al-Qari'ah","At-Takathur","Al-Asr","Al-Humazah","Al-Fil","Quraysh","Al-Ma'un","Al-Kauthar","Al-Kafirun","An-Nasr","Al-Masad","Al-Ikhlas","Al-Falaq","An-Nas"];

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById('date-display').innerText = new Date().toLocaleDateString(undefined, options);

document.addEventListener("DOMContentLoaded", () => {
    // Populate Surah Dropdown
    const select = document.getElementById('surah-select');
    surahs.forEach((name, index) => {
        let opt = document.createElement('option');
        opt.value = name;
        opt.innerText = `${index + 1}. ${name}`;
        select.appendChild(opt);
    });

    // Load active prayer buttons
    ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].forEach(prayer => {
        if (localStorage.getItem(prayer) === 'true') {
            document.getElementById(`btn-${prayer}`).classList.add('active');
        }
    });

    // Populate Location values & History
    document.getElementById('city-input').value = localStorage.getItem('city') || '';
    document.getElementById('country-input').value = localStorage.getItem('country') || '';
    renderHistory();
    fetchPrayerTimes();

    // Start background tracking interval loops (Runs once every 60 seconds)
    setInterval(checkTimersForNotifications, 60000);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
});

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

function togglePrayer(prayerName) {
    const button = document.getElementById(`btn-${prayerName}`);
    const active = button.classList.toggle('active');
    localStorage.setItem(prayerName, active ? 'true' : 'false');
}

// Upgraded Quran Logger logic
function saveRecitation() {
    const surah = document.getElementById('surah-select').value;
    const start = document.getElementById('verse-start').value;
    const end = document.getElementById('verse-end').value;

    if (!start || !end || parseInt(start) > parseInt(end)) {
        alert("Please enter a valid range of verses.");
        return;
    }

    const now = new Date();
    const timestamp = now.toLocaleDateString() + ' @ ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    let history = JSON.parse(localStorage.getItem('quranHistory')) || [];
    
    history.unshift({ timestamp: timestamp, surah: surah, start: start, end: end });
    localStorage.setItem('quranHistory', JSON.stringify(history));

    document.getElementById('verse-start').value = '';
    document.getElementById('verse-end').value = '';
    renderHistory();
}

function renderHistory() {
    const listElement = document.getElementById('history-list');
    listElement.innerHTML = '';
    let history = JSON.parse(localStorage.getItem('quranHistory')) || [];
    
    if (history.length === 0) {
        listElement.innerHTML = '<li>No history recorded yet.</li>';
        return;
    }
    history.forEach(item => {
        const li = document.createElement('li');
        li.style.marginBottom = "8px";
        li.innerHTML = `📖 <strong>${item.surah}</strong> (v. ${item.start}-${item.end}) <br> <small style="color:#888;">${item.timestamp}</small>`;
        listElement.appendChild(li);
    });
}

// Background Time Monitor loop for notifications
function checkTimersForNotifications() {
    const cachedTimes = JSON.parse(localStorage.getItem('prayerTimesJSON'));
    if (!cachedTimes) return;

    const now = new Date();
    const currentHourMin = now.toTimeString().split(' ')[0].substring(0, 5); // Returns exactly "HH:MM"

    ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].forEach(prayer => {
        if (cachedTimes[prayer] === currentHourMin) {
            sendPushNotification(`Time for ${prayer}`, `It is now time to perform your ${prayer} prayer.`);
        }
    });
}

function requestNotificationPermission() {
    if (!('Notification' in window)) return;
    Notification.requestPermission().then(p => {
        if (p === 'granted') {
            sendPushNotification("Reminders Connected!", "You will now receive alerts at local prayer timings.");
        }
    });
}

function sendPushNotification(title, msg) {
    if (Notification.permission === 'granted' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(title, { body: msg, icon: "icon.png" });
        });
    }
}
