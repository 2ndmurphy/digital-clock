function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var formattedHours = hours < 10 ? "0" + hours : hours;
    var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    var jamElement = document.getElementById("jam");
    jamElement.textContent = formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;

    // Ganti warna border berdasarkan detik
    if (seconds % 2 === 0) {
        jamElement.style.borderColor = "red";
    } else {
        jamElement.style.borderColor = "blue";
    }
}

// Pemanggilan fungsi setiap detik
setInterval(updateClock, 1000);

// Inisialisasi saat halaman dimuat pertama kali
updateClock();