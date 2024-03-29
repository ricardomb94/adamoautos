const products = [
  {
    _id: 1,
    name: "Toyota IQ",
    images: [
      {
        original: "/images/yarris-1.jpeg",
        thumbnail: "/thumbnails/yarris-t1.jpeg",
      },
      {
        original: "/images/yarris-2.jpeg",
        thumbnail: "/thumbnails/yarris-t2.jpeg",
      },
      {
        original: "/images/yarris-3.jpeg",
        thumbnail: "/thumbnails/yarris-t3.jpeg",
      },
      {
        original: "/images/yarris-5.jpeg",
        thumbnail: "/thumbnails/yarris-t5.jpeg",
      },
      {
        original: "/images/yarris-6.jpeg",
        thumbnail: "/thumbnails/yarris-t6.jpeg",
      },
    ],
    description:
      "L'Audi A1 est une voiture à hayon élégante et compacte qui respire la sophistication et la modernité. Elle présente un design extérieur élégant caractérisé par des lignes nettes, une calandre avant agressive et des phares à LED. Sa taille compacte en fait une voiture idéale pour la ville, permettant une maniabilité et un stationnement faciles.",
    available: "immédiatement disponible",
    brand: "Toyota IQ",
    year: 2009,
    category: "Essence",
    color: "noire",
    countInStock: 0,
    price: 7500,
    rating: 4.5,
    provenance: "Bruxelles",
    registration: "12/09/2009",
    vehicleInspection: "Requis",
    originalOwner: "Oui",
    odometerReading: "116.000 Km",
    energy: "essence",
    transmission: "Manuelle",
    upholstery: "cuir/tissu",
    doors: 3,
    seats: 4,
    numReviews: 12,
  },
  {
    _id: 2,
    name: "Volgswagen UP",
    images: [
      {
        original: "/images/volgswagen-slider5.jpeg",
        thumbnail: "/thumbnails/volgswagen-t5.jpeg",
      },
      {
        original: "/images/volgswagen-s4.jpeg",
        thumbnail: "/thumbnails/volgswagen-t4.jpeg",
      },
      {
        original: "/images/volgswagen-s3.jpeg",
        thumbnail: "/thumbnails/volgswagen-t3.jpeg",
      },
      {
        original: "/images/volgswagen-s1.jpeg",
        thumbnail: "/thumbnails/volgswagen-t1.jpeg",
      },
      {
        original: "/images/volgswagen-s2.jpeg",
        thumbnail: "/thumbnails/volgswagen-t2.jpeg",
      },
      {
        original: "/images/volgswagen-s0.jpeg",
        thumbnail: "/thumbnails/volgswagen-t0.jpeg",
      },
    ],
    description:
      "Le Volswagen Up! est une petite voiture citadine compacte connue pour sa taille réduite, sa praticité et son efficacité. Elle arbore un design moderne, un intérieur étonnamment spacieux pour sa catégorie et diverses fonctionnalités et technologies modernes. Avec sa maniabilité réactive et ses options respectueuses de l'environnement, elle est bien adaptée à la conduite en ville et aux déplacements quotidiens.",
    available: "immédiatement disponible",
    brand: "Volgswagen UP",
    year: 2013,
    category: "essence",
    color: "blanche",
    countInStock: 0,
    price: 8000,
    rating: 4.5,
    provenance: "Allemagne",
    registration: "12/09/2013 ",
    vehicleInspection: "requis",
    originalOwner: "Oui",
    odometerReading: "66300 Km",
    energy: "essence",
    transmission: "manuelle",
    upholstery: "cuir/tissu",
    doors: 3,
    seats: 5,
    numReviews: 12,
  },
  {
    _id: 3,
    name: "Nissan Pixo",
    images: [
      {
        original: "/images/pinto1.jpeg",
        thumbnail: "/thumbnails/pinto-t1.jpeg",
      },
      {
        original: "/images/pinto2.jpeg",
        thumbnail: "/thumbnails/pinto-t2.jpeg",
      },
      {
        original: "/images/pinto3.jpeg",
        thumbnail: "/thumbnails/pinto-t3.jpeg",
      },
      {
        original: "/images/pinto4.jpeg",
        thumbnail: "/thumbnails/pinto-t4.jpeg",
      },
      {
        original: "/images/nissan-s3.jpeg",
        thumbnail: "/thumbnails/nissan-t3.jpeg",
      },
    ],
    description:
      "Le Nissan Pixo est une petite voiture citadine connue pour sa taille compacte, son efficacité énergétique et son prix abordable. ",
    available: "immédiatement disponible",
    brand: "Nissan Pixo",
    year: 2011,
    category: "Essence",
    color: "rouge",
    countInStock: 0,
    price: 8500,
    rating: 4.5,
    provenance: "France",
    registration: "28-04-2011 ",
    vehicleInspection: "Requis",
    originalOwner: "Oui",
    odometerReading: "45500 km",
    energy: "essence",
    transmission: "Manuelle",
    upholstery: "cuir/tissu",
    doors: 5,
    seats: 5,
    numReviews: 12,
  },
  {
    _id: 4,
    name: "Toyota Yaris",
    images: [
      {
        original: "/images/yaris-1.jpeg",
        thumbnail: "/thumbnails/yaris-t01.jpeg",
      },
      {
        original: "/images/yaris-2.jpeg",
        thumbnail: "/thumbnails/yaris-t02.jpeg",
      },
      {
        original: "/images/yaris-3.jpeg",
        thumbnail: "/thumbnails/yaris-t03.jpeg",
      },
      {
        original: "/images/yaris-5.jpeg",
        thumbnail: "/thumbnails/yaris-t05.jpeg",
      },
      {
        original: "/images/yaris-6.jpeg",
        thumbnail: "/thumbnails/yaris-t06.jpeg",
      },
    ],
    description:
      "L'Audi A1 est une voiture à hayon élégante et compacte qui respire la sophistication et la modernité. Elle présente un design extérieur élégant caractérisé par des lignes nettes, une calandre avant agressive et des phares à LED. Sa taille compacte en fait une voiture idéale pour la ville, permettant une maniabilité et un stationnement faciles.",
    available: "immédiatement disponible",
    brand: "Toyota Yaris",
    year: 2012,
    category: "Essence",
    color: "rouge",
    countInStock: 0,
    price: 8500,
    rating: 4.5,
    provenance: "Allemagne",
    registration: "1/02/2012",
    vehicleInspection: "Requis",
    originalOwner: "Oui",
    odometerReading: "130.000 Km",
    energy: "essence",
    transmission: "Manuelle",
    upholstery: "cuir/tissu",
    doors: 3,
    seats: 5,
    numReviews: 12,
  },
  {
    _id: 5,
    name: "Volgswagen Golf V",
    images: [
      {
        original: "/images/golf-v-01.jpeg",
        thumbnail: "/thumbnails/golf-v-t01.jpeg",
      },
      {
        original: "/images/golf-v-02.jpeg",
        thumbnail: "/thumbnails/golf-v-t02.jpeg",
      },
      {
        original: "/images/golf-v-03.jpeg",
        thumbnail: "/thumbnails/golf-v-t03.jpeg",
      },
      {
        original: "/images/golf-v-04.jpeg",
        thumbnail: "/thumbnails/golf-v-t04.jpeg",
      },
      {
        original: "/images/golf-v-05.jpeg",
        thumbnail: "/thumbnails/golf-v-t05.jpeg",
      },
      {
        original: "/images/golf-v-06.jpeg",
        thumbnail: "/thumbnails/golf-v-t06.jpeg",
      },
      {
        original: "/images/golf-v-07.jpeg",
        thumbnail: "/thumbnails/golf-v-t07.jpeg",
      },
      {
        original: "/images/golf-v-08.jpeg",
        thumbnail: "/thumbnails/golf-v-t08.jpeg",
      },
    ],
    description:
      "L'Audi A1 est une voiture à hayon élégante et compacte qui respire la sophistication et la modernité. Elle présente un design extérieur élégant caractérisé par des lignes nettes, une calandre avant agressive et des phares à LED. Sa taille compacte en fait une voiture idéale pour la ville, permettant une maniabilité et un stationnement faciles.",
    carAvailable: "1 mois",
    brand: "Volgswagen Golf V",
    year: 2005,
    category: "Essence",
    color: "gris",
    countInStock: 0,
    price: "prix à définir ",
    rating: 4.5,
    provenance: "Allemagne",
    registration: "17/05/2005",
    vehicleInspection: "Requis",
    originalOwner: "Oui",
    odometerReading: "101000 km",
    energy: "essence",
    transmission: "Manuelle",
    upholstery: "cuir/tissu",
    doors: 3,
    seats: 5,
    carTrunk: "Grand coffre",
    carWarranty: "3 months",
    numReviews: 12,
  },
];

module.exports = products;
