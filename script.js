const dramas = [
    { title: "Love Beyond the Grave", genre: "Xianxia, Romance", desc: "Kisah cinta abadi yang melampaui batas dunia manusia dan alam baka.", img: "https://via.placeholder.com/300x450/8b0000/ffffff?text=Beyond+Grave" },
    { title: "Veil of Shadows", genre: "Wuxia, Mystery", desc: "Seorang detektif kekaisaran mengungkap konspirasi besar di balik topeng para bangsawan.", img: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Shadows" },
    { title: "Generation to Generation", genre: "Family, Drama", desc: "Saga keluarga yang mempertahankan tradisi teh di tengah modernisasi zaman.", img: "https://via.placeholder.com/300x450/222/ffffff?text=Generation" },
    { title: "Pursuit of Jade", genre: "Historical, Adventure", desc: "Perjalanan mencari pusaka giok legendaris yang konon bisa mengubah takdir bangsa.", img: "https://via.placeholder.com/300x450/8b0000/ffffff?text=Jade" },
    { title: "The First Frost", genre: "Modern, Romance", desc: "Pertemuan kembali dua mantan kekasih di tengah musim dingin yang mengubah segalanya.", img: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=First+Frost" },
    { title: "Beauty of Resilience", genre: "Historical, Female Lead", desc: "Perjuangan seorang wanita dari kalangan bawah menjadi penasihat perang yang disegani.", img: "https://via.placeholder.com/300x450/222/ffffff?text=Resilience" },
    { title: "Love in the Clouds", genre: "Romance, Pilot/Aviation", desc: "Romansa antara pilot berbakat dan teknisi menara pengawas di bandara internasional.", img: "https://via.placeholder.com/300x450/8b0000/ffffff?text=Clouds" },
    { title: "Admist a Snowstorm of Love", genre: "Sport, Romance", desc: "Cinta yang tumbuh di antara dua pemain biliar profesional di tengah badai salju Finlandia.", img: "https://via.placeholder.com/300x450/1a1a1a/ffffff?text=Snowstorm" },
    { title: "Lighter and Princess", genre: "Youth, IT Drama", desc: "Kisah jenius pemrograman dan gadis jujur yang membangun masa depan dari nol.", img: "https://via.placeholder.com/300x450/222/ffffff?text=Lighter" },
    { title: "Fangs of Fortune", genre: "Fantasy, Action", desc: "Pasukan pemburu iblis yang harus bekerja sama dengan makhluk yang mereka benci demi keselamatan dunia.", img: "https://via.placeholder.com/300x450/8b0000/ffffff?text=Fangs" }
];

const grid = document.getElementById('main-grid');
const modal = document.getElementById('dramaModal');

// Render Cards
dramas.forEach((drama, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${drama.img}" alt="${drama.title}">
        <div class="card-info">
            <h3>${drama.title}</h3>
            <span>${drama.genre}</span>
        </div>
    `;
    card.onclick = () => showDetail(drama);
    grid.appendChild(card);
});

function showDetail(drama) {
    document.getElementById('modalTitle').innerText = drama.title;
    document.getElementById('modalGenre').innerText = drama.genre;
    document.getElementById('modalDesc').innerText = drama.desc;
    document.getElementById('modalImg').src = drama.img;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

document.querySelector('.close-btn').onclick = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
};

window.onclick = (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
