const products = [
    {
      _id: '1',
      name: 'Audi A1',
      media: [
        {
          original: '/media/audi-slider1.jpeg',
          thumbnail: '/media/audi-thumbnail1.jpeg',
        },
        {
          original: '/media/audi-slider2.jpeg',
          thumbnail: '/media/audi-thumbnail2.jpeg',
        },
        {
          original: '/media/audi-slider3.jpeg',
          thumbnail: '/media/audi-thumbnail3.jpeg',
        },

      ],
      description:
        'L\'Audi A1 est une voiture à hayon élégante et compacte qui respire la sophistication et la modernité. Elle présente un design extérieur élégant caractérisé par des lignes nettes, une calandre avant agressive et des phares à LED. Sa taille compacte en fait une voiture idéale pour la ville, permettant une maniabilité et un stationnement faciles.',
      brand: 'Audi A1',
      category: 'Essence',
      color: 'blanche',
      countInStock: 0,
      rating: 4.5,
      numReviews: 12,
    },
    {
      _id: '2',
      name: 'Volgswagen Up',
      media: [
       {
        original:'/media/volgswagen-slider1.jpeg',
        thumbnail: '/media/volgswagen-thumbnail1.jpeg'
      },
      {
        original:'/media/volgswagen-slider2.jpeg',
        thumbnail: '/media/volgswagen-thumbnail2.jpeg'
      },
      {
        original:'/media/volgswagen-slider3.jpeg',
        thumbnail: '/media/volgswagen-thumbnail3.jpeg'
      },
      {
        original:'/media/volgswagen-slider4.jpeg',
        thumbnail: '/media/volgswagen-thumbnail4.jpeg'
      },
      {
        original:'/media/volgswagen-slider5.jpeg',
        thumbnail: '/media/volgswagen-thumbnail5.jpeg'
      },
      ],
      description:
        'Le Volswagen Up! est une petite voiture citadine compacte connue pour sa taille réduite, sa praticité et son efficacité. Elle arbore un design moderne, un intérieur étonnamment spacieux pour sa catégorie et diverses fonctionnalités et technologies modernes. Avec sa maniabilité réactive et ses options respectueuses de l\'environnement, elle est bien adaptée à la conduite en ville et aux déplacements quotidiens.',
      brand: 'Volswagen',
      category: 'Essence',
      color: 'blanche',
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {
      _id: '3',
      name: 'Nissan Pixo',
      media: [
        {
          original: '/media/nissan-slider1.jpeg',
          thumbnail: '/media/nissan-thumbnail1.jpeg',
        },
        {
          original: '/media/nissan-slider2.jpeg',
          thumbnail: '/media/nissan-thumbnail2.jpeg',
        },
        {
          original: '/media/nissan-slider3.jpeg',
          thumbnail: '/media/nissan-thumbnail3.jpeg',
        },
        {
          original: '/media/nissan-slider4.jpeg',
          thumbnail: '/media/nissan-thumbnail4.jpeg',
        },
        {
          original: '/media/nissan-slider5.jpeg',
          thumbnail: '/media/nissan-thumbnail5.jpeg',
        },
      ],
      description:
        'Le Nissan Pixo est une petite voiture citadine connue pour sa taille compacte, son efficacité énergétique et son prix abordable. ',
      brand: 'Sony',
      category: 'Essence',
      color: 'rouge',
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
  ];
  
  module.exports = products;
  