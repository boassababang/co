document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    // Data simulasi berita
    const articles = [
        {
            title: "Teknologi AI Semakin Canggih, Apa Dampaknya bagi Pekerja?",
            category: "detikInet",
            time: "15 Menit yang lalu",
            img: "https://via.placeholder.com/200x120"
        },
        {
            title: "Resep Kuliner Tradisional yang Hits di Tahun 2024",
            category: "detikFood",
            time: "45 Menit yang lalu",
            img: "https://via.placeholder.com/200x120"
        },
        {
            title: "Tips Hemat Liburan ke Luar Negeri dengan Budget Minim",
            category: "detikTravel",
            time: "1 Jam yang lalu",
            img: "https://via.placeholder.com/200x120"
        }
    ];

    // Fungsi untuk menampilkan berita
    function loadNews() {
        articles.forEach(item => {
            const card = document.createElement('div');
            card.className = 'news-card';
            card.innerHTML = `
                <img src="${item.img}" alt="News Image">
                <div class="news-content">
                    <span class="category">${item.category}</span>
                    <h4>${item.title}</h4>
                    <span class="time">${item.time}</span>
                </div>
            `;
            newsContainer.appendChild(card);
        });
    }

    loadNews();

    // Efek interaktif sederhana pada search
    const searchBtn = document.querySelector('.search-bar button');
    searchBtn.addEventListener('click', () => {
        const query = document.querySelector('.search-bar input').value;
        if(query) {
            alert('Mencari berita: ' + query);
        } else {
            alert('Silakan masukkan kata kunci!');
        }
    });
});
