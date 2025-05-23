const places = [
  // Şəhərlər
  {
    id: 1,
    type: 'city',
    name: 'Bakı',
    description: 'Azərbaycanın paytaxtı, müasir və tarixi abidələrlə zəngin.',
    image: 'https://bakufreetour.files.wordpress.com/2019/03/1-6-e1553537792133.jpg?w=1024',
    details: 'Bakı Xəzər dənizinin sahilində yerləşir və İçərişəhər, Flame Towers, Heydər Əliyev Mərkəzi kimi məşhur yerlərə sahibdir.',
    address: 'Bakı şəhəri, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Orta',
    rating: 4.8
  },
  {
    id: 2,
    type: 'city',
    name: 'Gəncə',
    description: 'Azərbaycanın qədim və gözəl şəhərlərindən biri.',
    image: 'https://gencexeber.az/wp-content/uploads/2022/05/opensource5.jpg',
    details: 'Gəncə öz tarixi abidələri və parkları ilə məşhurdur.',
    address: 'Gəncə şəhəri, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Orta',
    rating: 4.5
  },
  {
    id: 7,
    type: 'city',
    name: 'Şəki',
    description: 'Tarixi Şəki Xan Sarayı və gözəl təbiəti ilə məşhurdur.',
    image: 'https://gezginimgezgin.com/wp-content/uploads/2017/10/SEKI-GEZI-REHBERI-AZERBAYCANIN-YESIL-VE-SAKIN-SEHRI-REV.jpg?v=1590431558',
    details: 'Şəki şəhəri öz unikal memarlığı, şirniyyatları və təbiəti ilə tanınır. Şəki Xan Sarayı UNESCO-nun Dünya İrs Siyahısındadır.',
    address: 'Şəki şəhəri, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Orta',
    rating: 4.7
  },
  {
    id: 8,
    type: 'city',
    name: 'Quba',
    description: 'Dağlıq ərazilər və gözəl təbiəti ilə məşhurdur.',
    image: 'https://fed.az/upload/news/3672988.jpg',
    details: 'Quba şəhəri öz meyvə bağları, dağlıq əraziləri və milli mətbəxi ilə tanınır. Qırmızı Qəsəbə kimi unikal yerlərə sahibdir.',
    address: 'Quba şəhəri, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Orta',
    rating: 4.6
  },
  // Görməli Yerlər
  {
    id: 13,
    type: 'attraction',
    name: 'Şəki Xan Sarayı',
    description: 'UNESCO Dünya İrs Siyahısında olan unikal memarlıq abidəsi.',
    image: 'https://manera.az/uploads/posts/2018-05/1525767518_178111.jpg',
    details: 'Şəki Xan Sarayı 18-ci əsrdə inşa edilmiş, şəbəkə pəncərələri və rəngli vitrajları ilə məşhurdur. Sarayın interyeri milli ornamentlərlə bəzədilmişdir.',
    address: 'Şəki şəhəri, Azərbaycan',
    workingHours: '09:00 - 18:00',
    priceRange: 'Aşağı',
    rating: 4.9
  },
  {
    id: 14,
    type: 'attraction',
    name: 'Qız Qalası',
    description: 'Bakının ən qədim və məşhur abidələrindən biri.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2k96vrLDwqjCngD5XE3Ly2FGQJF-9ucaZNQ&s',
    details: 'Qız Qalası 12-ci əsrdə inşa edilmiş, Bakının simvolu hesab edilən tarixi qaladır. İçərişəhərdə yerləşir və Xəzər dənizinin gözəl mənzərəsini təqdim edir.',
    address: 'İçərişəhər, Bakı',
    workingHours: '10:00 - 18:00',
    priceRange: 'Aşağı',
    rating: 4.8
  },
  {
    id: 15,
    type: 'attraction',
    name: 'Şuşa Qalası',
    description: 'Qarabağın qədim və məşhur qalası.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/%C5%9Eu%C5%9Fa_qalas%C4%B1_2024-c%C3%BC_ilin_aprelind%C9%99.jpg/1200px-%C5%9Eu%C5%9Fa_qalas%C4%B1_2024-c%C3%BC_ilin_aprelind%C9%99.jpg',
    details: 'Şuşa Qalası 18-ci əsrdə inşa edilmiş, Qarabağın mədəni və tarixi mərkəzi olmuşdur. Qala divarları və tarixi məscidləri ilə məşhurdur.',
    address: 'Şuşa şəhəri, Azərbaycan',
    workingHours: '09:00 - 17:00',
    priceRange: 'Pulsuz',
    rating: 5.0
  },
  {
    id: 16,
    type: 'attraction',
    name: 'Heydər Əliyev Mərkəzi',
    description: 'Müasir memarlığın şah əsəri.',
    image: 'https://heydar-aliyev-foundation.org/uploads/images/img_9241_slide2.jpg',
    details: 'Heydər Əliyev Mərkəzi Zaha Hadid tərəfindən layihələndirilmiş, müasir memarlığın unikal nümunəsidir. Mərkəzdə müxtəlif sərgilər, konfranslar və mədəni tədbirlər keçirilir.',
    address: 'Heydər Əliyev prospekti 1, Bakı',
    workingHours: '10:00 - 20:00',
    priceRange: 'Orta',
    rating: 4.9
  },
  {
    id: 17,
    type: 'attraction',
    name: 'Atəşgah',
    description: 'Tarixi Zərdüşti məbədi.',
    image: 'https://unesco.preslib.az/images/site/image005.jpg',
    details: 'Atəşgah məbədi 17-18-ci əsrlərdə inşa edilmiş, təbii qaz yanğınları ilə məşhur olan tarixi Zərdüşti məbədidir. Məbəd beşbucaqlı formada inşa edilmişdir.',
    address: 'Suraxanı rayonu, Bakı',
    workingHours: '09:00 - 18:00',
    priceRange: 'Aşağı',
    rating: 4.7
  },
  {
    id: 18,
    type: 'attraction',
    name: 'Yanar Dağ',
    description: 'Təbii qaz yanğını ilə məşhur təbiət abidəsi.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DenpplepNY0o_PHEZD80GsyWwN3RVajtqQ&s',
    details: 'Yanar Dağ Abşeron yarımadasında yerləşən, təbii qaz yanğını ilə məşhur olan unikal təbiət abidəsidir. Yanğın min illərdir ki, sönmür.',
    address: 'Abşeron rayonu, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Aşağı',
    rating: 4.8
  },
  // Restoranlar
  {
    id: 3,
    type: 'restaurant',
    name: 'Şirvanşah',
    description: 'Milli mətbəxin ən yaxşı nümunələri.',
    image: 'https://bakuguide.com/images/places/855/sirvanshah.png',
    details: 'Şirvanşah restoranı ənənəvi Azərbaycan yeməkləri və müasir atmosfer təqdim edir.',
    address: 'Nərimanov rayonu, Bakı',
    workingHours: '10:00 - 23:00',
    priceRange: 'Yüksək',
    rating: 4.7
  },
  {
    id: 4,
    type: 'restaurant',
    name: 'Dolma',
    description: 'Ailəvi və rahat mühit.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/96/dd/80/dolma-restaurant-logotype.jpg?w=900&h=500&s=1',
    details: 'Dolma restoranı dadlı milli və Avropa yeməkləri ilə tanınır.',
    address: 'Yasamal rayonu, Bakı',
    workingHours: '11:00 - 22:00',
    priceRange: 'Orta',
    rating: 4.6
  },
  {
    id: 9,
    type: 'restaurant',
    name: 'Chinar',
    description: 'Pan-Asiya mətbəxi və canlı musiqi.',
    image: 'https://bakuguide.com/images/places/19/cinar-restoran-3.jpg',
    details: 'Chinar restoranı öz unikal interyeri, canlı musiqisi və dadlı yeməkləri ilə məşhurdur.',
    address: 'Nərimanov rayonu, Bakı',
    workingHours: '12:00 - 00:00',
    priceRange: 'Yüksək',
    rating: 4.8
  },
  {
    id: 10,
    type: 'restaurant',
    name: 'Şuşa',
    description: 'Modern Azərbaycan mətbəxi və gözəl mənzərə.',
    image: 'https://shadliq.az/uploads/fields/2019/06/susa-sadliq-sarayi-restorani-_127_1.jpg',
    details: 'Sumakh restoranı müasir Azərbaycan mətbəxini yeni tərzdə təqdim edir. Xəzər dənizinin gözəl mənzərəsi ilə birlikdə.',
    address: 'Nərimanov rayonu, Bakı',
    workingHours: '10:00 - 23:00',
    priceRange: 'Yüksək',
    rating: 4.9
  },
  // Parklar
  {
    id: 5,
    type: 'park',
    name: 'Dədə Qorqud Parkı',
    description: 'Böyük göl və yaşıl ərazilər.',
    image: 'https://kaspi.az/storage/posts/large/623730ba1c37d.jpg',
    details: 'Dədə Qorqud Parkı ailəvi istirahət və gəzinti üçün ideal məkandır.',
    address: 'Nərimanov rayonu, Bakı',
    workingHours: '08:00 - 22:00',
    priceRange: 'Pulsuz',
    rating: 4.4
  },
  {
    id: 6,
    type: 'park',
    name: 'Göygöl Milli Parkı',
    description: 'Təbiət və sükut sevənlər üçün.',
    image: 'https://az.shafaqna.com/wp-content/uploads/2021/03/goygol.jpg',
    details: 'Göygöl Milli Parkı təmiz hava və gözəl mənzərələri ilə məşhurdur.',
    address: 'Göygöl rayonu, Azərbaycan',
    workingHours: '09:00 - 18:00',
    priceRange: 'Aşağı',
    rating: 4.9
  },
  {
    id: 11,
    type: 'park',
    name: 'Boulevard Park',
    description: 'Xəzər dənizi sahilində uzanan gözəl park.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ba/98/8c/baku-boulevard.jpg?w=900&h=500&s=1',
    details: 'Boulevard Park Xəzər dənizi sahilində yerləşir. Gəzinti yolları, kafe və restoranlar, həmçinin müxtəlif əyləncə oyunları mövcuddur.',
    address: 'Səbail rayonu, Bakı',
    workingHours: '24/7',
    priceRange: 'Pulsuz',
    rating: 4.7
  },
  {
    id: 12,
    type: 'park',
    name: 'Şəki Şəhər Parkı',
    description: 'Tarixi mərkəzdə yerləşən gözəl park.',
    image: 'https://i.ytimg.com/vi/09gptYJhSR8/maxresdefault.jpg',
    details: 'Şəki Şəhər Parkı şəhərin mərkəzində yerləşir. Tarixi abidələrlə əhatə olunmuş, istirahət və gəzinti üçün ideal məkandır.',
    address: 'Şəki şəhəri, Azərbaycan',
    workingHours: '08:00 - 20:00',
    priceRange: 'Pulsuz',
    rating: 4.5
  }
];

const placesContainer = document.getElementById('placesContainer');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modalDetails');
const closeModal = document.getElementById('closeModal');
const sortSelect = document.getElementById('sortSelect');
const darkModeToggle = document.getElementById('darkModeToggle');

// Favorilər üçün local storage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Dark mode üçün local storage
let isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;

// Ziyarət edilən yerləri local storage-dan al
let visitedPlaces = JSON.parse(localStorage.getItem('visitedPlaces')) || [];

// Dark mode tətbiq et
function applyDarkMode() {
  document.body.classList.toggle('dark-mode', isDarkMode);
  darkModeToggle.textContent = isDarkMode ? '🌞' : '🌙';
}

// İlk yüklənmədə dark mode tətbiq et
applyDarkMode();

function renderPlaces(list) {
  if (!placesContainer) {
    console.error('placesContainer elementi tapılmadı');
    return;
  }

  placesContainer.innerHTML = '';
  
  if (list.length === 0) {
    placesContainer.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#888;">Heç bir nəticə tapılmadı.</p>';
    return;
  }

  list.forEach(place => {
    const isFavorite = favorites.includes(place.id);
    const card = document.createElement('div');
    card.className = 'place-card';
    card.innerHTML = `
      <div class="card-image">
        <img src="${place.image}" alt="${place.name}">
        <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${place.id}, event)">
          ${isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-content">
        <h3>${place.name}</h3>
        <p>${place.description}</p>
        <div class="card-footer">
          <span class="rating">⭐ ${place.rating}</span>
          <span class="price-range">${place.priceRange}</span>
        </div>
      </div>
    `;
    card.onclick = (e) => {
      if (!e.target.classList.contains('favorite-btn')) {
        showModal(place);
      }
    };
    placesContainer.appendChild(card);
  });
}

function filterPlaces() {
  const search = searchInput.value.toLowerCase();
  
  // Aktiv filter düyməsinin dəyərini al
  const activeFilterButton = document.querySelector('.filter-btn.active');
  const category = activeFilterButton ? activeFilterButton.dataset.type : 'all';
  
  const sortBy = sortSelect.value;
  
  // Favoriləri yenidən yüklə
  favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  let filtered = places.filter(place => {
    const matchesCategory = category === 'all' || place.type === category;
    const matchesSearch = place.name.toLowerCase().includes(search) || 
                         place.description.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  // Sıralama
  filtered.sort((a, b) => {
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  renderPlaces(filtered);
}

function showModal(place) {
  const isVisited = visitedPlaces.includes(place.id);
  
  modalDetails.innerHTML = `
    <div style="width: 100%; height: 300px; overflow: hidden; border-radius: 8px; margin-bottom: 20px;">
      <img src="${place.image}" alt="${place.name}" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <h2>${place.name}</h2>
    <p>${place.description}</p>
    <div class="modal-details">
      <p><strong>Ünvan:</strong> ${place.address}</p>
      <p><strong>İş saatları:</strong> ${place.workingHours}</p>
      <p><strong>Qiymət:</strong> ${place.priceRange}</p>
      <p><strong>Reytinq:</strong> ⭐ ${place.rating}</p>
      <p>${place.details}</p>
    </div>
    <div class="modal-buttons">
      <a href="details.html?id=${place.id}" class="details-btn">Daha ətraflı</a>
      <button class="visit-btn ${isVisited ? 'visited' : ''}" onclick="toggleVisited(${place.id}, event)">
        ${isVisited ? '✓ Ziyarət edildi' : 'Ziyarət et'}
      </button>
    </div>
  `;
  
  modal.classList.remove('hidden');
}

function toggleFavorite(id, event) {
  event.stopPropagation(); // Modal pəncərənin açılmasının qarşısını alır
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const index = favorites.indexOf(id);
  
  if (index === -1) {
    favorites.push(id);
  } else {
    favorites.splice(index, 1);
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  
  // Favorilər dəyişdikdə event yarat
  const favoritesEvent = new CustomEvent('favoritesUpdated', { detail: { favorites } });
  window.dispatchEvent(favoritesEvent);
  
  // Yenidən render et
  filterPlaces();
}

function toggleVisited(id, event) {
  event.stopPropagation();
  const index = visitedPlaces.indexOf(id);
  
  if (index === -1) {
    visitedPlaces.push(id);
  } else {
    visitedPlaces.splice(index, 1);
  }
  
  localStorage.setItem('visitedPlaces', JSON.stringify(visitedPlaces));
  
  // Ziyarət edildi eventi yarat
  const visitedEvent = new CustomEvent('visitedUpdated', { detail: { visitedPlaces } });
  window.dispatchEvent(visitedEvent);
  
  // Modalı yenilə
  const place = places.find(p => p.id === id);
  if (place) {
    showModal(place);
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  applyDarkMode();
}

closeModal.onclick = () => {
  modal.classList.add('hidden');
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
};

searchInput.oninput = filterPlaces;
// categorySelect.onchange = filterPlaces; // This line is removed because filter buttons are used now
sortSelect.onchange = filterPlaces;
darkModeToggle.onclick = toggleDarkMode;

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Call FilterPlaces function
    filterPlaces();
  });
});

// Apply initial filtering when the page loads
filterPlaces(); 
