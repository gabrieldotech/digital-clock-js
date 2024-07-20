const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const dateElement = document.getElementById('date');

function newTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursElement.textContent = fixtime(hours);
    minutesElement.textContent = fixtime(minutes);
    secondsElement.textContent = fixtime(seconds);

    const dayNames = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const monthNames = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const day = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const currentDate = `Hoje é ${day}, dia ${date.getDate()} de ${month} de ${year}.`;

    dateElement.textContent = currentDate;
}

function fixtime(time) {
    return time < 10 ? '0' + time : time;
}

newTime();
setInterval(newTime, 1000);
