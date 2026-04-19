// Ganti isi script.js dengan ini untuk tes awal
const dramas = [
    {
        title: "Testing Drama",
        chineseTitle: "测试",
        genre: "Modern",
        desc: "Jika ini muncul, berarti script sudah jalan!",
        image: "https://via.placeholder.com/300x450" 
    }
];

function displayDramas() {
    const grid = document.getElementById('dramaGrid');
    if(!grid) return; // Keamanan jika id tidak ketemu
    
    grid.innerHTML = ""; // Bersihkan grid

    dramas.forEach(drama => {
        const card = document.createElement('div');
        card.className = 'drama-card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${drama.image}'); background-color: #333;"></div>
            <div class="card-info">
                <h3>${drama.chineseTitle}</h3>
                <h4>${drama.title}</h4>
                <p>${drama.desc}</p>
                <span class="genre-tag">${drama.genre}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', displayDramas);
