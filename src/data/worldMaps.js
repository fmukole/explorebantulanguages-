// World maps of countries where each language is official (or the main shared language).
// ids are ISO numeric codes. `dots` are small states too small to draw at world scale.
export const worldMaps = {
  french: {
    eyebrow: 'The French-speaking world',
    text: 'Countries where French is an official language, from Canada and France to the Great Lakes of Africa, including Burundi. In many other places French is widely used without being official.',
    verb: 'French is an official language.',
    countries: {
      250: 'France', 56: 'Belgium', 756: 'Switzerland', 442: 'Luxembourg', 124: 'Canada', 332: 'Haiti', 548: 'Vanuatu',
      204: 'Benin', 854: 'Burkina Faso', 108: 'Burundi', 120: 'Cameroon', 140: 'Central African Republic', 148: 'Chad', 178: 'Republic of the Congo',
      180: 'DR Congo', 262: 'Djibouti', 226: 'Equatorial Guinea', 266: 'Gabon', 324: 'Guinea', 384: "Côte d'Ivoire", 450: 'Madagascar',
      466: 'Mali', 562: 'Niger', 646: 'Rwanda', 686: 'Senegal', 768: 'Togo',
    },
    dots: [{ name: 'Monaco', lonlat: [7.42, 43.74] }, { name: 'Comoros', lonlat: [43.87, -11.88] }, { name: 'Seychelles', lonlat: [55.45, -4.62] }],
  },
  portuguese: {
    eyebrow: 'The Portuguese-speaking world',
    text: 'Countries where Portuguese is an official language, on four continents: Europe, South America, Africa and Asia. Brazil alone has more Portuguese speakers than all the other countries together.',
    verb: 'Portuguese is an official language.',
    countries: { 620: 'Portugal', 76: 'Brazil', 24: 'Angola', 508: 'Mozambique', 624: 'Guinea-Bissau', 226: 'Equatorial Guinea', 626: 'Timor-Leste' },
    dots: [{ name: 'Cabo Verde', lonlat: [-23.6, 15.1] }, { name: 'São Tomé and Príncipe', lonlat: [6.73, 0.25] }],
  },
  english: {
    eyebrow: 'The English-speaking world',
    text: 'Countries where English is an official language or the main shared language. English is also widely used as a second language in many more places around the world.',
    verb: 'English is an official or main language.',
    countries: {
      826: 'United Kingdom', 840: 'United States', 124: 'Canada', 36: 'Australia', 554: 'New Zealand', 372: 'Ireland',
      710: 'South Africa', 566: 'Nigeria', 288: 'Ghana', 404: 'Kenya', 800: 'Uganda', 834: 'Tanzania', 716: 'Zimbabwe', 894: 'Zambia', 454: 'Malawi',
      72: 'Botswana', 516: 'Namibia', 430: 'Liberia', 694: 'Sierra Leone', 270: 'Gambia', 120: 'Cameroon', 646: 'Rwanda', 108: 'Burundi',
      728: 'South Sudan', 748: 'Eswatini', 426: 'Lesotho', 356: 'India', 586: 'Pakistan', 608: 'Philippines', 388: 'Jamaica', 780: 'Trinidad and Tobago',
      328: 'Guyana', 84: 'Belize', 44: 'The Bahamas', 598: 'Papua New Guinea', 242: 'Fiji',
    },
    dots: [
      { name: 'Singapore', lonlat: [103.82, 1.35] }, { name: 'Barbados', lonlat: [-59.55, 13.19] }, { name: 'Malta', lonlat: [14.5, 35.9] },
      { name: 'Mauritius', lonlat: [57.55, -20.3] }, { name: 'Seychelles', lonlat: [55.45, -4.62] },
    ],
  },
}
