// All language, course, media and culture content lives here.
// To add a lesson video: set `youtube` (an 11-character video id) or `src` (an mp4 path in /public/videos) on a video slot.

const flag = (code) => `/images/flags/${code}.png`

export const languages = [
  {
    slug: 'swahili',
    name: 'Swahili',
    native: 'Kiswahili',
    greeting: 'Jambo!',
    family: 'Bantu language (Niger-Congo)',
    color: '#2E8B57',
    tagline: 'The language of the East African coast, the Great Lakes and a continent of traders.',
    intro:
      'Swahili is a Bantu language that grew along the East African coast and spread inland through trade. Today it is a working language across Tanzania and Kenya, and widely used in Uganda, Rwanda, Burundi and eastern DR Congo. It is also an official language of the African Union.',
    countries: [
      { name: 'Tanzania', id: 834, flag: flag('tz'), note: 'National language and the heart of Swahili culture, from Zanzibar to Dodoma.' },
      { name: 'Kenya', id: 404, flag: flag('ke'), note: 'National and official language, spoken from Mombasa to Nairobi.' },
      { name: 'DR Congo', id: 180, flag: flag('cd'), note: 'One of the national languages, strongest in the east and in Katanga.' },
      { name: 'Uganda', id: 800, flag: flag('ug'), note: 'An official language and a language of trade and the armed forces.' },
      { name: 'Rwanda', id: 646, flag: flag('rw'), note: 'Spoken in towns and markets alongside Kinyarwanda, French and English.' },
    ],
    culture: [
      { title: 'Methali (proverbs)', text: 'Swahili speech is full of proverbs. "Haba na haba hujaza kibaba" means little by little fills the measure.' },
      { title: 'Kanga cloth', text: 'Kanga wraps often carry a printed saying, a quiet way of sending a message without speaking.' },
      { title: 'Taarab and bongo flava', text: 'From coastal taarab orchestras to modern bongo flava, music is one of the best ways to hear Swahili in motion.' },
      { title: 'Safari', text: 'The English word safari comes from the Swahili word for a journey.' },
    ],
    photos: [
      { src: '/images/culture/stone-town-market.jpg', alt: 'A busy street around the markets of Stone Town, Zanzibar', caption: 'Market street in Stone Town, Zanzibar, Tanzania', credit: 'Aron Marinelli', creditUrl: 'https://unsplash.com/photos/a-group-of-people-walking-around-a-market-19GKdp1fcT8' },
      { src: '/images/culture/maasai-mara.jpg', alt: 'Two cheetahs in the Maasai Mara, Kenya', caption: 'Cheetahs in the Maasai Mara, Kenya', credit: 'Pop & Zebra', creditUrl: 'https://unsplash.com/photos/wildlife-photography-of-two-cheetahs-fwaPOsZI-_E' },
    ],
    phrases: [
      { text: 'Hujambo?', meaning: 'Hello, how are you?', reply: 'Sijambo = I am well' },
      { text: 'Habari?', meaning: 'What is the news?', reply: 'Nzuri = good' },
      { text: 'Karibu', meaning: 'Welcome', reply: 'Asante = thank you' },
      { text: 'Pole pole', meaning: 'Slowly, slowly', reply: 'A favourite coastal motto' },
      { text: 'Kwa heri', meaning: 'Goodbye', reply: 'Tutaonana = see you' },
    ],
    levels: {
      beginner: {
        goal: 'Greet people, introduce yourself and manage everyday situations such as markets and transport.',
        topics: ['Greetings and polite forms', 'Pronunciation and the five vowels', 'Introducing yourself and your family', 'Numbers, days and telling the time', 'Present tense with the na marker', 'First noun classes (m-/wa-, ki-/vi-)', 'Food, shopping and bargaining'],
        canDo: ['Hold a simple conversation of a few minutes', 'Ask prices and directions', 'Read short signs and menus'],
        course: {
          name: 'Full Time Beginner Course',
          schedule: 'Three months, Monday to Friday, 8AM to 3PM',
          rates: '$30 per person per hour for groups of 1 to 4, and $27 per person per hour for groups of 5 to 10. One hour a day is deducted from the course day for lunch and breaks.',
          note: 'Quoted in US dollars. Rand amounts are an estimate because the exchange rate may change by the time you pay.',
        },
      },
      intermediate: {
        goal: 'Tell stories, talk about the past and future and follow conversations at natural speed.',
        topics: ['Past (li) and future (ta) tenses', 'All noun class agreements', 'Relative clauses', 'Locative endings and directions', 'Health, travel and work vocabulary', 'Reading short news and stories'],
        canDo: ['Describe events and make plans', 'Understand most everyday radio and conversation', 'Write short messages and emails'],
      },
      advanced: {
        goal: 'Use Swahili with precision in professional, media and literary settings.',
        topics: ['Subjunctive and conditional forms', 'Verb extensions (applicative, causative, passive)', 'Proverbs and idiom (methali)', 'Formal speech and writing', 'Media, debate and presentations', 'Poetry (ushairi) and literature'],
        canDo: ['Discuss abstract topics and argue a point', 'Follow news, sermons and speeches', 'Adapt register for formal and informal settings'],
      },
    },
    videos: [
      { title: 'Greetings: Jambo, Hujambo, Habari', length: 'Short clip', youtube: null, src: null },
      { title: 'Vowels and pronunciation', length: 'Short clip', youtube: null, src: null },
      { title: 'At the market: how much is this?', length: 'Short clip', youtube: null, src: null },
    ],
  },
  {
    slug: 'french',
    name: 'French',
    native: 'Français',
    greeting: 'Bonjour!',
    family: 'Romance language (Indo-European), widely spoken in Africa',
    color: '#7A4FB5',
    tagline: 'From Paris cafés to Kinshasa and Dakar, French connects more of Africa than any other European language.',
    intro:
      'French is a Romance language spoken on five continents. A large share of the world’s French speakers now live in Africa, and French is an official or working language in many countries from Senegal to DR Congo. It is not a Bantu language, but it is an essential one for anyone working across Central and West Africa.',
    countries: [
      { name: 'France', id: 250, flag: flag('fr'), note: 'The language’s home, with strong regional food, film and literary traditions.' },
      { name: 'DR Congo', id: 180, flag: flag('cd'), note: 'French is the official language and the language of schools and government.' },
      { name: 'Senegal', id: 686, flag: flag('sn'), note: 'French is official, used alongside Wolof in daily life.' },
      { name: "Côte d'Ivoire", id: 384, flag: flag('ci'), note: 'French is the official language and a lingua franca among many communities.' },
      { name: 'Cameroon', id: 120, flag: flag('cm'), note: 'French and English are both official languages.' },
    ],
    culture: [
      { title: 'The café', text: 'A coffee in France is rarely just a coffee. It is a reason to sit, talk and watch the street.' },
      { title: 'Teranga', text: 'In Senegal, hospitality is called teranga, and you will hear it in the way visitors are welcomed in French and Wolof.' },
      { title: 'Congolese rumba', text: 'Rumba from Kinshasa and Brazzaville is sung in Lingala and French and is recognised by UNESCO as intangible cultural heritage.' },
      { title: 'La Francophonie', text: 'More than a language, it is a network of countries and communities that share French as a common tongue.' },
    ],
    photos: [
      { src: '/images/culture/paris-eiffel.jpg', alt: 'The Eiffel Tower seen from a street corner in Paris', caption: 'Paris, France', credit: 'Sander Traa', creditUrl: 'https://unsplash.com/photos/a-view-of-the-eiffel-tower-from-a-street-corner-2o9Y-2qx8Mw' },
      { src: '/images/culture/dakar-skyline.jpg', alt: 'City skyline across the water in Dakar, Senegal', caption: 'The skyline of Dakar, Senegal', credit: 'Kurt Cotoaga', creditUrl: 'https://unsplash.com/photos/city-skyline-across-body-of-water-during-daytime-FWTN3Uquq20' },
    ],
    phrases: [
      { text: 'Bonjour', meaning: 'Hello, good day', reply: 'Bonjour! Ça va ?' },
      { text: 'Comment allez-vous ?', meaning: 'How are you? (polite)', reply: 'Très bien, merci' },
      { text: "S'il vous plaît", meaning: 'Please', reply: 'Merci = thank you' },
      { text: 'Enchanté(e)', meaning: 'Pleased to meet you', reply: 'Moi de même' },
      { text: 'Au revoir', meaning: 'Goodbye', reply: 'À bientôt = see you soon' },
    ],
    levels: {
      beginner: {
        goal: 'Introduce yourself, order food and handle daily situations in French.',
        topics: ['Greetings and the French sound system', 'Articles, gender and plurals', 'Present tense of regular and key irregular verbs', 'Numbers, dates and time', 'Family, work and daily routine', 'Ordering, shopping and asking the way'],
        canDo: ['Introduce yourself and others', 'Order in a café or shop', 'Understand slow, clear speech'],
      },
      intermediate: {
        goal: 'Narrate past events, express opinions and cope while travelling or working in French.',
        topics: ['Passé composé and imparfait', 'Future and conditional', 'Pronouns and agreement', 'Giving opinions and reasons', 'Health, travel and work situations', 'Reading articles and short stories'],
        canDo: ['Tell a story in the past', 'Give and defend an opinion', 'Write clear emails and short texts'],
      },
      advanced: {
        goal: 'Speak and write fluently for study, business and cultural life.',
        topics: ['Subjunctive mood and nuance', 'Complex sentences and linking words', 'Formal and professional French', 'Press, debate and presentation skills', 'Idioms and regional varieties across the Francophone world', 'Literature and film analysis'],
        canDo: ['Follow fast native speech and media', 'Write formal letters and reports', 'Discuss complex ideas with precision'],
      },
    },
    videos: [
      { title: 'Bonjour: greetings and politeness', length: 'Short clip', youtube: null, src: null },
      { title: 'French sounds and liaison', length: 'Short clip', youtube: null, src: null },
      { title: 'Ordering at a café', length: 'Short clip', youtube: null, src: null },
    ],
  },
  {
    slug: 'zulu',
    name: 'Zulu',
    native: 'isiZulu',
    greeting: 'Sawubona!',
    family: 'Bantu language (Nguni branch)',
    color: '#E8A90C',
    tagline: 'The most widely spoken home language in South Africa, with a greeting that means “I see you”.',
    intro:
      'isiZulu is a Bantu language of the Nguni branch, spoken mainly in KwaZulu-Natal and across Gauteng and other provinces of South Africa. It is one of South Africa’s eleven official languages and is closely related to isiXhosa, siSwati and isiNdebele.',
    countries: [
      { name: 'South Africa', id: 710, flag: flag('za'), note: 'Home to the vast majority of isiZulu speakers, especially in KwaZulu-Natal and Gauteng.' },
    ],
    culture: [
      { title: 'Sawubona', text: 'The greeting literally means “I see you”, and the reply Yebo, sawubona carries the same meaning back.' },
      { title: 'Beadwork', text: 'Zulu beadwork uses colour and pattern to carry meaning, and is a living art form.' },
      { title: 'Isicathamiya and dance', text: 'Close-harmony singing and powerful dance traditions such as indlamu are central to Zulu performance.' },
      { title: 'Ubuntu', text: 'The idea that “a person is a person through other people” runs through Zulu proverbs and everyday manners.' },
    ],
    photos: [
      { src: '/images/culture/kwazulu-natal.jpg', alt: 'A group of women in red and yellow outfits in KwaZulu-Natal', caption: 'Traditional dress in KwaZulu-Natal, South Africa', credit: 'Ideal Media Content', creditUrl: 'https://unsplash.com/photos/a-group-of-women-in-red-and-yellow-outfits-bnYqWR6w7kg' },
    ],
    phrases: [
      { text: 'Sawubona', meaning: 'Hello (to one person)', reply: 'Yebo, sawubona' },
      { text: 'Sanibonani', meaning: 'Hello (to many people)', reply: 'Yebo, sanibonani' },
      { text: 'Unjani?', meaning: 'How are you?', reply: 'Ngiyaphila = I am well' },
      { text: 'Ngiyabonga', meaning: 'Thank you', reply: 'Kulungile = it is fine' },
      { text: 'Hamba kahle', meaning: 'Go well', reply: 'Sala kahle = stay well' },
    ],
    levels: {
      beginner: {
        goal: 'Greet respectfully, introduce yourself and begin to hear and say the click sounds.',
        topics: ['Greetings for one and many people', 'Pronunciation and the c, q and x clicks', 'Subject concords and the first noun classes', 'Numbers, days and time', 'Family and daily life', 'Present tense and simple questions'],
        canDo: ['Greet and introduce yourself properly', 'Ask and answer simple questions', 'Recognise common words in conversation'],
      },
      intermediate: {
        goal: 'Talk about the past and future and connect ideas in longer conversations.',
        topics: ['Past, future and continuous tenses', 'Noun classes and agreement', 'Possessives and locatives', 'Negation and commands', 'Directions, shopping and work', 'Short stories and dialogues'],
        canDo: ['Hold everyday conversations with confidence', 'Describe events and plans', 'Understand the main points of radio and television'],
      },
      advanced: {
        goal: 'Speak with fluency, respect and cultural depth in different registers.',
        topics: ['Verb extensions (applicative, passive, causative)', 'Relative clauses and complex sentences', 'Ideophones and idiom', 'Proverbs (izaga) and praise poetry', 'Respectful speech (hlonipha) and formal registers', 'Literature and media'],
        canDo: ['Follow fast speech and storytelling', 'Use proverbs and idiom appropriately', 'Write and speak formally'],
      },
    },
    videos: [
      { title: 'Sawubona: greeting with respect', length: 'Short clip', youtube: null, src: null },
      { title: 'The click sounds c, q and x', length: 'Short clip', youtube: null, src: null },
      { title: 'Zulu proverbs in daily life', length: 'Short clip', youtube: null, src: null },
    ],
  },
  {
    slug: 'xhosa',
    name: 'Xhosa',
    native: 'isiXhosa',
    greeting: 'Molo!',
    family: 'Bantu language (Nguni branch)',
    color: '#C8202B',
    tagline: 'A language of three click sounds, praise poets and the Eastern Cape coast, spoken in Cape Town every day.',
    intro:
      'isiXhosa is a Bantu language of the Nguni branch, spoken mainly in the Eastern and Western Cape. It is one of South Africa’s official languages and is the language of Cape Town’s large Xhosa-speaking communities, which makes it especially useful if you live or work in the city.',
    countries: [
      { name: 'South Africa', id: 710, flag: flag('za'), note: 'Strongest in the Eastern Cape and widely heard across the Western Cape, including Cape Town.' },
    ],
    culture: [
      { title: 'Clicks', text: 'isiXhosa is known for its click consonants, written c, q and x, which learners can practise from the first lesson.' },
      { title: 'Imbongi', text: 'The imbongi, or praise poet, is a respected voice that links leaders, history and community.' },
      { title: 'Umngqusho', text: 'Samp and beans, a dish that families share and that many South Africans associate with home cooking.' },
      { title: 'Wild Coast', text: 'The Eastern Cape coastline is one of the great landscapes of Xhosa-speaking South Africa.' },
    ],
    photos: [
      { src: '/images/culture/wild-coast.jpg', alt: 'People walking up a hill next to the ocean on the Wild Coast', caption: 'The Wild Coast, Eastern Cape, South Africa', credit: 'Arthur Hickinbotham', creditUrl: 'https://unsplash.com/photos/a-group-of-people-walking-up-a-hill-next-to-the-ocean-n2og3g9en-w' },
    ],
    phrases: [
      { text: 'Molo', meaning: 'Hello (to one person)', reply: 'Molo, unjani?' },
      { text: 'Molweni', meaning: 'Hello (to many people)', reply: 'Molweni, bhuti/sisi' },
      { text: 'Unjani?', meaning: 'How are you?', reply: 'Ndiphilile = I am well' },
      { text: 'Enkosi', meaning: 'Thank you', reply: 'Enkosi kakhulu = thank you very much' },
      { text: 'Hamba kakuhle', meaning: 'Go well', reply: 'Sala kakuhle = stay well' },
    ],
    levels: {
      beginner: {
        goal: 'Greet, introduce yourself and produce the three basic clicks with confidence.',
        topics: ['Greetings for one and many', 'The clicks c, q and x', 'Subject concords and noun classes', 'Numbers, days and time', 'Family, food and the home', 'Present tense and simple questions'],
        canDo: ['Greet people respectfully', 'Introduce yourself and ask simple questions', 'Order and shop in simple exchanges'],
      },
      intermediate: {
        goal: 'Use past and future tenses and join in longer everyday conversations.',
        topics: ['Past, future and continuous tenses', 'Agreement across noun classes', 'Locatives and possessives', 'Negation and commands', 'Health, transport and work', 'Dialogues and short readings'],
        canDo: ['Talk about your day, plans and experiences', 'Follow the gist of conversations around you', 'Write short messages'],
      },
      advanced: {
        goal: 'Speak and write with fluency, idiom and cultural awareness.',
        topics: ['Verb extensions and derivations', 'Relative clauses and complex structures', 'Idioms and ideophones', 'Proverbs and praise poetry', 'Formal and respectful registers', 'Literature, radio and television'],
        canDo: ['Handle fast speech and rich vocabulary', 'Use proverbs and idiom well', 'Speak formally at meetings and events'],
      },
    },
    videos: [
      { title: 'Molo and Molweni: greetings', length: 'Short clip', youtube: null, src: null },
      { title: 'Learning the clicks: c, q, x', length: 'Short clip', youtube: null, src: null },
      { title: 'Everyday Xhosa in Cape Town', length: 'Short clip', youtube: null, src: null },
    ],
  },
  {
    slug: 'portuguese',
    name: 'Portuguese',
    native: 'Português',
    greeting: 'Olá!',
    family: 'Romance language (Indo-European), an official language in Angola and Mozambique',
    color: '#E26A1B',
    tagline: 'From Lisbon and Rio to Luanda and Maputo, a language that links four continents.',
    intro:
      'Portuguese is a Romance language and an official language of Portugal, Brazil, Angola, Mozambique and Cabo Verde, among others. It is widely used in southern Africa, which makes it valuable for work and family connections across Angola, Mozambique and the Portuguese-speaking communities in South Africa. It is not a Bantu language, but it lives alongside many of them.',
    countries: [
      { name: 'Portugal', id: 620, flag: flag('pt'), note: 'The European homeland of the language, known for fado, tiles and the sea.' },
      { name: 'Brazil', id: 76, flag: flag('br'), note: 'The largest Portuguese-speaking country, with its own accent, slang and music.' },
      { name: 'Angola', id: 24, flag: flag('ao'), note: 'Portuguese is the official language, spoken alongside Umbundu, Kimbundu and Kikongo.' },
      { name: 'Mozambique', id: 508, flag: flag('mz'), note: 'Portuguese is official and spoken alongside many Bantu languages.' },
      { name: 'Cabo Verde', id: 132, lonlat: [-23.6, 15.1], flag: flag('cv'), note: 'Portuguese is official, with Cape Verdean Creole spoken in daily life.' },
    ],
    culture: [
      { title: 'Fado', text: 'Portugal’s melancholy, poetic music, often sung in small intimate venues.' },
      { title: 'Samba and carnival', text: 'Brazil’s rhythm and festival culture, heard in Portuguese all year round.' },
      { title: 'Kizomba and marrabenta', text: 'Dance music from Angola and Mozambique that connects Portuguese-speaking Africa.' },
      { title: 'Many varieties', text: 'Brazilian, European and African Portuguese differ in sound and vocabulary, and we help you recognise each.' },
    ],
    photos: [
      { src: '/images/culture/lisbon-tram.jpg', alt: 'A yellow tram on a historic street in Lisbon', caption: 'A yellow tram in Lisbon, Portugal', credit: 'Aayush Gupta', creditUrl: 'https://unsplash.com/photos/yellow-tram-in-historic-lisbon-street-ljhCEaHYWJ8' },
      { src: '/images/culture/rio-paqueta.jpg', alt: 'People dancing at an off-season carnival on the Paquetá ferry in Rio de Janeiro', caption: 'Dancing on the Paquetá ferry, Rio de Janeiro, Brazil', credit: 'Sofia Gaigher', creditUrl: 'https://unsplash.com/photos/a-group-of-people-dancing-y-kx1P1hpcY' },
    ],
    phrases: [
      { text: 'Olá', meaning: 'Hello', reply: 'Olá! Tudo bem?' },
      { text: 'Bom dia', meaning: 'Good morning', reply: 'Bom dia!' },
      { text: 'Tudo bem?', meaning: 'Is everything well?', reply: 'Tudo bem, e você?' },
      { text: 'Obrigado / Obrigada', meaning: 'Thank you (said by a man / a woman)', reply: 'De nada = you are welcome' },
      { text: 'Até logo', meaning: 'See you soon', reply: 'Tchau = bye' },
    ],
    levels: {
      beginner: {
        goal: 'Greet, introduce yourself and get by in everyday situations in Portuguese.',
        topics: ['Greetings and the sounds of Portuguese', 'Articles, gender and plurals', 'Present tense of regular and key irregular verbs (ser, estar, ter)', 'Numbers, time and dates', 'Family, food and shopping', 'Directions and transport'],
        canDo: ['Introduce yourself and others', 'Order food and ask the price', 'Understand slow, clear speech'],
      },
      intermediate: {
        goal: 'Talk about the past, future and your opinions, and understand different accents.',
        topics: ['Pretérito perfeito and imperfeito', 'Future and conditional', 'Object pronouns', 'Opinions, plans and invitations', 'Work, health and travel', 'Brazilian, European and African varieties'],
        canDo: ['Tell stories in the past', 'Make plans and give reasons', 'Write clear messages and emails'],
      },
      advanced: {
        goal: 'Communicate fluently for work, study and cultural life across the Portuguese-speaking world.',
        topics: ['Subjunctive mood in depth', 'Complex sentences and connectors', 'Formal and business Portuguese', 'Media, debate and presentation skills', 'Idioms and regional variation', 'Literature, music and film'],
        canDo: ['Follow fast speech from different regions', 'Write formal documents', 'Discuss abstract topics with nuance'],
      },
    },
    videos: [
      { title: 'Olá: greetings in Portuguese', length: 'Short clip', youtube: null, src: null },
      { title: 'Nasal vowels explained', length: 'Short clip', youtube: null, src: null },
      { title: 'Ordering at a restaurant', length: 'Short clip', youtube: null, src: null },
    ],
  },
  {
    slug: 'english',
    name: 'English',
    native: 'English',
    greeting: 'Hello!',
    family: 'Germanic language (Indo-European), an official language across Africa',
    color: '#2D5FA8',
    tagline: 'The language many Africans share across borders, in business, school and the internet.',
    intro:
      'English is a Germanic language that is now spoken as a first or second language on every continent. In Africa it is an official language in South Africa, Ghana, Kenya, Uganda and many other countries, and it is often the shared language between people who speak different mother tongues. It is not a Bantu language, but it sits alongside many of them in daily life. Our English courses are built for speakers of African languages as well as newcomers to Cape Town.',
    countries: [
      { name: 'United Kingdom', id: 826, flag: flag('gb'), note: 'The historical home of the language, from London to Edinburgh.' },
      { name: 'United States', id: 840, flag: flag('us'), note: 'The largest English-speaking country, with its own spelling, accent and slang.' },
      { name: 'South Africa', id: 710, flag: flag('za'), note: 'English is one of eleven official languages and the common language of business and government.' },
      { name: 'Australia', id: 36, flag: flag('au'), note: 'A major English-speaking country with a distinctive accent and a large international student community.' },
    ],
    culture: [
      { title: 'Many Englishes', text: 'British, American, South African and Australian English differ in accent, vocabulary and spelling. We teach a clear international standard and help you recognise the others.' },
      { title: 'Stress and rhythm', text: 'English is a stress-timed language. Learning where to put the stress often helps more than perfecting single sounds.' },
      { title: 'Idiom and humour', text: 'Phrases such as "it is raining cats and dogs" cannot be translated word for word. Learning idioms is learning how English speakers joke and think.' },
      { title: 'English at work', text: 'Emails, interviews and meetings follow habits of politeness that differ from many African languages, and we practise them in realistic situations.' },
    ],
    photos: [
      { src: '/images/culture/london-tower-bridge.jpg', alt: 'Tower Bridge crossing the River Thames in London', caption: 'Tower Bridge, London, United Kingdom', credit: 'Marco Chilese', creditUrl: 'https://unsplash.com/photos/tower-bridge-london-IZvg-KtGolo' },
      { src: '/images/culture/cape-town-table-mountain.jpg', alt: 'Table Mountain looming over the city of Cape Town', caption: 'Table Mountain and Cape Town, South Africa', credit: 'Vimal Joseph', creditUrl: 'https://unsplash.com/photos/table-mountain-looms-over-the-city-of-cape-town-tRPvXfu5Xf0' },
      { src: '/images/culture/new-york-street.jpg', alt: 'A street view of buildings in New York City', caption: 'A street in New York City, United States', credit: 'Jacqueline Brandwayn', creditUrl: 'https://unsplash.com/photos/street-view-of-new-york-city-buildings-PR3m2XM5l8w' },
    ],
    phrases: [
      { text: 'Hello, how are you?', meaning: 'A friendly greeting', reply: 'Fine, thank you. And you?' },
      { text: 'Nice to meet you', meaning: 'Said when meeting someone new', reply: 'Nice to meet you too' },
      { text: 'Could you repeat that, please?', meaning: 'Asking someone to say it again', reply: 'Of course' },
      { text: 'Thank you very much', meaning: 'Strong thanks', reply: "You're welcome" },
      { text: 'See you later', meaning: 'An informal goodbye', reply: 'Take care' },
    ],
    levels: {
      beginner: {
        goal: 'Introduce yourself, understand simple English and handle everyday situations with confidence.',
        topics: ['Greetings and introductions', 'English sounds and the alphabet', 'Present simple and "to be"', 'Numbers, dates and telling the time', 'Family, home and daily routine', 'Shopping, food and asking the way'],
        canDo: ['Introduce yourself and others', 'Ask and answer simple questions', 'Understand slow, clear speech'],
      },
      intermediate: {
        goal: 'Talk about the past and future, give opinions and take part in work and study conversations.',
        topics: ['Past simple, present perfect and future forms', 'Modal verbs and polite requests', 'Phone calls and emails', 'Giving opinions and reasons', 'Health, travel and workplace English', 'Reading articles and short stories'],
        canDo: ['Tell a story about the past', 'Write clear emails and short texts', 'Follow most everyday conversations'],
      },
      advanced: {
        goal: 'Communicate fluently and persuasively for work, study and professional life.',
        topics: ['Conditionals and advanced tenses', 'Formal and informal register', 'Interviews, presentations and negotiation', 'Idioms, phrasal verbs and nuance', 'Academic and report writing', 'Understanding different English accents'],
        canDo: ['Present and argue a point with confidence', 'Write formal reports and applications', 'Follow fast speech, media and meetings'],
      },
    },
    videos: [
      { title: 'Hello: greetings and introductions', length: 'Short clip', youtube: null, src: null },
      { title: 'English sounds and stress', length: 'Short clip', youtube: null, src: null },
      { title: 'Everyday English at work', length: 'Short clip', youtube: null, src: null },
    ],
  },
]

export const levelMeta = [
  { key: 'beginner', label: 'Beginner', short: 'Level 1', blurb: 'Start from zero. Sounds, greetings and everyday survival language.', accent: '#2E8B57' },
  { key: 'intermediate', label: 'Intermediate', short: 'Level 2', blurb: 'Build fluency. Tell stories, plan, and follow real conversations.', accent: '#E8A90C' },
  { key: 'advanced', label: 'Advanced', short: 'Level 3', blurb: 'Speak with precision, nuance and cultural depth.', accent: '#C8202B' },
]

export const getLanguage = (slug) => languages.find((l) => l.slug === slug)
