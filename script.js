// 1. Database Sinopsis Drama
const dramaData = {
    "Love Beyond the Grave": "Kisah cinta abadi yang melampaui kematian, di mana seorang pendekar berusaha membangkitkan kekasihnya melalui ritual terlarang.",
    "Hidden Love": "Drama manis tentang cinta terpendam Sang Zhi kepada teman kakaknya yang bernama Duan Jiaxu selama bertahun-tahun.",
    "The Untamed": "Perjalanan heroik dua kultivator dalam mengungkap konspirasi gelap dan misteri di dunia persilatan (Jianghu).",
    "Who Rules The World": "Kisah petualangan dua ahli bela diri hebat yang terjebak dalam politik kerajaan dan persaingan cinta.",
    "Eternal Love": "Cinta legendaris melintasi tiga kehidupan antara dewi rubah Bai Qian dan Putra Mahkota langit Ye Hua.",
    "Lighter and Princess": "Kisah cinta penuh perjuangan dan inspirasi antara programmer jenius Li Xun dan gadis berkemauan keras Zhu Yun.",
    "Till The End of The Moon": "Seorang dewi kembali ke masa lalu untuk mencegah bangkitnya Raja Iblis kejam dengan mengubah takdirnya.",
    "Story of Kunning Palace": "Seorang ratu mendapatkan kesempatan kedua untuk hidup kembali dan memperbaiki kesalahan masa lalunya yang tragis.",
    "Amidst a Snowstorm of Love": "Pertemuan romantis antara dua atlet biliar profesional jenius di tengah badai salju di Helsinki.",
    "Wonderland of Love": "Persaingan taktik, keberanian, dan cinta antara jenderal garis depan dan putri prajurit yang menyamar."
};

// 2. Ambil Elemen DOM
const modal = document.getElementById("dramaModal");
const cards = document.querySelectorAll(".card");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

// 3. Fungsi untuk Membuka Modal
cards.forEach(card => {
    card.addEventListener("click", () => {
        // Ambil teks judul dari tag h3 dan hapus spasi kosong di awal/akhir
        const title = card.querySelector("h3").innerText.trim();
        const img = card.querySelector("img").src;

        // Masukkan data ke dalam modal
        modalTitle.innerText = title;
        modalImg.src = img;
        
        // Cari sinopsis berdasarkan judul
        if (dramaData[title]) {
            modalDesc.innerText = dramaData[title];
        } else {
            modalDesc.innerText = "Sinopsis untuk '" + title + "' sedang dalam perjalanan dari kekaisaran.";
        }

        // Tampilkan modal dengan efek smooth
        modal.style.display = "block";
        // Kunci scroll body agar tidak bergeser saat modal terbuka
        document.body.style.overflow = "hidden";
    });
});

// 4. Fungsi untuk Menutup Modal
closeBtn.onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

// Tutup modal jika user klik di luar kotak modal (area hitam)
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
