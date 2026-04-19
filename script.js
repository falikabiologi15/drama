const dramaData = {
    "Love Beyond the Grave": "Kisah cinta abadi yang melampaui kematian melalui ritual terlarang.",
    "Hidden Love": "Cinta terpendam Sang Zhi kepada teman kakaknya, Duan Jiaxu.",
    "The Untamed": "Perjalanan Wei Wuxian dan Lan Wangji memecahkan misteri dunia kultivasi.",
    "Who Rules The World": "Persaingan dan cinta antara dua ahli bela diri tak terkalahkan.",
    "Eternal Love": "Kisah cinta tiga kehidupan antara dewi rubah dan putra mahkota langit.",
    "Lighter and Princess": "Kisah cinta programmer jenius dan gadis berkemauan keras.",
    "Till The End of The Moon": "Perjuangan dewi untuk menghentikan kebangkitan Raja Iblis.",
    "Story of Kunning Palace": "Kesempatan kedua seorang ratu untuk memperbaiki masa lalunya.",
    "Amidst a Snowstorm of Love": "Pertemuan manis dua pemain biliar profesional di tengah badai salju.",
    "Wonderland of Love": "Pertemuan jenderal pemberontak dan putri prajurit yang menyamar."
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
