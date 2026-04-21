// ──────────────────────────────────────────────
// TRANSLATIONS
// ──────────────────────────────────────────────
const T = {
    en: {
      nav_home:'Home', nav_tours:'Tours', nav_hot:'Hot Tours', nav_exc:'Excursions',
      nav_hotels:'Hotels', nav_flights:'Flights', nav_about:'About Us', nav_contact:'Contact',
      btn_book:'✈ Book Now',
      hero_badge:'Premium Travel Agency • Tashkent',
      hero_title:'Discover the <span>World\'s</span> Most Beautiful Destinations',
      hero_sub:'Your dream vacation is just one click away. Premium tours, luxury hotels, and unforgettable experiences crafted just for you.',
      hero_btn1:'<i class="fa-solid fa-earth-americas"></i> Explore Tours', hero_btn2:'<i class="fa-solid fa-phone"></i> Free Consultation',
      search_dest:'Destination', search_date:'Travel Date', search_budget:'Budget',
      search_dest_ph:'Where to go?', budget_any:'Any budget', search_btn:'Search',
      stat1:'Happy Travelers', stat2:'Tour Packages', stat3:'Countries Covered', stat4:'Years of Experience',
      tours_label:'Our Packages', tours_title:'Explore Our <span>Best Tours</span>',
      tours_sub:'Handpicked destinations and expertly curated itineraries for an unforgettable journey.',
      from_per_person:'from / person', btn_book_tour:'Book Now', view_all_tours:'<i class="fa-solid fa-earth-americas"></i> View All Tours',
      badge_popular:'Popular', badge_luxury:'Luxury', badge_exclusive:'Exclusive',
      badge_value:'Best Value', badge_premium:'Premium', badge_new:'New',
      loc_turkey:'Turkey, Antalya', loc_dubai:'UAE, Dubai', loc_maldives:'Maldives',
      loc_thailand:'Thailand, Bangkok & Phuket', loc_italy:'Italy, Rome & Amalfi', loc_egypt:'Egypt, Hurghada & Cairo',
      tour1_title:'Turkey All-Inclusive Experience',
      tour1_desc:'Sun-kissed beaches, historic ruins and world-class cuisine await you in beautiful Turkey.',
      tour2_title:'Dubai Luxury City Escape',
      tour2_desc:'Experience the height of modern luxury — skyscrapers, desert safaris & shopping malls.',
      tour3_title:'Maldives Paradise Honeymoon',
      tour3_desc:'Crystal-clear waters, overwater bungalows, and pristine white-sand beaches.',
      tour4_title:'Thailand Island Adventure',
      tour4_desc:'Temples, street food, crystal beaches — the ultimate Asian adventure awaits.',
      tour5_title:'Italian Riviera & Rome Tour',
      tour5_desc:'Art, history, pasta and la dolce vita — Italy at its finest for the discerning traveller.',
      tour6_title:'Egypt Pyramids & Red Sea',
      tour6_desc:'Ancient wonders and warm Red Sea beaches — the perfect blend of culture and relaxation.',
      nights_5:'5 nights', nights_7:'7 nights', nights_8:'8 nights', nights_9:'9 nights', nights_10:'10 nights',
      flight_incl:'Flight incl.', all_incl:'All-inclusive', hotel_5star:'5-star hotel',
      honeymoon:'Honeymoon', guide_incl:'Guide incl.', culture:'Culture', beach:'Beach',
      hot_label:'🔥 Limited Offers', hot_title:'Hot <span>Deals</span> This Week',
      hot_sub:'Flash sales and last-minute deals — grab them before they\'re gone!',
      hot_deal_badge:'HOT DEAL', discount_30:'-30%', flash_sale:'FLASH SALE', discount_25:'-25%',
      grab_deal:'Grab This Deal →', book_now_s:'Book Now',
      exc_label:'Day Trips & Culture', exc_title:'<span>Excursion</span> Tours',
      exc_sub:'Explore local wonders and international marvels with our guided excursion tours.',
      exc_all:'All', exc_local:'Local (Uzbekistan)', exc_intl:'International', exc_cult:'Cultural',
      exc1_title:'Samarkand Heritage Tour', exc1_sub:'Registan Square, Gur-e-Amir & Shah-i-Zinda',
      exc2_title:'Bukhara Old City Walk', exc2_sub:'Ark Fortress, Kalon Minaret & Bazaars',
      exc3_title:'Istanbul Old City Tour', exc3_sub:'Hagia Sophia, Grand Bazaar & Bosphorus',
      exc4_title:'Paris City Highlights', exc4_sub:'Eiffel Tower, Louvre & Montmartre',
      exc5_title:'Khiva Walled City Tour', exc5_sub:'Ichon-Qala, Kalta Minor & Juma Mosque',
      exc6_title:'Desert Safari – Abu Dhabi', exc6_sub:'Dunes, camel rides & Bedouin dinner',
      exc7_title:'Rome Ancient Wonders', exc7_sub:'Colosseum, Vatican & Trevi Fountain',
      exc8_title:'Tokyo & Kyoto Cultural', exc8_sub:'Temples, tea ceremony & Mount Fuji',
      day_1:'1 day', day_2:'2 days', half_day:'Half day',
      hotels_label:'Accommodation', hotels_title:'Handpicked <span>Hotels</span>',
      hotels_sub:'From cozy boutiques to lavish 5-star resorts — every night should be extraordinary.',
      per_night:'per night', btn_book_hotel:'Reserve',
      flights_label:'Air Travel', flights_title:'<span>Flight</span> Tickets',
      flights_sub:'We search hundreds of airlines to get you the best fares. Tell us your route and we\'ll handle the rest.',
      one_way:'One Way', round_trip:'Round Trip', multi_city:'Multi-city',
      from_city:'From', to_city:'To', depart_date:'Departure', return_date:'Return',
      passengers:'Passengers', search_flights:'Search Flights & Request Booking',
      about_label:'Who We Are', about_title:'Your Trusted <span>Travel Partner</span> Since 2016',
      about_desc1:'Sanremo Travel is Tashkent\'s premier travel agency, built on the foundation of personalized service, expert knowledge, and an unwavering commitment to making your travel dreams a reality.',
      about_desc2:'From spontaneous weekend getaways to carefully planned luxury honeymoons and family holidays — we craft every journey with passion and attention to detail.',
      years_exp:'Years<br>Experience',
      feat1_title:'Licensed & Certified Agency', feat1_desc:'Officially licensed travel operator in Uzbekistan. Your money and travel are 100% protected.',
      feat2_title:'24/7 Support While You Travel', feat2_desc:'Our team is always a call or message away — before, during, and after your trip.',
      feat3_title:'Premium Partners Worldwide', feat3_desc:'Partnerships with leading airlines, 5-star hotels, and local tour operators in 40+ countries.',
      director_title:'General Director – Sanremo Travel', director_name:'Xallakova Nodiraxon Rozimuhammad qizi', director_quote:'"We don\'t just book trips — we create memories that last a lifetime."',
      test_label:'Happy Travelers', test_title:'What Our <span>Clients Say</span>',
      review1:'"Sanremo Travel made our honeymoon to Maldives absolutely magical. Every detail was perfectly arranged. We\'ll definitely be back for our next adventure!"',
      review2:'"Professional team, great prices, and everything went smooth. Our family trip to Turkey was incredible. The kids are still talking about it months later!"',
      review3:'"The Dubai tour package was worth every penny. 5-star hotel, amazing excursions — Sanremo Travel exceeded all expectations. 100% recommend!"',
      faq_label:'FAQ', faq_title:'Frequently Asked <span>Questions</span>',
      faq1_q:'How do I book a tour?', faq1_a:'Simply fill out our booking form on this page, call us at +998940050808, or message us on Telegram/WhatsApp. Our team will get back to you within 2 hours to confirm your booking.',
      faq2_q:'What payment methods do you accept?', faq2_a:'We accept cash (so\'m), bank transfers, and all major Uzbek payment cards. For international payments, we also accept SWIFT transfers. Payment plans may be available for premium packages.',
      faq3_q:'Is visa assistance included?', faq3_a:'Yes! We provide visa support for all destinations we offer. Our team prepares all required documents, invitation letters, and guides you through the entire process.',
      faq4_q:'What is your cancellation policy?', faq4_a:'Cancellations made 30+ days before departure receive a full refund. 15–30 days: 50% refund. Less than 15 days: non-refundable. We strongly recommend travel insurance for all bookings.',
      faq5_q:'Do you offer group tour discounts?', faq5_a:'Absolutely! Groups of 5+ receive a 10% discount, and groups of 10+ receive 15% off. We also offer corporate travel packages for businesses. Contact us for custom group pricing.',
      faq6_q:'Is travel insurance available?', faq6_a:'Yes, we offer comprehensive travel insurance covering medical emergencies, trip cancellation, lost baggage, and more. We highly recommend adding insurance to every booking for complete peace of mind.',
      booking_label:'Get In Touch', booking_title:'Ready to Start <span style="color:var(--gold-lt);font-style:italic;">Your Journey?</span>',
      booking_sub:'Fill in the form and our travel expert will contact you within 2 hours with the best options for your dream trip.',
      bp1_title:'Fast Response', bp1_desc:'Our team replies within 2 hours with personalized tour options tailored for you.',
      bp2_title:'Secure Booking', bp2_desc:'Your data is safe. We never share your information with third parties.',
      bp3_title:'Best Price Guarantee', bp3_desc:'Found a cheaper identical tour elsewhere? We\'ll match or beat the price.',
      form_title:'Book Your Tour', form_name:'Full Name *', form_phone:'Phone Number *',
      form_dest:'Destination', dest_select:'Select Destination', form_date:'Travel Date',
      form_persons:'Number of Persons', form_message:'Message (optional)',
      form_submit:'Send Booking Request', form_note:'✓ Free consultation · No hidden fees · 2-hour response',
      success_title:'Booking Request Sent!', success_desc:'Thank you! Our travel expert will contact you within 2 hours via phone or Telegram.',
      contact_label:'Find Us', contact_title:'Contact <span>Sanremo Travel</span>',
      contact_card_title:'Get in Touch', contact_phone_lbl:'Phone', contact_email_lbl:'Email',
      contact_hours_lbl:'Working Hours', contact_hours:'Mon – Fri: 09:00 – 18:00',
      contact_addr_lbl:'Address', contact_addr:'Tashkent, Yakkasaray district,<br>Abdulla Qahhor street, house 5',
      follow_us:'Follow Us', call_us:'Call Us', write_telegram:'Write on Telegram',
      footer_desc:'Your premium travel partner in Tashkent. We craft unforgettable journeys across the world with passion, expertise, and personal care.',
      quick_links:'Quick Links', footer_tours_lbl:'Top Destinations', contact_us_lbl:'Contact Info',
      footer_rights:'All rights reserved.', footer_made:'Made with ❤️ in Tashkent, Uzbekistan',
    },
    ru: {
      nav_home:'Главная', nav_tours:'Туры', nav_hot:'Горящие туры', nav_exc:'Экскурсии',
      nav_hotels:'Отели', nav_flights:'Авиабилеты', nav_about:'О нас', nav_contact:'Контакты',
      btn_book:'✈ Забронировать',
      hero_badge:'Премиум Тур Агентство • Ташкент',
      hero_title:'Откройте для себя <span>Самые Красивые</span> Направления Мира',
      hero_sub:'Ваш отпуск мечты всего в одном клике. Туры класса люкс, первоклассные отели и незабываемые впечатления.',
      hero_btn1:'<i class="fa-solid fa-earth-americas"></i> Смотреть туры', hero_btn2:'<i class="fa-solid fa-phone"></i> Бесплатная консультация',
      search_dest:'Направление', search_date:'Дата поездки', search_budget:'Бюджет',
      search_dest_ph:'Куда едем?', budget_any:'Любой бюджет', search_btn:'Найти',
      stat1:'Довольных туристов', stat2:'Тур-пакетов', stat3:'Охваченных стран', stat4:'Лет опыта',
      tours_label:'Наши туры', tours_title:'Лучшие <span>Туры</span> от нас',
      tours_sub:'Тщательно отобранные направления и маршруты для незабываемого путешествия.',
      from_per_person:'от / на чел.', btn_book_tour:'Забронировать', view_all_tours:'🌍 Все туры',
      badge_popular:'Популярный', badge_luxury:'Люкс', badge_exclusive:'Эксклюзив',
      badge_value:'Лучшая цена', badge_premium:'Премиум', badge_new:'Новинка',
      loc_turkey:'Турция, Анталья', loc_dubai:'ОАЭ, Дубай', loc_maldives:'Мальдивы',
      loc_thailand:'Таиланд, Бангкок и Пхукет', loc_italy:'Италия, Рим и Амальфи', loc_egypt:'Египет, Хургада и Каир',
      tour1_title:'Турция «Всё включено»',
      tour1_desc:'Солнечные пляжи, исторические руины и кухня мирового класса ждут вас в прекрасной Турции.',
      tour2_title:'Дубай — Роскошный побег в город',
      tour2_desc:'Небоскрёбы, сафари в пустыне и торговые центры — современная роскошь на высшем уровне.',
      tour3_title:'Мальдивы — Медовый рай',
      tour3_desc:'Кристально чистые воды, бунгало над водой и белоснежные пляжи.',
      tour4_title:'Таиланд — Приключение на островах',
      tour4_desc:'Храмы, уличная еда, хрустальные пляжи — лучшее азиатское приключение.',
      tour5_title:'Итальянская Ривьера и Рим',
      tour5_desc:'Искусство, история, паста и дольче вита — Италия в лучшем виде для взыскательного путешественника.',
      tour6_title:'Египет — Пирамиды и Красное море',
      tour6_desc:'Древние чудеса и тёплые пляжи Красного моря — идеальное сочетание культуры и отдыха.',
      nights_5:'5 ночей', nights_7:'7 ночей', nights_8:'8 ночей', nights_9:'9 ночей', nights_10:'10 ночей',
      flight_incl:'Перелёт вкл.', all_incl:'Всё включено', hotel_5star:'Отель 5 звёзд',
      honeymoon:'Медовый месяц', guide_incl:'Гид вкл.', culture:'Культура', beach:'Пляж',
      hot_label:'🔥 Ограниченные предложения', hot_title:'Горящие <span>Туры</span> Этой Недели',
      hot_sub:'Акции и туры последнего момента — успейте забрать!',
      hot_deal_badge:'ГОРЯЩИЙ ТУР', discount_30:'-30%', flash_sale:'АКЦИЯ', discount_25:'-25%',
      grab_deal:'Забронировать →', book_now_s:'Бронировать',
      exc_label:'Однодневные туры', exc_title:'<span>Экскурсионные</span> туры',
      exc_sub:'Исследуйте местные достопримечательности и международные чудеса с нашими гидами.',
      exc_all:'Все', exc_local:'Местные (Узбекистан)', exc_intl:'Международные', exc_cult:'Культурные',
      exc1_title:'Тур по наследию Самарканда', exc1_sub:'Площадь Регистан, Гур-э-Амир & Шахи-Зинда',
      exc2_title:'Прогулка по старому Бухаре', exc2_sub:'Крепость Арк, Минарет Калон & Базары',
      exc3_title:'Тур по старому Стамбулу', exc3_sub:'Айя-София, Гранд Базар & Босфор',
      exc4_title:'Лучшее Парижа', exc4_sub:'Эйфелева башня, Лувр & Монмартр',
      exc5_title:'Тур по крепостному Хиве', exc5_sub:'Ичан-Кала, Калта-Минор & Мечеть Джума',
      exc6_title:'Сафари в пустыне – Абу-Даби', exc6_sub:'Дюны, катание на верблюдах & бедуинский ужин',
      exc7_title:'Древние чудеса Рима', exc7_sub:'Колизей, Ватикан & Фонтан Треви',
      exc8_title:'Культурный тур Токио & Киото', exc8_sub:'Храмы, чайная церемония & Фудзияма',
      day_1:'1 день', day_2:'2 дня', half_day:'Полдня',
      hotels_label:'Размещение', hotels_title:'Лучшие <span>Отели</span>',
      hotels_sub:'От уютных бутиков до роскошных 5-звёздочных курортов — каждая ночь должна быть особенной.',
      per_night:'за ночь', btn_book_hotel:'Забронировать',
      flights_label:'Авиаперелёты', flights_title:'<span>Авиабилеты</span>',
      flights_sub:'Мы ищем лучшие цены среди сотен авиакомпаний. Скажите маршрут — мы сделаем остальное.',
      one_way:'В одну сторону', round_trip:'Туда и обратно', multi_city:'Несколько городов',
      from_city:'Откуда', to_city:'Куда', depart_date:'Дата вылета', return_date:'Дата возврата',
      passengers:'Пассажиры', search_flights:'Найти авиабилеты и подать заявку',
      about_label:'О компании', about_title:'Ваш надёжный <span>партнёр</span> с 2016 года',
      about_desc1:'Sanremo Travel — ведущее туристическое агентство Ташкента, основанное на принципах персонального сервиса, экспертных знаний и искренней заботы о каждом клиенте.',
      about_desc2:'Мы создаём каждое путешествие с любовью — от спонтанных выходных до тщательно спланированного свадебного тура или семейного отдыха.',
      years_exp:'Лет<br>опыта',
      feat1_title:'Лицензированное агентство', feat1_desc:'Официально лицензированный туроператор в Узбекистане. Ваши деньги и поездка под 100% защитой.',
      feat2_title:'Поддержка 24/7 в поездке', feat2_desc:'Наша команда всегда на связи — до, во время и после путешествия.',
      feat3_title:'Премиальные партнёры по всему миру', feat3_desc:'Партнёрства с ведущими авиалиниями, 5-звёздочными отелями и туроператорами в 40+ странах.',
      director_title:'Генеральный директор – Sanremo Travel', director_name:'Халлакова Нодирахон Розимухаммад қизи', director_quote:'"Мы не просто бронируем туры — мы создаём воспоминания на всю жизнь."',
      test_label:'Довольные туристы', test_title:'Что говорят <span>наши клиенты</span>',
      review1:'"Sanremo Travel сделал наш медовый месяц на Мальдивах поистине волшебным. Каждая деталь была идеально организована. Обязательно вернёмся!"',
      review2:'"Профессиональная команда, отличные цены, всё прошло гладко. Поездка семьёй в Турцию была незабываемой. Дети до сих пор вспоминают!"',
      review3:'"Тур в Дубай стоил каждой копейки. 5-звёздочный отель, потрясающие экскурсии — Sanremo Travel превзошёл все ожидания. 100% рекомендую!"',
      faq_label:'Вопросы и ответы', faq_title:'Часто задаваемые <span>вопросы</span>',
      faq1_q:'Как забронировать тур?', faq1_a:'Заполните форму на этой странице, позвоните по +998940050808 или напишите нам в Telegram/WhatsApp. Мы ответим в течение 2 часов.',
      faq2_q:'Какие способы оплаты вы принимаете?', faq2_a:'Мы принимаем наличные (сум), банковские переводы и все основные карты Узбекистана. Для международных платежей — SWIFT переводы.',
      faq3_q:'Помогаете с оформлением визы?', faq3_a:'Да! Мы оказываем визовую поддержку для всех наших направлений: подготовка документов, приглашения, сопровождение процесса.',
      faq4_q:'Какова политика отмены?', faq4_a:'Отмена за 30+ дней — полный возврат. За 15–30 дней — 50% возврат. Менее 15 дней — невозвратно. Рекомендуем страховку для каждого тура.',
      faq5_q:'Есть ли скидки для групп?', faq5_a:'Конечно! Группы от 5 чел. — скидка 10%, от 10 чел. — 15%. Также предлагаем корпоративные туры. Свяжитесь для индивидуальных условий.',
      faq6_q:'Есть ли страхование путешествий?', faq6_a:'Да, предлагаем комплексное страхование: медицинские расходы, отмена поездки, потеря багажа и многое другое.',
      booking_label:'Связаться с нами', booking_title:'Готовы начать <span style="color:var(--gold-lt);font-style:italic;">ваше путешествие?</span>',
      booking_sub:'Заполните форму и наш специалист свяжется с вами в течение 2 часов с лучшими предложениями.',
      bp1_title:'Быстрый ответ', bp1_desc:'Наша команда отвечает в течение 2 часов с персональными предложениями.',
      bp2_title:'Безопасное бронирование', bp2_desc:'Ваши данные в безопасности. Мы не передаём информацию третьим лицам.',
      bp3_title:'Гарантия лучшей цены', bp3_desc:'Нашли дешевле? Мы снизим цену или вернём разницу.',
      form_title:'Забронировать тур', form_name:'ФИО *', form_phone:'Телефон *',
      form_dest:'Направление', dest_select:'Выберите направление', form_date:'Дата поездки',
      form_persons:'Кол-во человек', form_message:'Сообщение (необязательно)',
      form_submit:'Отправить заявку', form_note:'✓ Бесплатно · Без скрытых платежей · Ответ через 2 часа',
      success_title:'Заявка отправлена!', success_desc:'Спасибо! Наш менеджер свяжется с вами в течение 2 часов по телефону или Telegram.',
      contact_label:'Найдите нас', contact_title:'Контакты <span>Sanremo Travel</span>',
      contact_card_title:'Свяжитесь с нами', contact_phone_lbl:'Телефон', contact_email_lbl:'Email',
      contact_hours_lbl:'Часы работы', contact_hours:'Пн – Пт: 09:00 – 18:00',
      contact_addr_lbl:'Адрес', contact_addr:'Ташкент, Яккасарайский район,<br>ул. Абдуллы Каххора, дом 5',
      follow_us:'Мы в соцсетях', call_us:'Позвонить', write_telegram:'Написать в Telegram',
      footer_desc:'Ваш премиальный туристический партнёр в Ташкенте. Создаём незабываемые путешествия по всему миру.',
      quick_links:'Быстрые ссылки', footer_tours_lbl:'Популярные направления', contact_us_lbl:'Контакты',
      footer_rights:'Все права защищены.', footer_made:'Сделано с ❤️ в Ташкенте',
    },
    uz: {
      nav_home:'Bosh sahifa', nav_tours:'Turlar', nav_hot:'Qizg\'in turlar', nav_exc:'Ekskursiyalar',
      nav_hotels:'Mehmonxonalar', nav_flights:'Aviabiletlar', nav_about:'Biz haqimizda', nav_contact:'Aloqa',
      btn_book:'✈ Bron qilish',
      hero_badge:'Premium Sayohat Agentligi • Toshkent',
      hero_title:'Dunyoning <span>Eng Go\'zal</span> Manzillarini Kashf Eting',
      hero_sub:'Orzu qilgan ta\'tilingiz bir klik uzoqda. Premium turlar, hashamatli mehmonxonalar va unutilmas tajribalar.',
      hero_btn1:'<i class="fa-solid fa-earth-americas"></i> Turlarni Ko\'rish', hero_btn2:'<i class="fa-solid fa-phone"></i> Bepul Maslahat',
      search_dest:'Manzil', search_date:'Sayohat sanasi', search_budget:'Byudjet',
      search_dest_ph:'Qayerga bormoqchisiz?', budget_any:'Har qanday byudjet', search_btn:'Qidirish',
      stat1:'Mamnun Sayohatchilar', stat2:'Tur Paketlar', stat3:'Qamrab olingan mamlakatlar', stat4:'Yillik tajriba',
      tours_label:'Bizning turlar', tours_title:'<span>Eng Yaxshi</span> Turlarimiz',
      tours_sub:'Unutilmas sayohat uchun maxsus tanlangan yo\'nalishlar va marshrutlar.',
      from_per_person:'dan / kishi', btn_book_tour:'Bron qilish', view_all_tours:'🌍 Barcha turlar',
      badge_popular:'Mashhur', badge_luxury:'Lyuks', badge_exclusive:'Eksklyuziv',
      badge_value:'Eng Yaxshi Narx', badge_premium:'Premium', badge_new:'Yangi',
      loc_turkey:'Turiya, Antalya', loc_dubai:'BAA, Dubay', loc_maldives:'Maldiv orollari',
      loc_thailand:'Tailand, Bangkok va Phuket', loc_italy:'Italiya, Rim va Amalfi', loc_egypt:'Misr, Xurgada va Qohira',
      tour1_title:'Turiya «Hammasi Kiradi» Tajribasi',
      tour1_desc:'Go\'zal Turiyaning quyoshli plyajlari, tarixiy xarobalar va jahon darajasidagi oshxonasi sizni kutmoqda.',
      tour2_title:'Dubay — Hashamatli Shahar Safarhi',
      tour2_desc:'Osmono\'par binolar, cho\'l safarhi va savdo markazlari — zamonaviy hashamat oliy darajada.',
      tour3_title:'Maldiv — Asal Oyi Jannatida',
      tour3_desc:'Billur suv, suv ustidagi bungalolar va oppoq qumli plyajlar.',
      tour4_title:'Tailand — Orol Sarguzashti',
      tour4_desc:'Ibodatxonalar, ko\'cha taomlari, kristall plyajlar — eng yaxshi osiyo sarguzashti.',
      tour5_title:'Italiya Riverasi va Rim Turu',
      tour5_desc:'San\'at, tarix, pasta va dolce vita — talabchan sayohatchi uchun Italiyaning eng go\'zal qirralari.',
      tour6_title:'Misr — Piramidalar va Qizil Dengiz',
      tour6_desc:'Qadimiy mo\'jizalar va iliq Qizil dengiz plyajlari — madaniyat va dam olishning mukammal uyg\'unligi.',
      nights_5:'5 kecha', nights_7:'7 kecha', nights_8:'8 kecha', nights_9:'9 kecha', nights_10:'10 kecha',
      flight_incl:'Parvoz kiritilgan', all_incl:'Hammasi kiritilgan', hotel_5star:'5 yulduzli mehmonxona',
      honeymoon:'Asal oyi', guide_incl:'Gid kiritilgan', culture:'Madaniyat', beach:'Plyaj',
      hot_label:'🔥 Cheklangan takliflar', hot_title:'Bu Haftaning <span>Qizg\'in</span> Turlari',
      hot_sub:'Chegirmali va oxirgi daqiqa takliflari — vaqtingizni boy bermang!',
      hot_deal_badge:'QIZG\'IN TUR', discount_30:'-30%', flash_sale:'AKSIYA', discount_25:'-25%',
      grab_deal:'Bron qilish →', book_now_s:'Bron qilish',
      exc_label:'Kunlik sayohatlar', exc_title:'<span>Ekskursiya</span> Turlari',
      exc_sub:'Mahalliy va xalqaro diqqatga sazovor joylarni gidimiz bilan kashf eting.',
      exc_all:'Barchasi', exc_local:'Mahalliy (O\'zbekiston)', exc_intl:'Xalqaro', exc_cult:'Madaniy',
      exc1_title:'Samarqand Meros Turu', exc1_sub:'Registon Maydoni, G\'ur-i-Amir & Shohizinda',
      exc2_title:'Buxoro Qadimiy Shahar Turu', exc2_sub:'Ark Qal\'asi, Kalon Minorasi & Bozorlar',
      exc3_title:'Istanbul Qadimiy Shahar Turu', exc3_sub:'Aya Sofiya, Buyuk Bozor & Bosfor',
      exc4_title:'Parij Shahri Nishonlari', exc4_sub:'Eyfel Minorasi, Luvr & Monmartr',
      exc5_title:'Xiva Devorli Shahar Turu', exc5_sub:'Ichan-Qal\'a, Qalta Minor & Juma Masjidi',
      exc6_title:'Cho\'l Safarhi – Abu Dabi', exc6_sub:'Qumtepalar, tuya minish & badaviy kechasi',
      exc7_title:'Rimning Qadimiy Mo\'jizalari', exc7_sub:'Kolizey, Vatikan & Trevi Favvorasi',
      exc8_title:'Tokio & Kioto Madaniy Turu', exc8_sub:'Ma\'badlar, choy marosimi & Fuji tog\'i',
      day_1:'1 kun', day_2:'2 kun', half_day:'Yarim kun',
      hotels_label:'Yashash joyi', hotels_title:'Tanlangan <span>Mehmonxonalar</span>',
      hotels_sub:'Qulay butiklardan hashamatli 5 yulduzli rizorlargacha — har bir kecha alohida bo\'lishi kerak.',
      per_night:'kecha uchun', btn_book_hotel:'Band qilish',
      flights_label:'Aviauchirishlar', flights_title:'<span>Aviabiletlar</span>',
      flights_sub:'Yuzlab aviakompaniyalar orasidan eng qulay narxlarni topamiz. Marshrutingizni ayting — qolganini biz hal qilamiz.',
      one_way:'Bir tomonga', round_trip:'Borib-qaytish', multi_city:'Ko\'p shaharlar',
      from_city:'Qayerdan', to_city:'Qayerga', depart_date:'Jo\'nash sanasi', return_date:'Qaytish sanasi',
      passengers:'Yo\'lovchilar', search_flights:'Aviabilet qidirish va so\'rov yuborish',
      about_label:'Biz haqimizda', about_title:'2016 Yildan Beri Ishonchli <span>Sayohat Hamkoringiz</span>',
      about_desc1:'Sanremo Travel – Toshkentning yetakchi sayohat agentligi. Shaxsiy xizmat, mutaxassis bilim va har bir mijozga g\'amxo\'rlik asosida qurilgan.',
      about_desc2:'Spontan dam olish kunlaridan boshlab, diqqat bilan rejalashtirilgan hashamatli asal oyigacha — har bir sayohatni sevgi bilan yaratamiz.',
      years_exp:'Yillik<br>Tajriba',
      feat1_title:'Litsenziyalangan Agentlik', feat1_desc:'O\'zbekistonda rasman litsenziyalangan tur operator. Pulingiz va sayohatingiz 100% himoyada.',
      feat2_title:'Sayohat davomida 24/7 Yordam', feat2_desc:'Jamoamiz doimo aloqada — sayohatdan oldin, davomida va keyin.',
      feat3_title:'Dunyo bo\'ylab Premium Hamkorlar', feat3_desc:'40+ mamlakatda yetakchi aviakompaniyalar, 5 yulduzli mehmonxonalar va mahalliy operatorlar bilan hamkorlik.',
      director_title:'Bosh Direktor – Sanremo Travel', director_name:'Xallakova Nodiraxon Rozimuhammad qizi', director_quote:'"Biz shunchaki bron qilmaymiz — umr bo\'yi esda qoladigan xotiralar yaratamiz."',
      test_label:'Mamnun sayohatchilar', test_title:'Mijozlarimiz <span>Nima Deydi</span>',
      review1:'"Sanremo Travel Maldivdagi asal oyimizni sehrli qildi. Har bir detal mukammal tashkil etildi. Keyingi sayohatda ham albatta qaytamiz!"',
      review2:'"Professional jamoa, ajoyib narxlar, hammasi silliq o\'tdi. Oilamiz bilan Turiya safari unutilmas bo\'ldi. Bolalar hali ham gapiradi!"',
      review3:'"Dubay tur paketi har tiyinga arzidi. 5 yulduzli mehmonxona, ajoyib ekskursiyalar — Sanremo Travel barcha kutganlarni oshib o\'tdi. 100% maslahat beraman!"',
      faq_label:'Ko\'p so\'raladigan savollar', faq_title:'Tez-tez So\'raladigan <span>Savollar</span>',
      faq1_q:'Turni qanday bron qilaman?', faq1_a:'Ushbu sahifadagi formani to\'ldiring, +998940050808 ga qo\'ng\'iroq qiling yoki Telegram/WhatsApp orqali yozing. Jamoamiz 2 soat ichida bog\'lanadi.',
      faq2_q:'Qanday to\'lov usullari qabul qilinadi?', faq2_a:'Naqd pul (so\'m), bank o\'tkazmasi va barcha asosiy O\'zbekiston kartalari qabul qilinadi. Xalqaro to\'lovlar uchun SWIFT o\'tkazmalari ham mavjud.',
      faq3_q:'Viza olishda yordam berasizmi?', faq3_a:'Ha! Barcha yo\'nalishlar uchun viza yordami ko\'rsatamiz: hujjatlar, taklif xatlari va jarayon bo\'yicha yo\'riqnoma.',
      faq4_q:'Bekor qilish siyosati qanday?', faq4_a:'Jo\'nashdan 30+ kun oldin bekor qilish — to\'liq qaytarish. 15–30 kun: 50% qaytarish. 15 kundan kam: qaytarilmaydi. Sug\'urtani tavsiya qilamiz.',
      faq5_q:'Guruh uchun chegirmalar bormi?', faq5_a:'Albatta! 5+ kishilik guruh — 10% chegirma, 10+ kishi — 15% chegirma. Korporativ turlar ham mavjud. Shaxsiy narx uchun bog\'laning.',
      faq6_q:'Sayohat sug\'urtasi bormi?', faq6_a:'Ha, tibbiy yordam, sayohatni bekor qilish, yukni yo\'qotish va boshqalarni qamrab oluvchi kompleks sug\'urta taklif qilamiz.',
      booking_label:'Bog\'laning', booking_title:'<span style="color:var(--gold-lt);font-style:italic;">Sayohatingizni</span> Boshlashga Tayyormisiz?',
      booking_sub:'Formani to\'ldiring va mutaxassisimiz 2 soat ichida sizning orzu sayohatingiz uchun eng yaxshi variantlar bilan bog\'lanadi.',
      bp1_title:'Tezkor Javob', bp1_desc:'Jamoamiz 2 soat ichida shaxsiylashtirilgan tur variantlari bilan javob beradi.',
      bp2_title:'Xavfsiz Bron', bp2_desc:'Ma\'lumotlaringiz xavfsiz. Biz hech qachon uchinchi taraflarga ma\'lumot bermаymiz.',
      bp3_title:'Eng Yaxshi Narx Kafolati', bp3_desc:'Boshqa joyda arzonroq topdingizmi? Narxni moslashtirамiz.',
      form_title:'Turni Bron Qilish', form_name:'To\'liq ism *', form_phone:'Telefon raqami *',
      form_dest:'Yo\'nalish', dest_select:'Yo\'nalishni tanlang', form_date:'Sayohat sanasi',
      form_persons:'Odamlar soni', form_message:'Xabar (ixtiyoriy)',
      form_submit:'Ariza Yuborish', form_note:'✓ Bepul maslahat · Yashirin to\'lovlar yo\'q · 2 soatda javob',
      success_title:'Ariza Yuborildi!', success_desc:'Rahmat! Mutaxassisimiz 2 soat ichida telefon yoki Telegram orqali siz bilan bog\'lanadi.',
      contact_label:'Bizni toping', contact_title:'<span>Sanremo Travel</span> bilan Bog\'laning',
      contact_card_title:'Biz bilan bog\'laning', contact_phone_lbl:'Telefon', contact_email_lbl:'Email',
      contact_hours_lbl:'Ish vaqti', contact_hours:'Du – Ju: 09:00 – 18:00',
      contact_addr_lbl:'Manzil', contact_addr:'Toshkent, Yakkasaroy tumani,<br>Abdulla Qahhor ko\'chasi, 5-uy',
      follow_us:'Bizni kuzating', call_us:'Qo\'ng\'iroq qilish', write_telegram:'Telegramga yozish',
      footer_desc:'Toshkentdagi premium sayohat hamkoringiz. Butun dunyo bo\'ylab unutilmas sayohatlar yaratamiz.',
      quick_links:'Tezkor havolalar', footer_tours_lbl:'Mashhur yo\'nalishlar', contact_us_lbl:'Aloqa',
      footer_rights:'Barcha huquqlar himoyalangan.', footer_made:'❤️ bilan Toshkentda yasaldi',
    }
  };
  
  // ──────────────────────────────────────────────
  // LANG SYSTEM
  // ──────────────────────────────────────────────
  let currentLang = 'uz';
  
  function setLang(lang) {
    currentLang = lang;
    const dict = T[lang];
  
    // Update all [data-key] elements
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    // Placeholders
    document.querySelectorAll('[data-key-ph]').forEach(el => {
      const key = el.dataset.keyPh;
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
    // Nav links use data-navkey
    document.querySelectorAll('[data-navkey]').forEach(el => {
      const key = el.dataset.navkey;
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
  
    // Language button active state
    ['en','ru','uz'].forEach(l => {
      const btn = document.getElementById('lang'+l.charAt(0).toUpperCase()+l.slice(1));
      const mbtn = document.getElementById('mlang'+l.charAt(0).toUpperCase()+l.slice(1));
      if (btn)  btn.classList.toggle('active', l === lang);
      if (mbtn) mbtn.classList.toggle('active', l === lang);
    });
  
    // html lang
    document.documentElement.lang = lang === 'uz' ? 'uz' : lang === 'ru' ? 'ru' : 'en';
  }
  
  // ──────────────────────────────────────────────
  // LOADER
  // ──────────────────────────────────────────────
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader').classList.add('hidden');
    }, 1900);
  });
  
  // ──────────────────────────────────────────────
  // HEADER SCROLL
  // ──────────────────────────────────────────────
  window.addEventListener('scroll', () => {
    const hdr = document.getElementById('header');
    hdr.classList.toggle('scrolled', window.scrollY > 60);
  
    // Scroll top btn
    const st = document.getElementById('scroll-top');
    st.classList.toggle('visible', window.scrollY > 400);
  });
  
  // ──────────────────────────────────────────────
  // MOBILE MENU
  // ──────────────────────────────────────────────
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggle = document.getElementById('navToggle');
    menu.classList.toggle('open');
    toggle.classList.toggle('open');
  }
  function closeMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
    document.getElementById('navToggle').classList.remove('open');
  }
  
  // ──────────────────────────────────────────────
  // HERO SLIDER
  // ──────────────────────────────────────────────
  let heroIdx = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('heroDots');
  
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goSlide(i);
    dotsContainer.appendChild(dot);
  });
  
  function goSlide(idx) {
    slides[heroIdx].classList.remove('active');
    document.querySelectorAll('.hero-dot')[heroIdx].classList.remove('active');
    heroIdx = idx;
    slides[heroIdx].classList.add('active');
    document.querySelectorAll('.hero-dot')[heroIdx].classList.add('active');
  }
  
  setInterval(() => {
    goSlide((heroIdx + 1) % slides.length);
  }, 5000);
  
  // ──────────────────────────────────────────────
  // COUNTER ANIMATION
  // ──────────────────────────────────────────────
  function animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = +el.dataset.count;
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString() + (target >= 1000 ? '+' : '+');
        if (current >= target) clearInterval(timer);
      }, 25);
    });
  }
  
  // Trigger when stats bar is visible
  const statsObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); statsObs.disconnect(); }
  }, { threshold: 0.5 });
  statsObs.observe(document.querySelector('.stats-bar'));
  
  // ──────────────────────────────────────────────
  // COUNTDOWN TIMER
  // ──────────────────────────────────────────────
  function updateCountdown() {
    const end = new Date();
    end.setDate(end.getDate() + 2);
    end.setHours(23, 59, 59);
    const now = new Date();
    const diff = Math.max(0, end - now);
    const h = String(Math.floor((diff % (1000*60*60*24))/(1000*60*60))).padStart(2,'0');
    const m = String(Math.floor((diff % (1000*60*60))/(1000*60))).padStart(2,'0');
    const s = String(Math.floor((diff % (1000*60))/1000)).padStart(2,'0');
    const d = String(Math.floor(diff/(1000*60*60*24))).padStart(2,'0');
    const labels = {
      en: ['Days','Hrs','Min','Sec'],
      ru: ['Дней','Час','Мин','Сек'],
      uz: ['Kun','Soat','Daq','Son']
    };
    const L = labels[currentLang] || labels.en;
    const c = document.getElementById('countdown1');
    if (c) c.innerHTML = `
      <div class="countdown-item"><div class="countdown-num">${d}</div><div class="countdown-lbl">${L[0]}</div></div>
      <div class="countdown-item"><div class="countdown-num">${h}</div><div class="countdown-lbl">${L[1]}</div></div>
      <div class="countdown-item"><div class="countdown-num">${m}</div><div class="countdown-lbl">${L[2]}</div></div>
      <div class="countdown-item"><div class="countdown-num">${s}</div><div class="countdown-lbl">${L[3]}</div></div>
    `;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  // ──────────────────────────────────────────────
  // FAQ
  // ──────────────────────────────────────────────
  function toggleFaq(el) {
    const item = el.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }
  
  // ──────────────────────────────────────────────
  // EXCURSION FILTER
  // ──────────────────────────────────────────────
  function filterExc(cat) {
    document.querySelectorAll('.exc-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.exc-card').forEach(card => {
      const show = cat === 'all' || card.dataset.cat === cat;
      card.style.display = show ? '' : 'none';
    });
  }
  
  // ──────────────────────────────────────────────
  // FLIGHT SWAP
  // ──────────────────────────────────────────────
  function swapFlights() {
    const f = document.getElementById('flightFrom');
    const t = document.getElementById('flightTo');
    [f.value, t.value] = [t.value, f.value];
  }
  
  // ──────────────────────────────────────────────
  // FLIGHT TABS
  // ──────────────────────────────────────────────
  document.querySelectorAll('.flight-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      document.querySelectorAll('.flight-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // ──────────────────────────────────────────────
  // BOOKING FORM + TELEGRAM
  // ──────────────────────────────────────────────
  // 🔧 CONFIGURE YOUR TELEGRAM BOT HERE:
  const TELEGRAM_BOT_TOKEN = '8362664872:AAFRRsZJx5NjrTT6vuR1x77Fz2v4gX0tibQ';
  const TELEGRAM_CHAT_ID   = '-1003507982057';
  
  async function submitBooking() {
    const name    = document.getElementById('fName').value.trim();
    const phone   = document.getElementById('fPhone').value.trim();
    const dest    = document.getElementById('fDest').value;
    const date    = document.getElementById('fDate').value;
    const persons = document.getElementById('fPersons').value;
    const message = document.getElementById('fMessage').value.trim();
  
    if (!name || !phone) {
      const msg = {
        en: 'Please enter your name and phone number!',
        ru: 'Введите имя и номер телефона!',
        uz: 'Ism va telefon raqamini kiriting!'
      };
      alert(msg[currentLang] || msg.en);
      return;
    }
  
    const text = `🌍 *New Booking Request – Sanremo Travel*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✈️ *Destination:* ${dest || 'Not specified'}\n` +
      `📅 *Travel Date:* ${date || 'Not specified'}\n` +
      `👥 *Persons:* ${persons}\n` +
      `💬 *Message:* ${message || '—'}\n\n` +
      `🕐 _Submitted: ${new Date().toLocaleString('ru-RU')}_`;
  
    // Send to Telegram
    // if (TELEGRAM_BOT_TOKEN !== '8362664872:AAFRRsZJx5NjrTT6vuR1x77Fz2v4gX0tibQ') {
    //   try {
    //     await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' })
    //     });
    //   } catch(e) { console.error('Telegram send error:', e); }
    // }
    // Send to Telegram
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'Markdown'
      })
    });
  } catch(e) {
    console.error('Telegram send error:', e);
  }
  
    // Show success
    document.getElementById('bookingFormEl').style.display = 'none';
    document.getElementById('formSuccess').classList.add('show');
  }
  
  // ──────────────────────────────────────────────
  // AOS INIT
  // ──────────────────────────────────────────────
  AOS.init({
    duration: 700,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
  });
  
  // ──────────────────────────────────────────────
  // SMOOTH ACTIVE NAV
  // ──────────────────────────────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      const href = a.getAttribute('href');
      a.style.color = href === '#' + current ? 'var(--gold)' : '';
    });
  });
  
  // Init language on load
  setLang('uz');