const dramas = [
    {
        title: "Hidden Love",
        chineseTitle: "偷偷藏不住",
        genre: "Romance / Youth",
        desc: "Kisah cinta manis tentang seorang gadis yang jatuh cinta pada teman kakaknya sejak remaja.",
        image: "https://m.media-amazon.com/images/M/MV5BMGU5YmQ4YjgtM2FiYS00ZGFhLTkzYTMtM2FjMGUyZDIzZTA5XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
        title: "Love Like The Galaxy",
        chineseTitle: "星汉灿烂",
        genre: "Historical / Mystery",
        desc: "Cheng Shaoshang yang cerdik bertemu dengan jenderal muda Ling Buyi dalam pencarian jati diri.",
        image: "https://m.media-amazon.com/images/M/MV5BMGY1NTU0NjEtNmRkMC00OTk1LWI4YmYtNjdiMDIyYWRiOWI1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg"
    },
    {
        title: "Story of Kunning Palace",
        chineseTitle: "宁安如梦",
        genre: "Wuxia / Palace",
        desc: "Seorang wanita mendapatkan kesempatan kedua untuk mengubah takdir tragisnya di istana.",
        image: "https://m.media-amazon.com/images/M/MV5BNGEyYTMzMGUtM2I2My00YjVjLThjNmUtZGM4N2ZlYjM0ZDIyXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_.jpg"
    },
    {
        title: "The Untamed",
        chineseTitle: "陈情令",
        genre: "Xianxia / Action",
        desc: "Dua pengkultivasi berbakat berusaha memecahkan misteri kelam di masa lalu.",
        image: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWI4LTgzYTUtYmI0Y2Y0YmI0N2M5XkEyXkFqcGdeQXVyMTA2MDUzOTY5._V1_.jpg"
    }
];

function displayDramas() {
    const grid = document.getElementById('dramaGrid');
    
    dramas.forEach(drama => {
        const card = document.createElement('div');
        card.className = 'drama-card';
        
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${drama.image}')"></div>
            <div class="card-info">
                <h3>${drama.chineseTitle}</h3>
                <h4 style="font-size: 0.9rem; margin-bottom: 10px;">${drama.title}</h4>
                <p>${drama.desc}</p>
                <span class="genre-tag">${drama.genre}</span>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Jalankan fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', displayDramas);
