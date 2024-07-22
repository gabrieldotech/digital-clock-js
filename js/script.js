const timezoneLocales = {
    "America/Sao_Paulo": "pt-BR",
    "UTC": "en-US",
    "America/New_York": "en-US",
    "Europe/London": "en-GB",
    "Asia/Tokyo": "ja-JP",
    "Australia/Sydney": "en-AU"
};

const dayNames = {
    "pt-BR": ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
    "en-US": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    "en-GB": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    "ja-JP": ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    "en-AU": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};

const monthNames = {
    "pt-BR": ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    "en-US": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    "en-GB": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    "ja-JP": ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    "en-AU": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

function updateTime() {
    const now = new Date();
    const timezone = document.getElementById('timezone').value;

    const timezoneDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const tzHours = timezoneDate.getHours();
    const tzMinutes = timezoneDate.getMinutes();
    const tzSeconds = timezoneDate.getSeconds();

    const tzHoursStr = tzHours < 10 ? `0${tzHours}` : tzHours;
    const tzMinutesStr = tzMinutes < 10 ? `0${tzMinutes}` : tzMinutes;
    const tzSecondsStr = tzSeconds < 10 ? `0${tzSeconds}` : tzSeconds;

    document.getElementById('hours').textContent = tzHoursStr;
    document.getElementById('minutes').textContent = tzMinutesStr;
    document.getElementById('seconds').textContent = tzSecondsStr;

    updateDate(timezone, timezoneLocales[timezone]);
}

function updateDate(timezone, locale) {
    const now = new Date();
    const timezoneDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    
    const day = dayNames[locale][timezoneDate.getDay()];
    const month = monthNames[locale][timezoneDate.getMonth()];
    const year = timezoneDate.getFullYear();
    const dateStr = locale === "pt-BR" 
        ? `Hoje é ${day}, dia ${timezoneDate.getDate()} de ${month} de ${year}.`
        : timezoneDate.toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('date').textContent = dateStr;
}

function loadTimezone() {
    const savedTimezone = localStorage.getItem('selectedTimezone');
    if (savedTimezone) {
        document.getElementById('timezone').value = savedTimezone;
    }
    updateTime();
}

function saveTimezone() {
    const selectedTimezone = document.getElementById('timezone').value;
    localStorage.setItem('selectedTimezone', selectedTimezone);
    updateTime();
}

document.getElementById('timezone').addEventListener('change', saveTimezone);

setInterval(updateTime, 1000);
loadTimezone();
