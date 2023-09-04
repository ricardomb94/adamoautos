const products = [
  {
    _id: 1,
    name: 'Audi A1',
    images:[
      {
        original:'/images/audi-slider1.jpeg',
        thumbnail:'/thumbnails/audi-t1.jpeg',
      },
      {
        original:'/images/audia-slider2.jpeg',
        thumbnail:'/thumbnails/audi-t2.jpeg',
      },
      {
        original:'/images/audi-s3.jpeg',
        thumbnail:'/thumbnails/audi-t3.jpeg',
      }
    ],
    description:
      'L\'Audi A1 est une voiture à hayon élégante et compacte qui respire la sophistication et la modernité. Elle présente un design extérieur élégant caractérisé par des lignes nettes, une calandre avant agressive et des phares à LED. Sa taille compacte en fait une voiture idéale pour la ville, permettant une maniabilité et un stationnement faciles.',
    brand: 'Audi A1',
    year:2012,
    category: 'Essence',
    color: 'blanche',
    countInStock: 0,
    price: 1750,
    rating: 4.5,
    provenance:'France',
    registration:'27-02-2012 ',
    vehicleInspection:'Requis',
    originalOwner:'Non',
    odometerReading:'134.000 km',
    energy:'essence',
    transmission:'Manuelle',
    upholstery:'cuir/tissu',
    doors:5,
    seats:5,
    numReviews: 12,
  },
  {
    _id: 2,
    name: 'Volgswagen Up',
    images:[
      {
        original:'/images/volgswagen-slider5.jpeg',
        thumbnail:'/thumbnails/volgswagen-t5.jpeg',
      },
      {
        original:'/images/volgswagen-s4.jpeg',
        thumbnail:'/thumbnails/volgswagen-t4.jpeg',
      },
      {
        original:'/images/volgswagen-s3.jpeg',
        thumbnail:'/thumbnails/volgswagen-t3.jpeg',
      },
      {
        original:'/images/volgswagen-s1.jpeg',
        thumbnail:'/thumbnails/volgswagen-t1.jpeg',
      },
      {
        original:'/images/volgswagen-s2.jpeg',
        thumbnail:'/thumbnails/volgswagen-t2.jpeg',
      },
      {
        original:'/images/volgswagen-s0.jpeg',
        thumbnail:'/thumbnails/volgswagen-t0.jpeg',
      }
    ],
    description:
      'Le Volswagen Up! est une petite voiture citadine compacte connue pour sa taille réduite, sa praticité et son efficacité. Elle arbore un design moderne, un intérieur étonnamment spacieux pour sa catégorie et diverses fonctionnalités et technologies modernes. Avec sa maniabilité réactive et ses options respectueuses de l\'environnement, elle est bien adaptée à la conduite en ville et aux déplacements quotidiens.',
    brand: 'Volswagen',
    year: 2013,
    category: 'essence',
    color: 'blanche',
    countInStock: 0,
    price: 9000,
    rating: 4.5,
    provenance:'Allemagne',
    registration:'12/09/2013 ',
    vehicleInspection:'requis',
    originalOwner:'Oui',
    odometerReading:'66300 Km',
    energy:'essence',
    transmission:'manuelle',
    upholstery:'cuir/tissu',
    doors:3,
    seats:5,
    numReviews: 12,
  },
  {
    _id: 3,
    name: 'Nissan Pixo',
    images:[
      {
        original:'/images/nissan-s1.jpeg',
        thumbnail:'/thumbnails/nissan-t1.jpeg',
      },
      {
        original:'/images/nissan-s2.jpeg',
        thumbnail:'/thumbnails/nissan-t2.jpeg',
      },{
        original:'/images/nissan-s3.jpeg',
        thumbnail:'/thumbnails/nissan-t3.jpeg',
      }
    ],
    description:
      'Le Nissan Pixo est une petite voiture citadine connue pour sa taille compacte, son efficacité énergétique et son prix abordable. ',
    brand: 'Nissan Pixo',
    year:2011,  
    category: 'Essence',
    color: 'rouge',
    countInStock: 0,
    price: 9500,
    rating: 4.5,
    provenance:'France',
    registration:'28-04-2011 ',
    vehicleInspection:'Requis',
    originalOwner:'Oui',
    odometerReading:'45500 km',
    energy:'essence',
    transmission:'Manuelle',
    upholstery:'cuir/tissu',
    doors:5,
    seats:5,
    numReviews: 12,
  },
  {
    _id: 2,
    name: 'Volgswagen Up',
    images:[
      {
        original:'/images/volgswagen-slider5.jpeg',
        thumbnail:'https://picsum.photos/id/1018/250/150/',
      }
    ],
    description:
      'Le Volswagen Up! est une petite voiture citadine compacte connue pour sa taille réduite, sa praticité et son efficacité. Elle arbore un design moderne, un intérieur étonnamment spacieux pour sa catégorie et diverses fonctionnalités et technologies modernes. Avec sa maniabilité réactive et ses options respectueuses de l\'environnement, elle est bien adaptée à la conduite en ville et aux déplacements quotidiens.',
    brand: 'Volswagen',
    year:2012,
    category: 'Essence',
    color: 'blanche',
    countInStock: 0,
    price: 1750,
    rating: 4.5,
    provenance:'France',
    registration:'27-02-2012 ',
    vehicleInspection:'Requis',
    originalOwner:'Non',
    odometerReading:'134.000 km',
    energy:'essence',
    transmission:'Manuelle',
    upholstery:'cuir/tissu',
    doors:5,
    seats:5,
    numReviews: 12,
  },
  {
    _id: 3,
    name: 'Nissan Pixo',
    images:[
      {
        original:'/images/nissan-slider4.jpeg',
        thumbnail:'https://picsum.photos/id/1018/250/150/',
      }
    ],
    description:
      'Le Nissan Pixo est une petite voiture citadine connue pour sa taille compacte, son efficacité énergétique et son prix abordable. ',
    brand: 'Nissan Pixo',
    year:2012,
    category: 'Essence',
    color: 'blanche',
    countInStock: 0,
    price: 1750,
    rating: 4.5,
    provenance:'France',
    registration:'27-02-2012 ',
    vehicleInspection:'Requis',
    originalOwner:'Non',
    odometerReading:'134.000 km',
    energy:'essence',
    transmission:'Manuelle',
    upholstery:'cuir/tissu',
    doors:5,
    seats:5,
    numReviews: 12,
  },
  {
    _id: 1,
    name: 'Audi A1',
    images:[
      {
        original:'/images/audi-slider1.jpeg',
        thumbnail:'https://picsum.photos/id/1018/250/150/',
      }
    ],
    description:
      'L\'Audi A1 est une voiture à hayon élégante et compacte qui respire la sophistication et la modernité. Elle présente un design extérieur élégant caractérisé par des lignes nettes, une calandre avant agressive et des phares à LED. Sa taille compacte en fait une voiture idéale pour la ville, permettant une maniabilité et un stationnement faciles.',
    brand: 'Audi A1',
    year:2012,
    category: 'Essence',
    color: 'blanche',
    countInStock: 0,
    price: 1750,
    rating: 4.5,
    provenance:'France',
    registration:'27-02-2012 ',
    vehicleInspection:'Requis',
    originalOwner:'Non',
    odometerReading:'134.000 km',
    energy:'essence',
    transmission:'Manuelle',
    upholstery:'cuir/tissu',
    doors:5,
    seats:5,
    numReviews: 12,
  },
];

module.exports = products;
