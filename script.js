// Data sederhana untuk sinopsis
const dramaData = {
    "Love Beyond The Grave": "Drama fantasi romansa Tiongkok tentang He Simu, master hantu/roh 400 tahun, dan Duan Xu, jenderal manusia misterius.",
    "Hidden Love": "Drama manis tentang cinta terpendam selama bertahun-tahun antara Sang Zhi dan teman kakaknya.",
    "The Untamed": "Perjalanan heroik dua kultivator dalam mengungkap misteri gelap di dunia persilatan."
};

const modal = document.getElementById("dramaModal");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const title = card.querySelector("h3").innerText;
        const img = card.querySelector("img").src;

        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalImg").src = img;
        document.getElementById("modalDesc").innerText = dramaData[title] || "Sinopsis tidak tersedia.";
        
        modal.style.display = "block";
    });
});

// Tutup modal saat klik tanda X
document.querySelector(".close-btn").onclick = () => modal.style.display = "none";

// Tutup modal saat klik area luar kotak
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}
