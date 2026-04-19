const dramas = [
    { title: "Love Between Fairy and Devil", genre: "xianxia" },
    { title: "Who Rules The World", genre: "wuxia" },
    { title: "Hidden Love", genre: "modern" },
    { title: "Lighter and Princess", genre: "school" },
    { title: "Falling Into Your Smile", genre: "esport" },
    { title: "Story of Kunning Palace", genre: "history" },
    { title: "Arsenal Military Academy", genre: "republican" }
];

function displayDramas(filter) {
    const container = document.getElementById('drama-container');
    container.innerHTML = "";

    const filtered = filter === 'all' ? dramas : dramas.filter(d => d.genre === filter);

    filtered.forEach(drama => {
        const card = document.createElement('div');
        card.className = 'drama-card';
        card.innerHTML = `
            <h3>${drama.title}</h3>
            <p style="color: #d4af37;">${drama.genre.toUpperCase()}</p>
        `;
        container.appendChild(card);
    });
}

function filterGenre(genre) {
    displayDramas(genre);
}

// Jalankan saat pertama kali dibuka
displayDramas('all');
