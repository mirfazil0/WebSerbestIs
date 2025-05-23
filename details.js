// URL-dən yer ID-sini al
const urlParams = new URLSearchParams(window.location.search);
const placeId = parseInt(urlParams.get('id'));

// Yerlərin məlumatlarını əlavə et
const places = [
  // Şəhərlər
  {
    id: 1,
    type: 'city',
    name: 'Bakı',
    description: 'Azərbaycanın paytaxtı, müasir və tarixi abidələrlə zəngin.',
    image: 'https://bakufreetour.files.wordpress.com/2019/03/1-6-e1553537792133.jpg?w=1024',
    details: 'Bakı, Azərbaycanın paytaxtı və Xəzər dənizinin sahilində yerləşən dinamik bir metropoldur. Qədim İçərişəhər ilə müasir göydələnlərin harmoniya təşkil etdiyi bu şəhər, turistlərə unikal bir təcrübə bəxş edir.İçərişəhər – UNESCO-nun Dünya Mirası siyahısında olan bu tarixi məhəllə, Qız Qalası və Şirvanşahlar Sarayı kimi qədim abidələrlə zəngindir.Flame Towers – Bakının simvolu olan bu üç göydələn gecələr işıq oyunları ilə bürünür və şəhərin ən gözəl mənzərələrindən birini təqdim edir.Bakı Bulvarı – Xəzər sahilində uzanan bu bulvar gəzinti, velosiped və əyləncə mərkəzləri ilə turistlərin ən sevimli yerlərindəndir.Heydər Əliyev Mərkəzi – Zaha Hadidin memarlıq şedevri olan bu bina müasir incəsənət sərgilərinə ev sahibliyi edir.Atəşgah Məbədi – Tarix boyu zərdüştilərin ibadət etdiyi bu məbəd, təbii qaz yanğısı ilə məşhurdur.Yanar Dağ – Heç bir zaman sönməyən təbii alovu ilə turistləri heyran edən bu yer, geoloji bir möcüzədir.Fountain Square (Fəvvarələr Meydanı) – Restoranlar, kafelər və canlı küçə performansları ilə şəhərin ən enerjili yerlərindən biridir.Azərbaycan Milli Mətbəxi – Bakıda düşbərə, plov və qutab kimi ənənəvi ləzzətləri dadmaq üçün Şirvanşah və Firuzə kimi məşhur restoranları ziyarət edə bilərsiniz.',
    address: 'Bakı şəhəri, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Orta',
    rating: 4.8,
    gallery: [
      'https://bakufreetour.files.wordpress.com/2019/03/1-6-e1553537792133.jpg?w=1024',
      'https://cdn.yeniavaz.com/uploadedfiles/custom/2019/10/2/1/bdf344c7-b842-4764-bd19-899501064a03/gence-imamzade1.jpg',
      'https://www.azal.az/_next/static/media/Background_d3887632a5.6ae79313.png'
    ],
  },
  {
    id: 2,
    type: 'city',
    name: 'Gəncə',
    description: 'Azərbaycanın qədim və gözəl şəhərlərindən biri.',
    image: 'https://gencexeber.az/wp-content/uploads/2022/05/opensource5.jpg',
    details: 'Gəncə, Azərbaycanın ikinci böyük şəhəri və 2500 illik tarixi ilə ölkənin mədəni paytaxtıdır. Şair Nizami Gəncəvinin doğulduğu bu şəhər, onun möhtəşəm türbəsi ilə mədəniyyət həvəskarlarını cəlb edir. Göygöl Milli Parkı və kristal bərarətli gölü ilə təbiətsevərlər üçün cazibədar məkandır. "Şişlər evi" kimi tanınan unikal Bottle House, 50 min şüşə butulkadan tikilib və memarlıq incisi sayılır. Gəncə Tarix-Diyarşünaslıq Muzeyində şəhərin keçmişinə aid 30 mindən çox eksponat nümayiş olunur. Xan bağı, ölkənin ən qədim parklarından biri kimi istirahət üçün ideal məkandır. Şəhər mərkəzindəki kolonnadalar və fəvvarələr kompleksi avropaya xas memarlıq stilini xatırladır. Göy məscid və Çökək hamam kimi dini abidələr Gəncənin mədəni mozaikasını tamamlayır. Hər il keçirilən Nizami Gəncəvi festivalı şəhərdə canlı mədəni həyat yaradır. Gəncə xonçası, piti və xəşil kimi ənənəvi yeməkləri ilə qastronomiya həvəskarlarını cəlb edir. Şəhərdəki tramvay xətti qonaqlara unikal şəhər içi nəqliyyat təcrübəsi təqdim edir. Gəncə, zəngin tarixi, mədəni irsi və istirahət imkanları ilə hər kəs üçün unudulmaz təcrübə vəd edir.',
    address: 'Gəncə şəhəri, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Orta',
    rating: 4.5,
    gallery: [
      'https://gencexeber.az/wp-content/uploads/2022/05/opensource5.jpg',
      'https://cdn.yeniavaz.com/uploadedfiles/custom/2019/10/2/1/bdf344c7-b842-4764-bd19-899501064a03/gence-imamzade1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHNXzGJTOO4rM9bZKMARNWAYA9SeVoaVfPw&s'
    ],
  },
  {
    id: 7,
    type: 'city',
    name: 'Şəki',
    description: 'Tarixi Şəki Xan Sarayı və gözəl təbiəti ilə məşhurdur.',
    image: 'https://gezginimgezgin.com/wp-content/uploads/2017/10/SEKI-GEZI-REHBERI-AZERBAYCANIN-YESIL-VE-SAKIN-SEHRI-REV.jpg?v=1590431558',
    details: 'Şəki, Azərbaycanın ən qədim və cazibədar şəhərlərindən biridir. Şəhər özünəməxsus memarlığı, zəngin tarixi və füsunkar təbiəti ilə tanınır. Şəkinin ən məşhur abidəsi olan Şəki Xan Sarayı, unikal şəbəkə pəncərələri və nəfis divar rəsmləri ilə UNESCO-nun Dünya İrs Siyahısındadır. Şəki Karvansarayı isə qədim ticarət yollarının canlı şahididir və hazırda otel kimi fəaliyyət göstərir. Şəhərdəki "Kiş" kilsəsi Alban mədəniyyətinin izlərini daşıyır. Şəkililərin ənənəvi məskəni olan "Yuxarı Baş" və "Aşağı Baş" məhəllələri özünəməxsus memarlıq üslubu ilə diqqət çəkir. Şəki, həm də öz ləzzətli şirniyyatları ilə məşhurdur - burada Şəki pitisi və halvasını mutləq dadmalısınız. Şəki qutabı və gürzəsi də yerli mətbəxin ən sevimli nümunələrindəndir. Şəhərə yaxın yerləşən "Qəbələ" və "İlisu" kimi turistik mərkəzlərə səyahət etmək olar. Şəki, həm tarixi abidələri, həm də təbii gözəlliyi ilə turistlərə unudulmaz təcrübə bəxş edir.',
    address: 'Şəki şəhəri, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Orta',
    rating: 4.7,
    gallery: [
      'https://gezginimgezgin.com/wp-content/uploads/2017/10/SEKI-GEZI-REHBERI-AZERBAYCANIN-YESIL-VE-SAKIN-SEHRI-REV.jpg?v=1590431558',
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/128032416.webp?k=a990016c1cf60490b6b696190b264b3b3b173b8b4f4b8d207ad4181f1e80ff3d&o=',
      'https://i0.wp.com/gezginimgezgin.com/wp-content/uploads/2020/04/IMAG4925.jpg'
    ],
  },
  {
    id: 8,
    type: 'city',
    name: 'Quba',
    description: 'Dağlıq ərazilər və gözəl təbiəti ilə məşhurdur.',
    image: 'https://fed.az/upload/news/3672988.jpg',
    details: 'Quba şəhəri Azərbaycanın şimal-şərqində yerləşir və özünün təbii gözəlliyi, meşələri və çayları ilə məşhurdur. Quba bölgəsi ölkənin ən məşhur meyvə bağlarına malikdir, xüsusilə albalı və gilasları ilə tanınır. Şəhərdəki Qırmızı Qəsəbə dünyada yəhudi icmasının yaşadığı nadir yerlərdən biridir və unikal memarlığı ilə diqqət çəkir. Quba şəhərindəki Afurca kəndi və onun ətrafındakı təbii gözəlliklər turistlər üçün xüsusi maraq doğurur. Qudyal çayı üzərindəki körpülər və çay boyu mənzərələr göz oxşayır. Quba xalçaları özünəməxsus naxışları və keyfiyyəti ilə bütün dünyada məşhurdur. Şəhərdəki "Quba Şəhidlər Xiyabanı" tarixi və mədəni əhəmiyyətə malikdir. Quba bölgəsindəki Tenqi kəndi və onun ətrafındakı meşələr istirahət üçün ideal yerlərdir. Yerli mətbəxin ən məşhur yeməklərindən olan Quba təndir çörəyi və Quba pitisi mutləq dadmağa dəyər. Quba şəhəri həm də ekoturizm üçün mükəmməl imkanlar təqdim edir.',
    address: 'Quba şəhəri, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Orta',
    rating: 4.6,
    gallery: [
      'https://fed.az/upload/news/3672988.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/a8/8d/c8/quba-palace-hotel.jpg?w=600&h=-1&s=1',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ff/27/d7.jpg'
    ],
  },
  // Görməli Yerlər
  {
    id: 13,
    type: 'attraction',
    name: 'Şəki Xan Sarayı',
    description: 'UNESCO Dünya İrs Siyahısında olan unikal memarlıq abidəsi.',
    image: 'https://manera.az/uploads/posts/2018-05/1525767518_178111.jpg',
    details: 'Şəki Xan Sarayı, 1762-ci ildə Hüseyn xan tərəfindən inşa etdirilmiş və Azərbaycanın ən qiymətli tarixi abidələrindən biridir. Bu möhtəşəm saray, unikal "şəbəkə" pəncərələri ilə məşhurdur - heç bir yapışdırıcı istifadə etmədən quraşdırılan bu incə naxışlı taxta şəbəkələr memarlıq möcüzəsi sayılır. 2019-cu ildə UNESCO-nun Ümumdünya İrsi Siyahısına daxil edilən sarayın divarları nəfis rəngli freskalarla bəzədilib, təbiət səhnələri və mifoloji motivlərlə zəngindir. Sarayın interyerində 6 otaq, 2 eyvan və 2 güzgülü dəhliz var, hər biri özünəməxsus bəzək elementlərinə malikdir. Tikintidə istifadə olunan kərpic, ağac və daş materialları arasında heç bir dəmir elementi yoxdur. Maraqlıdır ki, sarayın xüsusi ventilyasiya sistemi onu yayda sərin, qışda isə isti saxlayır. Saray kompleksinə qədim hamam, kitabxana və mətbəx binaları da daxildir. Ərazidəki 500 illik çinar ağacları isə tarixə canlı şahid kimi qalır.',
    address: 'Şəki şəhəri, Azərbaycan',
    workingHours: '09:00 - 18:00',
    priceRange: 'Aşağı',
    rating: 4.9,
    gallery: [
      'https://manera.az/uploads/posts/2018-05/1525767518_178111.jpg',
      'https://zim.az/uploads/posts/2017-06/1498592901_xan-sarayi-1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaewkA7syxmJvySnkXu1QqF1c9qCRIKOKsBg&s'
    ],
   },
  {
    id: 14,
    type: 'attraction',
    name: 'Qız Qalası',
    description: 'Bakının ən qədim və məşhur abidələrindən biri.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2k96vrLDwqjCngD5XE3Ly2FGQJF-9ucaZNQ&s',
    details: 'Qız Qalası, Bakının ən qədim və ən sirli memarlıq abidələrindən biridir. Bu möhtəşəm qüllə, İçərişəhərin həyəcanverici tarixi mühitində ucalır və şəhərin ən məşhur simvollarından biridir. Qız Qalasının dəqiq tikilmə tarixi mübahisəlidir - bəzi tədqiqatçılar onun eramızdan əvvəl I əsrdə inşa edildiyini iddia edir. Qüllənin hündürlüyü 28 metrdir və 8 mərtəbədən ibarətdir. Maraqlıdır ki, qala heç bir məqsədli müdafiə funksiyası daşımır - bu onun sirli təbiətini daha da artırır. Əfsanəyə görə, qala adını xan qızının özünü qüllədən atması ilə bağlı faciəvi hekayədən almışdır. Qız Qalasının divarları qalındır və aşağıdan yuxarıya doğru daralır ki, bu da onun xarakterik siluetini yaradır. Sovet dövründə qala muzey kimi fəaliyyət göstərmişdir. Hazırda Qız Qalası UNESCO-nun Dünya Mirası Siyahısında qeydiyyatdadır. Qüllənin damından Bakı şəhərinin və Xəzər dənizinin möhtəşəm mənzərəsi açılır. Gecələr işıqlandırılan qala, şəhərin ən romantik mənzərələrindən birini yaradır. Qız Qalası hər il minlərlə turist tərəfindən ziyarət edilir və Bakı tarixinin canlı şahididir.',
    address: 'İçərişəhər, Bakı',
    workingHours: '10:00 - 18:00',
    priceRange: 'Aşağı',
    rating: 4.8,
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2k96vrLDwqjCngD5XE3Ly2FGQJF-9ucaZNQ&s',
      'https://portal.azertag.az/sites/default/files/qizqala.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXG-HIzCpl8Qjn7J1cTpt3bBxztLy-1MCpSg&s'
    ],
  },
  {
    id: 15,
    type: 'attraction',
    name: 'Şuşa Qalası',
    description: 'Qarabağın qədim və məşhur qalası.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/%C5%9Eu%C5%9Fa_qalas%C4%B1_2024-c%C3%BC_ilin_aprelind%C9%99.jpg/1200px-%C5%9Eu%C5%9Fa_qalas%C4%B1_2024-c%C3%BC_ilin_aprelind%C9%99.jpg',
    details: 'Şuşa Qalası Azərbaycanın mədəni paytaxtı Şuşanın ürəyində yerləşir. 1752-ci ildə Pənahəli xan tərəfində inşa edilən bu möhtəşəm qala kompleksi dağın təpəsində strateji mövqedə ucalır. Qala divarlarının uzunluğu 2,5 kilometrə yaxındır və üç müdafiə xəttindən ibarətdir. Memarlıq üslubunda Azərbaycan, Osmanlı və Fars elementləri harmoniya təşkil edir. Tarixən qala daxilində məscidlər, hamamlar, karvan yolları və yaşayış məntəqələri fəaliyyət göstərmişdir. Gəncə qapısı qalanın ən möhtəşəm giriş nöqtəsidir. 1992-2020-ci illərdə işğal altında olan qala, 8 noyabr 2020-də Azərbaycan Ordusu tərəfindən azad edilmişdir. Hazırda qalada genişmiqyaslı bərpa işləri aparılır. Qaladan açılan mənzərə - Qarabağın təbiət gözəllikləri nəfəs kəsicidir. Bu abidə Azərbaycan xalqının qəhrəmanlıq ruhunun timsalıdır.',
    address: 'Şuşa şəhəri, Azərbaycan',
    workingHours: '09:00 - 17:00',
    priceRange: 'Pulsuz',
    rating: 5.0,
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/%C5%9Eu%C5%9Fa_qalas%C4%B1_2024-c%C3%BC_ilin_aprelind%C9%99.jpg/1200px-%C5%9Eu%C5%9Fa_qalas%C4%B1_2024-c%C3%BC_ilin_aprelind%C9%99.jpg',
      'https://ensiklopediya.az/images/news/6768a0713865c63702faa99bbde814d0.jpg',
      'https://avatars.mds.yandex.net/get-altay/1031166/2a000001857d1c5d22e6cfc91c9969652396/L_height'
    ],
  },
  {
    id: 16,
    type: 'attraction',
    name: 'Heydər Əliyev Mərkəzi',
    description: 'Müasir memarlığın şah əsəri.',
    image: 'https://heydar-aliyev-foundation.org/uploads/images/img_9241_slide2.jpg',
    details: 'Heydər Əliyev Mərkəzi Azərbaycanın paytaxtı Bakının ən gözəl müasir memarlıq nümunələrindən biridir. Dünya şöhrətli memar Zaha Hadidin layihəsi əsasında 2012-ci ildə inşa edilən bu kompleks özünəməxsus dalğalı forması ilə diqqət çəkir. Mərkəzin ümumi sahəsi 57.500 m²-dir və 8 mərtəbədən ibarətdir. Binanın memarlıq üslubu Azərbaycanın milli-mədəni dəyərlərini müasir formada təqdim edir. Kompleksdə muzey, sərgi salonları, konfrans zalları və inzibati ofislər yerləşir. Mərkəzin ətrafındakı park sahəsi 13,8 hektar ərazini əhatə edir. Binanın xarici görünüşündə heç bir kəskin künc və xətt istifadə edilməyib ki, bu da onu unikal edir. Heydər Əliyev Mərkəzi hər il minlərlə turist və memarlıq həvəskarı tərəfindən ziyarət edilir. Gecələr işıqlandırma sistemi binaya xüsusi görkəm verir. Mərkəz Azərbaycanın müasir mədəni həyatının ən vacib simvollarından birinə çevrilib. Bu abidə eyni zamanda ölkənin inkişaf yolunu və gələcək vizyonunu simvolizə edir.',
    address: 'Heydər Əliyev prospekti 1, Bakı',
    workingHours: '10:00 - 20:00',
    priceRange: 'Orta',
    rating: 4.9,
    gallery: [
      'https://heydar-aliyev-foundation.org/uploads/images/img_9241_slide2.jpg',
      'https://azerbaijan.travel/resize3000/center/pages/714/57fb3b7b-f01d-4184-9128-ac673f5f4aad.jpg',
      'https://heydar-aliyev-foundation.org/uploads/images/img_9242_slide2.jpg'
    ],
  },
  {
    id: 17,
    type: 'attraction',
    name: 'Atəşgah',
    description: 'Tarixi Zərdüşti məbədi.',
    image: 'https://unesco.preslib.az/images/site/image005.jpg',
    details: 'Atəşgah Məbədi Bakı şəhərindən 30 km aralıda, Suraxanı qəsəbəsində yerləşən unikal tarixi abidədir. Bu məbəd kompleksi Azərbaycanın "Odlar Yurdu" adı ilə bağlı olan təbii qaz yataqlarının üzərində tikilib. 17-18-ci əsrlərdə Hindistandan gələn zərdüşti tacirlər tərəfindən inşa edilən məbəd beşbucaqlı formaya malikdir. Mərkəzində əbədi yanan təbii alov yerləşir ki, bu da zərdüştilik dinində müqəddəs sayılır. Məbədin divarlarında zərdüştilik simvolları və kitabələr həkk olunub. 19-cu əsrdə təbii qaz ehtiyatlarının azalması nəticəsində mərkəzi alov sönmüş, lakin sonradan bərpa edilmişdir. Sovet dövründə muzey kimi fəaliyyət göstərən məbəd 1975-ci ildə memarlıq abidəsi elan edilib. Hazırda UNESCO-nun Ümumdünya İrsi Siyahısına namizəd göstərilən abidələrdəndir. Məbədin ətrafında tacirlər üçün nəzərdə tutulmuş kiçik hücrələr və karvan sarayın qalıqları var. Atəşgah Məbədi hər il minlərlə turist tərəfindən ziyarət edilir. Bu abidə Azərbaycanın qədim tarixini və energetik ehtiyatlarını simvolizə edir.',
    address: 'Suraxanı rayonu, Bakı',
    workingHours: '09:00 - 18:00',
    priceRange: 'Aşağı',
    rating: 4.7,
    gallery: [
      'https://unesco.preslib.az/images/site/image005.jpg',
      'https://ateshgahtemple.az/wp-content/uploads/2019/06/page-1_slide1.jpg-1024x742.jpg',
      'https://ateshgahtemple.az/wp-content/uploads/2018/04/3-1.jpg'
    ],
  },
  {
    id: 18,
    type: 'attraction',
    name: 'Yanar Dağ',
    description: 'Təbii qaz yanğını ilə məşhur təbiət abidəsi.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DenpplepNY0o_PHEZD80GsyWwN3RVajtqQ&s0',
    details: 'Yanar Dağ Azərbaycanın Abşeron yarımadasında yerləşən unikal təbiət hadisəsidir. Bu möcüzəvi yer, daim yanan təbii qaz çıxışı ilə tanınır və "Odlar Yurdu" ləqəbinin canlı nümunəsidir. Alovun hündürlüyü bəzən 3 metrə çatır və heç bir zaman sönmür. Yanar Dağın 10 metr uzunluğunda və 4-5 metr enində yanma zonası var ki, bu da onu regionun ən böyük yanan sahələrindən birinə çevirir. Elmi tədqiqatlar göstərir ki, burada yanma prosesi ən azı 4000 ildir davam edir. Əfsanəyə görə, bu alov Marco Polo kəşfiyyatçısının Azərbaycana səfəri zamanı onun diqqətini cəlb etmişdir. Sovet dövründə yeraltı qaz ehtiyatlarının istismarı nəticəsində alov zəifləsə də, son illərdə yenidən güclənib. Hazırda Yanar Dağ Azərbaycanın ən məşhur turistik məkanlarından biridir və dövlət tərəfindən qorunur. Gecələr alovun görünüşü xüsusilə təsir edici olur və fotosevərlər üçün ideal məkandır. Bu təbiət hadisəsi Azərbaycanın zəngin energetik ehtiyatlarının canlı nümunəsidir. Yanar Dağ həm də ölkənin qədim tarixi və mədəni irsi ilə bağlı maraqlı əfsanələrə ev sahibliyi edir.',
    address: 'Abşeron rayonu, Azərbaycan',
    workingHours: '24/7',
    priceRange: 'Aşağı',
    rating: 4.8,
    gallery: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DenpplepNY0o_PHEZD80GsyWwN3RVajtqQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbr1SXHrfXVS7GnBoZx6SBhdGyZltZZi5c7Q&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThlx1QZOfWrJfhPcoF679mymkRZL3UuMDvCA&s'
    ],
  },

  // Restoranlar
  {
    id: 3,
    type: 'restaurant',
    name: 'Şirvanşah',
    description: 'Milli mətbəxin ən yaxşı nümunələri.',
    image: 'https://bakuguide.com/images/places/855/sirvanshah.png',
    details: 'Şirvanşah Restoranı Bakının köhnə şəhər hissəsində, İçərişəhərin tarixi atmosferində yerləşir. Bu məkan özünəməxsus Azərbaycan mətbəxinin ən seçmə nümunələrini təqdim edir. Restoranın interyeri Şirvanşahlar dövrünün memarlıq üslubunu əks etdirir və qonaqları tarixi bir səyahətə dəvət edir. Əsas menyuda düşbərə, xəngəl, plov və xaş kimi ənənəvi Azərbaycan spesialitetləri yer alır. Məkanın öz çörək sexində hazırlanan təndir çörəyi və müxtəlif növ qutablar xüsusi populyarlıq qazanıb. Restoran yay aylarında açıq havada xidmət göstərən geniş terrasası ilə də fərqlənir. Şirvanşahın şərab kartında Azərbaycanın ən yaxşı şərab zavodlarının məhsulları təqdim olunur. Həftənin müəyyən günlərində canlı muğam ifaları ilə qonaqlara xüsusi atmosfer yaradılır. Məkan həm yerli sakinlər, həm də xarici turistlər arasında böyük populyarlıq qazanıb. Restoranın diqqətçəkən xüsusiyyətlərindən biri də ənənəvi Azərbaycan qonaqpərvərliyinin bütün incəliklərini əks etdirməsidir.',
    address: 'Nərimanov rayonu, Bakı',
    workingHours: '10:00 - 23:00',
    priceRange: 'Yüksək',
    rating: 4.7,
    gallery: [
      'https://bakuguide.com/images/places/855/sirvanshah.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaCzTL-wGUAltx-Pi6sh7iQ4rnd2iVRXxL6A&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJefq7P_WruXjzBQXMHY5df8AbCSL5dJqGFg&s'
    ],
  },
  {
    id: 4,
    type: 'restaurant',
    name: 'Dolma',
    description: 'Ailəvi və rahat mühit.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/96/dd/80/dolma-restaurant-logotype.jpg?w=900&h=500&s=1',
    details: 'Dolma Restoranı Bakının mərkəzində yerləşən və ölkəmizin ənənəvi mətbəxini ən yaxşı şəkildə təqdim edən məkanlardan biridir. Restoran öz adını Azərbaycanın ən məşhur yeməklərindən olan dolmadan alır və bu xörəyin onlarca növünü təqdim edir. Məkanın interyeri Azərbaycanın milli memarlıq elementləri ilə bəzədilib və isti, ailəvi atmosfer yaradır. Əsas menyuda dolma növlərindən başqa, kabab, plov, xəngəl kimi ənənəvi yeməklər də yer alır. Restoranın özəl hazırlanan çörək və lavaşları xüsusi dadı ilə fərqlənir. Məkan həm də geniş şərab seçimi ilə qonaqlarına xüsusi ləzzət təcrübəsi təqdim edir. Dolma Restoranında həftənin müəyyən günlərində canlı milli musiqi ifaları təşkil olunur. Xidmətin yüksək keyfiyyəti və personalın mehriban münasibəti məkanı daha da cəlbedici edir. Restoran həm yerli sakinlər, həm də turistlər arasında böyük populyarlıq qazanıb. Ənənəvi Azərbaycan qonaqpərvərliyinin bütün incəliklərini burada hiss etmək mümkündür. Dolma Restoranı milli mətbəximizin ən yaxşı nümunələrini dadmaq üçün ideal seçimdir.',
    address: 'Yasamal rayonu, Bakı',
    workingHours: '11:00 - 22:00',
    priceRange: 'Orta',
    rating: 4.6,
    gallery: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/96/dd/80/dolma-restaurant-logotype.jpg?w=900&h=500&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f8/5b/9e/dolma.jpg?w=900&h=500&s=1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiE_w6g9-MHJq3e9M8YrAP0DA3DBgXzDEUw&s'
    ],
  },
  {
    id: 9,
    type: 'restaurant',
    name: 'Chinar',
    description: 'Pan-Asiya mətbəxi və canlı musiqi.',
    image: 'https://bakuguide.com/images/places/19/cinar-restoran-3.jpg',
    details: 'Chinar Restoranı, Bakının ən məşhur Asiya mətbəxi təklif edən restoranlarından biridir. Burada Yaponiya, Çin, Tayland, Malayziya və Sinqapur kimi ölkələrin kulinariya ənənələri öz əksini tapır. Müasir və dəbli interyeri ilə fərqlənən bu məkan, həmçinin açıq terras sahəsi ilə qonaqlarına rahat atmosfer təqdim edir. Sushi, wok yeməkləri və dəniz məhsulları kimi müxtəlif ləzzətlər burada xüsusi reseptlərlə hazırlanır. Restoranın menyusunda Asiya mətbəxinin ən populyar yeməkləri ilə yanaşı, unikal kokteyllər və premium içkilər də yer alır. Xüsusi tədbirlər və şəxsi məclislər üçün ideal bir məkan olaraq tanınır. Əgər Bakıda fərqli və yüksək səviyyəli Asiya mətbəxi təcrübəsi yaşamaq istəyirsinizsə, Chinar restoranı mütləq ziyarət etməli olduğunuz yerlərdən biridir.',
    address: 'Nərimanov rayonu, Bakı',
    workingHours: '12:00 - 00:00',
    priceRange: 'Yüksək',
    rating: 4.8,
    gallery: [
      'https://bakuguide.com/images/places/19/cinar-restoran-3.jpg',
      'https://bakuguide.com/images/places/19/cinar-restoran-9.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/cf/3d/1f/chinar.jpg?w=900&h=500&s=1'
    ],
  },
  {
    id: 10,
    type: 'restaurant',
    name: 'Şuşa',
    description: 'Modern Azərbaycan mətbəxi və gözəl mənzərə.',
    image: 'https://shadliq.az/uploads/fields/2019/06/susa-sadliq-sarayi-restorani-_127_1.jpg',
    details: 'Şuşa Restoranı Bakıda yerləşən və Azərbaycan mətbəxinin ənənəvi dadlarını təqdim edən məşhur restoranlardan biridir. Burada dolma, piti, qutab, düşbərə və kabab kimi yerli yeməklər xüsusi reseptlərlə hazırlanır. Restoranın interyeri Azərbaycan xalçaları, armudu stəkanlar və gil lampalar kimi milli elementlərlə bəzədilmişdir. Şuşa restoranı həmçinin vegetarian və halal menyu seçimləri ilə fərqlənir. Burada ənənəvi Azərbaycan şərabları və təbii içkilər geniş seçim imkanları ilə təqdim olunur. Xüsusi tədbirlər və şəxsi məclislər üçün uyğun bir məkandır. Əgər Azərbaycan kulinariya irsini yaşamaq və yerli ləzzətləri dadmaq istəyirsinizsə, Şuşa restoranı mükəmməl seçimdir.',
    address: 'Nərimanov rayonu, Bakı',
    workingHours: '10:00 - 23:00',
    priceRange: 'Yüksək',
    rating: 4.9,
    gallery: [
      'https://shadliq.az/uploads/fields/2019/06/susa-sadliq-sarayi-restorani-_127_1.jpg',
      'https://shadliq.az/uploads/fields/2019/06/susa-sadliq-sarayi-restorani-_142.jpg',
      'https://shadliq.az/uploads/fields/2019/06/susa-sadliq-sarayi-restorani-_123_1.jpg'
    ],
  },
  // Parklar
  {
    id: 5,
    type: 'park',
    name: 'Dədə Qorqud Parkı',
    description: 'Böyük göl və yaşıl ərazilər.',
    image: 'https://kaspi.az/storage/posts/large/623730ba1c37d.jpg',
    details: 'Dədə Qorqud Parkı Bakının Nərimanov rayonunda yerləşən və Azərbaycan tarixini və mədəniyyətini əks etdirən gözəl istirahət məkanlarından biridir. 2013-cü ildə açılan bu park 6 hektar ərazini əhatə edir və paytaxtın ən böyük parklarından biri hesab olunur. Parkın mərkəzində heykəltəraş Göyüş Babayevin yaratdığı Kitabi-Dədə Qorqud abidəsi ucalır, bu isə Azərbaycan xalqının qədim tarixi keçmişini simvolizə edir. Burada süni göl və şəlalə yaradılıb, qonaqlar katamaranlarla göldə gəzinti edə bilərlər. ADA Universiteti və Bakı Zooparkının yaxınlığında yerləşən park, yaşıllıq və müasir işıqlandırma sistemi ilə rahat istirahət üçün ideal məkandır. Pulsuz Wi-Fi xidməti də mövcuddur, bu isə parkı müasir və rahat istirahət yeri edir. Dədə Qorqud Parkı Azərbaycanın mədəni irsini açıq havada nümayiş etdirən unikal bir məkandır və tarix, təbiət və istirahəti bir araya gətirən gözəl bir parkdır.',
    address: 'Nərimanov rayonu, Bakı',
    workingHours: '08:00 - 22:00',
    priceRange: 'Pulsuz',
    rating: 4.4,
    gallery: [
      'https://kaspi.az/storage/posts/large/623730ba1c37d.jpg',
      'https://www.aznews.az/storage/photos/dede_qorqud_parki_131213_49.jpg',
      'https://avatars.mds.yandex.net/get-altay/10447847/2a0000018bc8933d1245cafe3455252a5837/L_height'
    ],
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
    rating: 4.9,
    gallery: [
      'https://az.shafaqna.com/wp-content/uploads/2021/03/goygol.jpg',
      'https://www.exploreazerbaijan.com/medias/things_to_do/medium/15/a2db5-goygol-1-1.jpg',
      'https://lh5.googleusercontent.com/proxy/7UH6wzyQtnvvVgc35OTlA8cYQ099zYZGNZ4fGFNR55MOy8NhY3eY23uHCvvkqq_VPxjp6Aye89IaMvznTQ-_gWv3vjfwFq6yDAxTGaf4jvUlbSYb6_nNUu7oTDIjtK0srmhzB7c'
    ],
  },
  {
    id: 11,
    type: 'park',
    name: 'Boulevard Park',
    description: 'Xəzər dənizi sahilində uzanan gözəl park.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ba/98/8c/baku-boulevard.jpg?w=900&h=500&s=1',
    details: 'Bakı Bulvarı, Xəzər dənizi sahilində yerləşən və şəhərin ən məşhur istirahət məkanlarından biridir. 1909-cu ildə yaradılan bu park zamanla genişlənərək 25 kilometr uzunluğa çatmışdır və şəhərin simvolik yerlərindən biri hesab olunur. Bulvar boyunca gəzinti yolları, yaşıllıq zonaları, əyləncə mərkəzləri, restoranlar və kafelər mövcuddur. Park Bulvar Ticarət Mərkəzi, Azərbaycan Xalça Muzeyi, Kiçik Venesiya, Bakı Ferris Çarxı və Bakı Kristal Zalı kimi görməli yerlər burada yerləşir. Bulvarın tarixi Bakı neft baronlarının sahil boyunca malikanələr tikdiyi dövrlərə gedib çıxır. O zamanlar sahil süni şəkildə genişləndirilərək şəhərin inkişafına töhfə vermişdir. Yeni Bulvar 2012-ci ildə açılaraq bulvarın uzunluğunu 3.75 kilometrə çatdırmış, 2015-ci ildə isə Ağ Şəhər Bulvarı əlavə edilərək sahil boyunca gəzinti imkanlarını daha da artırmışdır. Bulvarın əsas məqsədi şəhər sakinləri və turistlər üçün rahat istirahət məkanı yaratmaq olub. Burada velosiped yolları, idman meydançaları və açıq hava konsertləri təşkil edilir. Milli Park statusuna malik olan Bakı Bulvarı, həm yerli sakinlər, həm də turistlər üçün ideal istirahət məkanıdır',
    address: 'Səbail rayonu, Bakı',
    workingHours: '24/7',
    priceRange: 'Pulsuz',
    rating: 4.7,
    gallery: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/ba/98/8c/baku-boulevard.jpg?w=900&h=500&s=1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0RrSrqAXTs4LayeQw0mecFoyJNCY5aGlXoA&s',
      'hhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYD4eQjM8wloVYGDY4wSb6ajNUwW3NHiQzA&s'
    ],
  },
  {
    id: 12,
    type: 'park',
    name: 'Şəki Şəhər Parkı',
    description: 'Tarixi mərkəzdə yerləşən gözəl park.',
    image: 'https://i.ytimg.com/vi/09gptYJhSR8/maxresdefault.jpg',
    details: 'Şəki şəhər parkı, şəhərin sakinləri və qonaqları üçün istirahət və əyləncə məkanıdır. Burada gəzinti yolları, uşaqlar üçün oyun meydançaları və müxtəlif attraksionlar mövcuddur. Parkın yaxınlığında yerləşən Göygöl isə, təbii gözəlliyi ilə tanınır. Bu gölün sahillərində piknik etmək, qayığa minmək və ya sadəcə təbiətin səssizliyindən zövq almaq mümkündür. Şəki, ümumiyyətlə, tarixi və mədəni irsi ilə məşhur olan bir şəhərdir və park da bu gözəlliyin bir hissəsidir. Şəki şəhəri Azərbaycanın şimal-qərbində, Böyük Qafqaz sıra dağlarının cənub ətəklərində yerləşir və təbiət gözəllikləri ilə insanları valeh edir. Şəhər həm tarixi abidələri, həm də təbii mənzərələri ilə turistlər üçün cəlbedici bir məkandır. Şəki Xan Sarayı, Karvansaray və Yuxarı Baş Dövlət Tarix-Memarlıq Qoruğu kimi yerlər şəhərin mədəni irsini qoruyur. Şəki parkları isə bu tarixi şəhərin yaşıl və sakit guşələrini təmsil edir. Burada təmiz hava, yaşıllıq və rahat istirahət üçün ideal şərait mövcuddur. Şəki parkları həm yerli sakinlər, həm də turistlər üçün gözəl istirahət məkanıdır.',
    address: 'Şəki şəhəri, Azərbaycan',
    workingHours: '08:00 - 20:00',
    priceRange: 'Pulsuz',
    rating: 4.5,
    gallery: [
      'https://i.ytimg.com/vi/09gptYJhSR8/maxresdefault.jpg',
      'https://i.ytimg.com/vi/riJVvTQCQxs/maxresdefault.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF4GIg4fPZ9NVSMH8l1OcSy-EgYRZ1Vdjo7A&s'
    ],
  },
];

// Seçilmiş yeri tap
const selectedPlace = places.find(place => place.id === placeId);

if (selectedPlace) {
  // Səhifə başlığını yenilə
  document.title = `${selectedPlace.name} - Discover Places`;

  // Əsas şəkli və başlığı yenilə
  document.getElementById('mainImage').src = selectedPlace.image;
  document.getElementById('mainImage').alt = selectedPlace.name;
  document.getElementById('placeName').textContent = selectedPlace.name;

  // Əsas məzmunu yenilə
  document.getElementById('mainContent').innerHTML = `
    <h2>${selectedPlace.name} haqqında</h2>
    <p>${selectedPlace.details}</p>

  `;

  // Şəkil qalereyasını yarat
  if (selectedPlace.gallery) {
    const gallery = document.getElementById('imageGallery');
    selectedPlace.gallery.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = selectedPlace.name;
      img.onclick = () => {
        document.getElementById('mainImage').src = imageUrl;
      };
      gallery.appendChild(img);
    });
  }

  // Yan panel məlumatlarını yenilə
  document.getElementById('basicInfo').innerHTML = `
    <p><strong>Tip:</strong> ${selectedPlace.type === 'city' ? 'Şəhər' : 
                              selectedPlace.type === 'restaurant' ? 'Restoran' : 
                              selectedPlace.type === 'park' ? 'Park' : 'Görməli Yer'}</p>
    <p><strong>Ünvan:</strong> ${selectedPlace.address}</p>
  `;

  document.getElementById('workingHours').innerHTML = `
    <p>${selectedPlace.workingHours}</p>
  `;

  document.getElementById('priceRange').innerHTML = `
    <p>${selectedPlace.priceRange}</p>
  `;

  document.getElementById('rating').innerHTML = `
    <p>${selectedPlace.rating} ⭐</p>
  `;
} else {
  // Yer tapılmadıqda
  document.body.innerHTML = `
    <div class="details-page">
      <a href="index.html" class="back-btn">← Geri qayıt</a>
      <h1>Yer tapılmadı</h1>
      <p>Seçdiyiniz yer mövcud deyil və ya silinib.</p>
    </div>
  `;
} 
