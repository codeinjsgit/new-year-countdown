window.onload = () => {
    const result = init();
    startCountdown(result);
}

const init = () => {
    const day = document.querySelector('#day');
    const hour = document.querySelector('#hour');
    const minute = document.querySelector('#minute');
    const second = document.querySelector('#second');

    const nextYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
    const today = Date.parse(new Date());
    const newYearDay = new Date(nextYearDate);
    const remainingTimestamp = newYearDay - today;
    const remainingDate = new Date(Date.parse(new Date()) + remainingTimestamp);

    return {
        time: remainingDate,
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
}

const startCountdown = (countdownObj) => {
    const updateCountdown = () => {
        const total = Date.parse(countdownObj.time) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        countdownObj.day.innerHTML = days;
        countdownObj.hour.innerHTML = ('0' + hours).slice(-2);
        countdownObj.minute.innerHTML = ('0' + minutes).slice(-2);
        countdownObj.second.innerHTML = ('0' + seconds).slice(-2);

        if (total <= 0) {
            clearInterval(interval);
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}