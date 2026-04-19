// 1. Data Sinopsis - Pastikan Judul di sini SAMA PERSIS dengan di HTML <h3>
const dramaData = {
    "Love Beyond the Grave": "Kisah cinta abadi yang melampaui kematian, di mana seorang pendekar berusaha membangkitkan kekasihnya melalui ritual terlarang.",
    "Hidden Love": "Drama manis tentang cinta terpendam Sang Zhi kepada teman kakaknya yang bernama Duan Jiaxu.",
    "The Untamed": "Perjalanan heroik dua kultivator dalam mengungkap konspirasi gelap di dunia persilatan.",
    "Who Rules The World": "Kisah petualangan dua ahli bela diri hebat yang terjebak dalam politik kerajaan dan cinta.",
    "Eternal Love": "Cinta legendaris tiga kehidupan antara dewi rubah Bai Qian dan Putra Mahkota Ye Hua.",
    "Lighter and Princess": "Kisah cinta penuh perjuangan antara programmer jenius Li Xun dan Zhu Yun.",
    "Till The End of The Moon": "Seorang dewi kembali ke masa lalu untuk mencegah bangkitnya Raja Iblis yang kejam.",
    "Story of Kunning Palace": "Seorang ratu mendapatkan kesempatan kedua untuk mengubah nasib tragisnya di masa lalu.",
    "Amidst a Snowstorm of Love": "Pertemuan romantis dua atlet biliar profesional di tengah badai salju di luar negeri.",
    "Wonderland of Love": "Persaingan taktik dan cinta antara jenderal garis depan dan putri prajurit yang menyamar."
};

// 2. Ambil elemen-elemen yang dibutuhkan
const modal = document.getElementById("dramaModal");
const cards = document.querySelectorAll(".card");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

// 3. Fungsi saat Card di-klik
cards.forEach(card => {
    card.addEventListener("click", () => {
        // Ambil teks judul dan hapus spasi berlebih
        const title = card.querySelector("h3").innerText.trim();
        const img = card.querySelector("img").src;

        console.log("Membuka drama:", title); // Untuk cek di console browser

        // Masukkan data ke dalam modal
        modalTitle.innerText = title;
        modalImg.src = img;
        
        // Ambil sinopsis berdasarkan judul, jika tidak ada tampilkan pesan default
        if (dramaData[title]) {
            modalDesc.innerText = dramaData[title];
        } else {
            modalDesc.innerText = "Sinopsis belum tersedia untuk judul: " + title;
        }

        // Tampilkan modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Biar background ga bisa di-scroll saat modal buka
    });

