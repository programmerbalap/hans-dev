function updateClock() {
    const clock = document.getElementById('clock');
    const clockSecond = document.getElementById('clock-second');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');


    clock.textContent = `${hours}:${minutes}`;
    clockSecond.textContent = `${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

function updateCalendar() {
    const tanggal = document.getElementById('tanggal');
    const copyrightYear = document.getElementById('copyright-year');
    const now = new Date();

    const days = [
        "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
    ];
    const dayName = days[now.getDay()];

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    copyrightYear.textContent = `${year}`;
    tanggal.textContent = `${dayName}, ${day}/${month}/${year}`;
}
updateCalendar();


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


// document.addEventListener("contextmenu", (e) => e.preventDefault());

// document.addEventListener("keydown", (e) => {
//     if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "v")) {
//         e.preventDefault();
//     }
// });

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
            pageLanguage: 'id',
            includedLanguages: 'en,id,ja,ar,cn',
        },
        'google_translate'
    );
}

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typewriter");
    const texts = [
        "Jangan ragu untuk menghubungi saya melalui form di bawah ini.",
        "Gunakan kontak langsung yang tersedia.",
        "Saya siap membantu Anda!"
    ];
    let currentIndex = 0; // Indeks teks saat ini
    let charIndex = 0; // Indeks karakter saat ini
    let isDeleting = false; // Status apakah sedang menghapus teks
    const typingSpeed = 100; // Kecepatan mengetik
    const deletingSpeed = 50; // Kecepatan menghapus
    const delayBetweenTexts = 1000; // Jeda antar teks

    function type() {
        const currentText = texts[currentIndex];
        if (isDeleting) {
            charIndex--; // Menghapus karakter satu per satu
        } else {
            charIndex++; // Mengetik karakter satu per satu
        }

        // Perbarui teks pada elemen
        textElement.textContent = currentText.substring(0, charIndex);

        // Tentukan kecepatan animasi
        let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

        // Jika selesai mengetik sebuah teks
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true; // Beralih ke mode menghapus
            currentSpeed = delayBetweenTexts; // Jeda sebelum mulai menghapus
        }

        // Jika selesai menghapus sebuah teks
        if (isDeleting && charIndex === 0) {
            isDeleting = false; // Beralih ke mode mengetik
            currentIndex = (currentIndex + 1) % texts.length; // Pindah ke teks berikutnya
        }

        // Ulangi fungsi ini dengan delay
        setTimeout(type, currentSpeed);
    }

    type(); // Mulai animasi mengetik
});