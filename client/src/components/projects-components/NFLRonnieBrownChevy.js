import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image: './assets/projects-images/nfl-ronnie-brown-chevy-images/brown-2.jpg',
    title: 'Original white interior',
  },
  {
    image: './assets/projects-images/nfl-ronnie-brown-chevy-images/brown-1.jpg',
    title: 'Fabricated new door panels',
  },
  {
    image: './assets/projects-images/nfl-ronnie-brown-chevy-images/brown-5.jpg',
    title: 'Black welt, embroidered numbers, leather',
  },
  {
    image: './assets/projects-images/nfl-ronnie-brown-chevy-images/brown-6.jpg',
    title: 'Finished trunk with chrome and carpet',
  },
  {
    image: './assets/projects-images/nfl-ronnie-brown-chevy-images/brown-4.jpg',
    title: 'Ronnie Brown going downtown',
  },
  {
    image: './assets/projects-images/nfl-ronnie-brown-chevy-images/brown-3.jpg',
    title: 'New Cloth Convertible Top',
  },
  {
    image: './assets/projects-images/nfl-ronnie-brown-chevy-images/brown-7.jpg',
    title: 'A red canvas boot finishes the car with the top down',
  },
];

const NFLRonnieBrownChevy = () => {
  return (
    <ProjectBase
      idInput='nfl-ronnie-brown-chevy'
      title={`NFL Ronnie Brown's Chevy Impala`}
      jobDescription={`Shamrock tricked out Miami Dolphin's running back "Downtown" Ronnie Brown's 1964 Impala SS.
      `}
      imagesList={imagesList}
    />
  );
};

export default NFLRonnieBrownChevy;
