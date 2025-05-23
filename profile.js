// Local storage-dan məlumatları al
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
const visitedPlaces = JSON.parse(localStorage.getItem('visitedPlaces')) || [];
const darkMode = localStorage.getItem('darkMode') === 'true';

// Yerlər məlumatları
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
    details: 'Şuşa restoranı müasir Azərbaycan mətbəxini yeni tərzdə təqdim edir. Xəzər dənizinin gözəl mənzərəsi ilə birlikdə.',
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

// Statistikaları yenilə
function updateStats() {
    document.querySelector('.stat-item:nth-child(1) span').textContent = favorites.length;
    document.querySelector('.stat-item:nth-child(2) span').textContent = visitedPlaces.length;
    document.querySelector('.stat-item:nth-child(3) span').textContent = '2'; // Şərhlərin sayı
}

// Seçilmiş yerləri göstər
function renderFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    if (!favoritesList) return;
  
    const selectedPlaces = places.filter(place => favorites.includes(place.id));

    if (selectedPlaces.length === 0) {
        favoritesList.innerHTML = '<p style="text-align: center; color: #666; grid-column: 1/-1;">Seçilmiş yer yoxdur.</p>';
    return;
  }

    favoritesList.innerHTML = selectedPlaces.map(place => `
        <div class="favorite-card">
        <img src="${place.image}" alt="${place.name}">
            <div class="favorite-info">
                <h4>${place.name}</h4>
                <p>${place.type === 'city' ? 'Şəhər' : 
                     place.type === 'restaurant' ? 'Restoran' : 
                     place.type === 'park' ? 'Park' : 'Görməli Yer'}</p>
          </div>
        </div>
    `).join('');
}

// Qaranlıq rejimi tətbiq et
function applyDarkMode() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
}

// Tənzimləmələri yenilə
function updateSettings(setting, value) {
    localStorage.setItem(setting, value);
}

// Səhifə yükləndikdə
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
    renderFavorites();
  applyDarkMode();

    // Ziyarət edilən yerlər yeniləndikdə
    window.addEventListener('visitedUpdated', (e) => {
        updateStats();
    });

    // Qaranlıq rejimi dəyişdir
    document.getElementById('darkModeToggle').addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode');
        updateSettings('darkMode', e.target.checked);
    });

    // Bildirişlər
    document.getElementById('notificationsToggle').addEventListener('change', (e) => {
        updateSettings('notifications', e.target.checked);
    });

    // Məkan paylaşımı
    document.getElementById('locationToggle').addEventListener('change', (e) => {
        updateSettings('location', e.target.checked);
    });
}); 
