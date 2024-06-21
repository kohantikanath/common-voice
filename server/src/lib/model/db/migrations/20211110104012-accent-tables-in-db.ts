const ACCENTS: any = {
  br: {
    gwenedeg: 'Gwenedeg',
    kerneveg: 'Kerneveg',
    leoneg: 'Leoneg',
    tregerieg: 'Tregerieg',
  },
  ca: {
    balearic: 'balear',
    central: 'central',
    northwestern: 'nord-occidental',
    northern: 'septentrional',
    valencian: 'valencià',
    learner_es: 'aprenent (recent, des del castellà)',
    learner_other: "aprenent (recent, des d'altres llengües)",
  },
  cy: {
    united_kingdom: 'Y Deyrnas Unedig Cymraeg',
  },
  de: {
    germany: 'Deutschland Deutsch',
    netherlands: 'Niederländisch Deutsch',
    austria: 'Österreichisches Deutsch',
    poland: 'Polnisch Deutsch',
    switzerland: 'Schweizerdeutsch',
    united_kingdom: 'Britisches Deutsch',
    france: 'Französisch Deutsch',
    denmark: 'Dänisch Deutsch',
    belgium: 'Belgisches Deutsch',
    hungary: 'Ungarisch Deutsch',
    brazil: 'Brasilianisches Deutsch',
    czechia: 'Tschechisch Deutsch',
    united_states: 'Amerikanisches Deutsch',
    slovakia: 'Slowakisch Deutsch',
    russia: 'Russisch Deutsch',
    kazakhstan: 'Kasachisch Deutsch',
    italy: 'Italienisch Deutsch',
    finland: 'Finnisch Deutsch',
    slovenia: 'Slowenisch Deutsch',
    canada: 'Kanadisches Deutsch',
    bulgaria: 'Bulgarisch Deutsch',
    greece: 'Griechisch Deutsch',
    lithuania: 'Litauisch Deutsch',
    luxembourg: 'Luxemburgisches Deutsch',
    paraguay: 'Paraguayisch Deutsch',
    romania: 'Rumänisch Deutsch',
    liechtenstein: 'liechtensteinisches Deutscher',
    namibia: 'Namibisch Deutsch',
    turkey: 'Türkisch Deutsch',
  },
  en: {
    us: 'United States English',
    australia: 'Australian English',
    england: 'England English',
    canada: 'Canadian English',
    philippines: 'Filipino',
    hongkong: 'Hong Kong English',
    indian: 'India and South Asia (India, Pakistan, Sri Lanka)',
    ireland: 'Irish English',
    malaysia: 'Malaysian English',
    newzealand: 'New Zealand English',
    scotland: 'Scottish English',
    singapore: 'Singaporean English',
    southatlandtic: 'South Atlantic (Falkland Islands, Saint Helena)',
    african: 'Southern African (South Africa, Zimbabwe, Namibia)',
    wales: 'Welsh English',
    bermuda: 'West Indies and Bermuda (Bahamas, Bermuda, Jamaica, Trinidad)',
  },
  eo: {
    internacia: 'Internacia',
  },
  es: {
    nortepeninsular:
      'España: Norte peninsular (Asturias, Castilla y León, Cantabria, País Vasco, Navarra, Aragón, La Rioja, Guadalajara, Cuenca)',
    centrosurpeninsular:
      'España: Centro-Sur peninsular (Madrid, Toledo, Castilla-La Mancha)',
    surpeninsular: 'España: Sur peninsular (Andalucia, Extremadura, Murcia)',
    canario: 'España: Islas Canarias',
    mexicano: 'México',
    americacentral: 'América central',
    caribe:
      'Caribe: Cuba, Venezuela, Puerto Rico, República Dominicana, Panamá, Colombia caribeña, México caribeño, Costa del golfo de México',
    andino:
      'Andino-Pacífico: Colombia, Perú, Ecuador, oeste de Bolivia y Venezuela andina',
    rioplatense: 'Rioplatense: Argentina, Uruguay, este de Bolivia, Paraguay',
    chileno: 'Chileno: Chile, Cuyo',
    filipinas: 'Español de Filipinas',
  },
  eu: {
    mendebalekoa:
      'Mendebalekoa (Araka, Bizkaia, Gipuzkoako mendebaleko herri batzuk)',
    erdialdekoa_nafarra: 'Erdialdekoa edo Nafarra (Gipuzkoa, Nafarroa)',
    nafarlapurtarra_zuberoatarra:
      'Nafar-lapurtarra edo Zuberotarra (Lapurdi, Nafarroa Beherea, Zuberoa)',
  },
  fr: {
    france: 'Français de France',
    madagascar: 'Français de Madagascar',
    cameroon: 'Français du Cameroun',
    germany: 'Français d’Allemagne',
    united_kingdom: 'Français du Royaume-Uni',
    cote_d_ivoire: 'Français de Côte d’Ivoire',
    tunisia: 'Français de Tunisie',
    mali: 'Français du Mali',
    algeria: 'Français d’Algérie',
    canada: 'Français du Canada',
    morocco: 'Français du Maroc',
    burundi: 'Français du Burundi',
    senegal: 'Français du Sénégal',
    niger: 'Français du Niger',
    netherlands: 'Français des Pays-Bas',
    togo: 'Français de la République du Togo',
    burkina_faso: 'Français du Burkina-Faso',
    belgium: 'Français de Belgique',
    congo_brazzaville: 'Français du Congo (Brazzaville)',
    congo_kinshasa: 'Français du Congo (Kinshasa)',
    italy: 'Français d’Italie',
    benin: 'Français du Bénin',
    romania: 'Français de Roumanie',
    guinea: 'Français de Guinée',
    chad: 'Français du Tchad',
    central_african_republic: 'Français de République centrafricaine',
    united_states: 'Français des États-Unis',
    switzerland: 'Français de Suisse',
    portugal: 'Français du Portugal',
    gabon: 'Français du Gabon',
    syria: 'Français de Syrie',
    greece: 'Français de Grèce',
    austria: 'Français d’Autriche',
    ireland: 'Français d’Irlande',
    reunion: 'Français de La Réunion',
    mauritania: 'Français de Mauritanie',
    luxembourg: 'Français du Luxembourg',
    haiti: 'Français d’Haïti',
    comoros: 'Français des Comores',
    martinique: 'Français de Martinique',
    guadeloupe: 'Français de Guadeloupe',
    hungary: 'Français d’Hongrie',
    new_caledonia: 'Français de Nouvelle-Calédonie',
    french_polynesia: 'Français de Polynésie française',
    french_guiana: 'Français de Guyane',
    vanuatu: 'Français du Vanuatu',
    mayotte: 'Français de Mayotte',
    cyprus: 'Français de Chypre',
    equatorial_guinea: 'Français de Guinée équatoriale',
    seychelles: 'Français des Seychelles',
    malta: 'Français de Malte',
    mauritius: 'Français de l’Île Maurice',
    st_martin: 'Français de Saint-Martin',
    monaco: 'Français de Monaco',
    lebanon: 'Français du Liban',
    djibouti: 'Français de Djibouti',
    wallis_et_futuna: 'Français de Wallis et Futuna',
    st_barthelemy: 'Français de Saint-Barthélemy',
    andorra: 'Français d’Andorre',
    st_pierre_et_miquelon: 'Français de Saint-Pierre-et-Miquelon',
    rwanda: 'Français du Rwanda',
  },
  nl: {
    netherlands: 'Nederlands Nederlands',
    belgium: 'Belgisch Nederlands',
    suriname: 'Surinaams Nederlands',
    france: 'Frans Nederlands',
    germany: 'Duits Nederlands',
    curacao: 'Nederlands van Curaçao',
    aruba: 'Nederlands van Aruba',
    sint_maarten: 'Nederlands van Sint-Maarten',
    south_africa: 'Zuid-Afrikaans Nederlands',
    namibia: 'Namibisch Nederlands',
    indonesia: 'Indonesisch Nederlands',
  },
  'ga-IE': {
    mumhain: 'Gaeilge na Mumhan',
    connachta: 'Gaeilge Chonnacht',
    ulaidh: 'Gaeilge Uladh',
  },
  gl: {
    atlantico: 'Atlántico (seseo e gheada)',
    central: 'Central (gheada)',
    oriental: 'Oriental (común en zona oriental)',
    normativo: 'Normativo (estándar)',
    neofalante: 'Neofalante',
  },
  'zh-TW': {
    keelung_city: '出生地：基隆市',
    taipei_city: '出生地：臺北市',
    new_taipei_city: '出生地：新北市',
    taoyuan_city: '出生地：桃園市',
    hsinchu_county: '出生地：新竹縣',
    hsinchu_city: '出生地：新竹市',
    miaoli_county: '出生地：苗栗縣',
    taichung_city: '出生地：臺中市',
    changhua_county: '出生地：彰化縣',
    nantou_county: '出生地：南投縣',
    yunlin_county: '出生地：雲林縣',
    chiayi_county: '出生地：嘉義縣',
    chiayi_city: '出生地：嘉義市',
    tainan_city: '出生地：臺南市',
    kaohsiung_city: '出生地：高雄市',
    pingtung_county: '出生地：屏東縣',
    yilan_county: '出生地：宜蘭縣',
    hualien_county: '出生地：花蓮縣',
    taitung_county: '出生地：臺東縣',
    penghu_county: '出生地：澎湖縣',
    kinmen_county: '出生地：金門縣',
    lienchiang_county: '出生地：連江縣',
    hong_kong: '香港',
  },
  'zh-CN': {
    '110000': '出生地：11 北京市',
    '120000': '出生地：12 天津市',
    '130000': '出生地：13 河北省',
    '140000': '出生地：14 山西省',
    '150000': '出生地：15 内蒙古自治区',
    '210000': '出生地：21 辽宁省',
    '220000': '出生地：22 吉林省',
    '230000': '出生地：23 黑龙江省',
    '310000': '出生地：31 上海市',
    '320000': '出生地：32 江苏省',
    '330000': '出生地：33 浙江省',
    '340000': '出生地：34 安徽省',
    '350000': '出生地：35 福建省',
    '360000': '出生地：36 江西省',
    '370000': '出生地：37 山东省',
    '410000': '出生地：41 河南省',
    '420000': '出生地：42 湖北省',
    '430000': '出生地：43 湖南省',
    '440000': '出生地：44 广东省',
    '450000': '出生地：45 广西壮族自治区',
    '460000': '出生地：46 海南省',
    '500000': '出生地：50 重庆市',
    '510000': '出生地：51 四川省',
    '520000': '出生地：52 贵州省',
    '530000': '出生地：53 云南省',
    '540000': '出生地：54 西藏自治区',
    '610000': '出生地：61 陕西省',
    '620000': '出生地：62 甘肃省',
    '630000': '出生地：63 青海省',
    '640000': '出生地：64 宁夏回族自治区',
    '650000': '出生地：65 新疆维吾尔自治区',
    '710000': '出生地：71 台湾省',
    '810000': '出生地：81 香港特别行政区',
    '820000': '出生地：82 澳门特别行政区',
  },
};

export const up = async function (db: any): Promise<any> {
  await db.runSql(
    `
    CREATE TABLE accents (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,

      locale_id INT NOT NULL,
      accent_name VARCHAR(255) CHARSET utf8mb4 NOT NULL,
      accent_token VARCHAR(255) CHARSET utf8mb4 DEFAULT NULL,
      user_submitted BOOLEAN DEFAULT FALSE,
      client_id CHAR(36),
      approved BOOLEAN DEFAULT FALSE,
      created_at DATETIME DEFAULT NOW(),

      FOREIGN KEY (client_id) REFERENCES user_clients(client_id) ON DELETE SET NULL,
      FOREIGN KEY (locale_id) REFERENCES locales(id),
      UNIQUE KEY accent_key (locale_id, accent_name)
    )
    `
  );

  await db.runSql(`
    INSERT INTO accents (locale_id, accent_name, accent_token, user_submitted)
      SELECT id, "", "unspecified", 0 from locales;
  `);

  // migrate legacy accents
  for (const language in ACCENTS) {
    const [row] = await db.runSql(
      `SELECT id FROM locales WHERE name = "${language}"`
    );

    if (row && row.id) {
      for (const accent_token in ACCENTS[language]) {
        await db.runSql(`
          INSERT INTO accents (locale_id, accent_name, accent_token)
            VALUES (${row.id}, "${ACCENTS[language][accent_token]}", "${accent_token}")
        `);
      }
    }
  }
};

export const down = async function (db: any): Promise<any> {
  return await db.runSql(`DROP TABLE accents`);
};
