import { MenuItem, PromoCombo, CafeReview, WorkingHours } from './types';

export const CAFE_METADATA = {
  nameCyrillic: "мој блокић",
  nameLatin: "moj blokic",
  slogan: "Топла страна блока",
  address: "Гандијева 81, Нови Београд, 11070 Београд",
  googleMapsUrl: "https://maps.google.com/?q=Gandijeva+81,+Beograd",
  instagramUrl: "https://www.instagram.com/mojblokic/",
  phone: "+381 64 111 1111", // New placeholder requested by user
  email: "mojblokic@gmail.com",
};

export const WORKING_HOURS: WorkingHours[] = [
  { days: "Понедељак - Четвртак", hours: "08:00 - 23:00" },
  { days: "Петак - Субота", hours: "08:00 - 00:00" },
  { days: "Недеља", hours: "09:00 - 23:00" }
];

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Све напитке', icon: 'Coffee' },
  { id: 'kafe', name: 'Кафе', icon: 'Sparkles' },
  { id: 'posebno', name: 'Посебно', icon: 'Award' },
  { id: 'topli_napici', name: 'Топли напици', icon: 'Flame' },
  { id: 'akcije', name: 'Акције %', icon: 'Percent' },
  { id: 'kokteli', name: 'Коктели', icon: 'Wine' },
  { id: 'piva', name: 'Пива & Жестине', icon: 'GlassWater' },
  { id: 'limunade', name: 'Освежење', icon: 'Citrus' }
];

export const MENU_ITEMS: MenuItem[] = [
  // --- KAFE ---
  {
    id: "m1",
    name: "Еспресо",
    nameLatin: "Espreso",
    price: 170,
    description: "Врхунски италијански еспресо са густом кремом, богатство ароме у сваком гутљају.",
    category: "kafe",
    badges: ["Класик"]
  },
  {
    id: "m2",
    name: "Дупли еспресо",
    nameLatin: "Dupli espreso",
    price: 250,
    description: "Двострука доза нашег пажљиво одабраног еспреса за дуплу енергију.",
    category: "kafe"
  },
  {
    id: "m3",
    name: "Домаћа кафа",
    nameLatin: "Domaca kafa",
    price: 180,
    description: "Традиционална домаћа кафа са ратлуком, укус кућне топлине.",
    category: "kafe",
    badges: ["Традиција"]
  },
  {
    id: "m4",
    name: "Американо",
    nameLatin: "Amerikano",
    price: 180,
    description: "Блажи еспресо продужен топлом водом, савршен за лагано уживање.",
    category: "kafe"
  },
  {
    id: "m5",
    name: "Макијато",
    nameLatin: "Makijato",
    price: 180,
    description: "Еспресо са капом свиленкасте млечне пене.",
    category: "kafe"
  },
  {
    id: "m6",
    name: "Кафа са млеком",
    nameLatin: "Kafa sa mlekom",
    price: 200,
    description: "Идеалан баланс јаког еспреса и топлог, кремастог млека.",
    category: "kafe"
  },
  {
    id: "m7",
    name: "Капућино",
    nameLatin: "Kapucino",
    price: 230,
    description: "Класичан капућино са богатом, меком млечном пеном.",
    category: "kafe",
    badges: ["Омиљено"]
  },
  {
    id: "m8",
    name: "Дупли капућино",
    nameLatin: "Dupli kapucino",
    price: 330,
    description: "Дупла доза еспреса зачињена обилном количином фине млечне пене.",
    category: "kafe"
  },
  {
    id: "m9",
    name: "Нес кафа",
    nameLatin: "Nes kafa",
    price: 210,
    description: "Хладна или топла инстант кафа, лагана и прозрачна.",
    category: "kafe"
  },
  {
    id: "m10",
    name: "Лате кафа",
    nameLatin: "Late kafa",
    price: 250,
    description: "Префињени еспресо са доста топлог млека и деликатним слојем пене.",
    category: "kafe"
  },

  // --- POSEBNO ---
  {
    id: "m11",
    name: "Хладна кафа",
    nameLatin: "Hladna kafa",
    price: 370,
    description: "Освежавајућа хладна кафа са куглом сладоледа од ваниле и преливом.",
    category: "posebno",
    badges: ["Летњи Хит"]
  },
  {
    id: "m12",
    name: "Еспресо мартини",
    nameLatin: "Espreso martini",
    price: 560,
    description: "Елегантни коктел са свежим еспресом, премијум вотком и ликером од кафе.",
    category: "posebno",
    badges: ["Популарно"]
  },
  {
    id: "m13",
    name: "Плазма шејк",
    nameLatin: "Plazma sejk",
    price: 340,
    description: "Богати кремасти шејк са млевеном Плазмом — апсолутни фаворит свих генерација.",
    category: "posebno",
    badges: ["Слатко Срце"]
  },

  // --- TOPLI NAPICI ---
  {
    id: "m14",
    name: "Топла чоколада",
    nameLatin: "Topla cokolada",
    price: 280,
    description: "Густа, топла и неодољива чоколадна чаролија за хладније дане.",
    category: "topli_napici",
    badges: ["Зимски фаворит"]
  },
  {
    id: "m15",
    name: "Кувано вино",
    nameLatin: "Kuvano vino",
    price: 280,
    description: "Ароматично кувано вино са зачинима: каранфилићем, циметом и наранџом.",
    category: "topli_napici"
  },
  {
    id: "m16",
    name: "Биљни & Воћни Чај",
    nameLatin: "Biljni i vocni caj",
    price: 180,
    description: "Избор премијум чајева послужених са кришком лимуна и домаћим медом.",
    category: "topli_napici"
  },

  // --- DODACI ---
  {
    id: "m17",
    name: "Шлаг",
    nameLatin: "Slag",
    price: 50,
    description: "Додатни порција ваздушастог, слатког шлага на вашој кафи или десерту.",
    category: "dodaci"
  },
  {
    id: "m18",
    name: "Ароматични Укуси",
    nameLatin: "Aromaticni ukusi",
    price: 100,
    description: "Сирупи за кафу: Ванила, Карамела, Лешник или Чоколада.",
    category: "dodaci"
  },

  // --- PIVA ---
  {
    id: "m19",
    name: "Салто Лагер (0.33l)",
    nameLatin: "Salto Lager",
    price: 280,
    description: "Квалитетно локално занатско лагер пиво, веома питко и освежавајуће.",
    category: "piva",
    badges: ["Локално Занатско"]
  },
  {
    id: "m20",
    name: "Салто Београд ИПА (0.33l)",
    nameLatin: "Salto Beograd IPA",
    price: 330,
    description: "Богата цитрусна арома хмеља у аутентичном београдском ИПА пиву.",
    category: "piva",
    badges: ["Локално Занатско"]
  },

  // --- ZESTINE ---
  {
    id: "m21",
    name: "Домаћа Ракија",
    nameLatin: "Domaca Rakija",
    price: 250,
    description: "Аутентична српска ракија врхунског квалитета: Дуња, Шљива, Кајсија или Крушка.",
    category: "zestine",
    badges: ["Блок Специјал"]
  },
  {
    id: "m22",
    name: "Коњак",
    nameLatin: "Konjak",
    price: 500,
    description: "Премијум одабрани француски коњак за посебне тренутке.",
    category: "zestine"
  },
  {
    id: "m23",
    name: "Вотка",
    nameLatin: "Votka",
    price: 380,
    description: "Чиста и кристално филтрирана вотка.",
    category: "zestine"
  },
  {
    id: "m24",
    name: "Џин",
    nameLatin: "Dzin",
    price: 380,
    description: "Ароматични џин са нотама клеке и зачинског биља.",
    category: "zestine"
  },
  {
    id: "m25",
    name: "Текила",
    nameLatin: "Tekila",
    price: 400,
    description: "Врхунска мексичка текила по служена са лимуном и сољу.",
    category: "zestine"
  },

  // --- KOKTELI ---
  {
    id: "m26",
    name: "Коктели на бази кафе",
    nameLatin: "Kokteli na bazi kafe",
    price: 560,
    description: "Избор коктела: Ирска кафа (Ирски виски, кафа, шлаг) или Бели Рус (Вотка, ликер од кафе, слатка павлака).",
    category: "kokteli"
  },
  {
    id: "m27",
    name: "Џин Тоник",
    nameLatin: "Dzin Tonik",
    price: 560,
    description: "Класична летња комбинација квалитетног џина, тоника, лимете и зачина.",
    category: "kokteli"
  },
  {
    id: "m28",
    name: "Аперол Шприц",
    nameLatin: "Aperol Spritz",
    price: 620,
    description: "Италијански класик: Аперол, просеко, сода и кришка свеже наранџе.",
    category: "kokteli"
  },

  // --- LIMUNADE ---
  {
    id: "m29",
    name: "Свежа Лимунада",
    nameLatin: "Sveza Limunada",
    price: 290,
    description: "Свеже цеђена лимунада пуна витамина Ц.",
    category: "limunade",
    badges: ["100% Природно"]
  },
  {
    id: "m30",
    name: "Лимунада са укусима",
    nameLatin: "Limunada sa ukusima",
    price: 320,
    description: "Наша домаћа лимунада обогаћена финим сирупима од боровнице, јагоде или зове.",
    category: "limunade"
  },

  // --- OSTALA PICA ---
  {
    id: "m31",
    name: "Кока Кола / Фанта",
    nameLatin: "Koka Kola / Fanta",
    price: 230,
    description: "Популарни газирани напици у стакленој флашици (0.25l).",
    category: "ostala_pica"
  },
  {
    id: "m32",
    name: "Некст Сокови",
    nameLatin: "Next Sokovi",
    price: 230,
    description: "Природни негазирани воћни сокови различитих укуса (јабука, наранџа, бресква).",
    category: "ostala_pica"
  },
  {
    id: "m33",
    name: "Роса Вода (0.33l)",
    nameLatin: "Rosa Voda",
    price: 150,
    description: "Негазирана природна изворска вода.",
    category: "ostala_pica"
  }
];

export const PROMO_COMBOS: PromoCombo[] = [
  {
    id: "p1",
    title: "Кафа + Кока Кола",
    price: 280,
    description: "Одаберите своју омиљену јутарњу кафу и хладну Кока Колу по специјалној цени.",
    category: "kafe",
    note: "Кафе: еспресо, макијато, американо или домаћа"
  },
  {
    id: "p2",
    title: "Кафа + Ракија (до 12ч)",
    price: 280,
    description: "Прави београдски јутарњи ритуал за добар почетак дана у блоку.",
    category: "kafe",
    note: "Доступно сваког дана до 12:00 часова"
  },
  {
    id: "p3",
    title: "Кафа + Колач",
    price: 300,
    description: "Препустите се слатком моменту уз укусну кафу и парче домаћег колача дана.",
    category: "kafe"
  },
  {
    id: "p4",
    title: "Кафа + Плазма Шејк",
    price: 380,
    description: "Дупли ужитак за највеће сладокусце. Најбоља кафа упарена са пуним укусом Плазме.",
    category: "kafe"
  },
  {
    id: "p5",
    title: "Капућино + Кока Кола",
    price: 300,
    description: "Кремасти капућино и ледено хладна Кока Кола.",
    category: "kafe"
  },
  {
    id: "p6",
    title: "Коктели на бази кафе (Акција)",
    price: 400,
    description: "Посебан поподневни понуда за наше омиљене кафе коктеле.",
    category: "kokteli",
    note: "Одаберите: Ирска кафа или Бели Рус"
  },
  {
    id: "p7",
    title: "Аперол Шприц (Акција)",
    price: 400,
    description: "Освежавајући поподневни Аперол Шприц по невероватној акцијској цени.",
    category: "kokteli",
    note: "Редовна цена изван акције је 620 рсд!"
  }
];

export const CAFE_REVIEWS: CafeReview[] = [
  {
    id: "r1",
    author: "Katarina Stancic",
    authorDetails: "Локални водич · 125 рецензија · 72 слике",
    rating: 5,
    text: "Одлична кафа, љубазно и културно особље, ушушкана и пријатна атмосфера!! Све похвале 👌🏻👌🏻👌🏻",
    date: "пре годину дана"
  },
  {
    id: "r2",
    author: "Стеван Љуботина",
    authorDetails: "Локални водич · 12 рецензија · 6 слика",
    rating: 5,
    text: "Прелеп мали локалчић, одлично уређен, са љубазним особљем и профи спремљеном кафом у великим \"дозама\". Нема бољег места да са комшијама попијете неку кафу за коју су специјализовани, али има и других пића. Препорука!",
    date: "пре годину дана"
  },
  {
    id: "r3",
    author: "Peter-Newman Messan",
    authorDetails: "1 рецензија",
    rating: 5,
    text: "Rakija, Irish Coffee and Espresso Martini are the must haves 😉\n\nGreat ambience, love the staff!",
    date: "пре годину дана"
  }
];
