function updateClock() {
    const clock = document.getElementById('clock');
    const clockSecond = document.getElementById('clock-second');
    const tanggal = document.getElementById('tanggal');
    const copyrightYear = document.getElementById('copyright-year');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const days = [
        "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
    ];
    const dayName = days[now.getDay()];

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
    const year = now.getFullYear();

    copyrightYear.textContent = `${year}`;
    tanggal.textContent = `${dayName}, ${day}/${month}/${year}`;
    clock.textContent = `${hours}:${minutes}`;
    clockSecond.textContent = `${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();


const texts = ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Node Js", "Express Js", "Vue Js", "Corel Draw", "Canva"];
let index = 0;

function rotateText() {
    const rotatingTextElement = document.getElementById("rotating-text");
    rotatingTextElement.textContent = texts[index];
    index = (index + 1) % texts.length;
}
setInterval(rotateText, 3000);
rotateText();


(function () {
    'use strict'
    document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
    document.querySelector('#close').addEventListener('click', function () {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
})();