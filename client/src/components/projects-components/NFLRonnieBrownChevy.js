import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image: './assets/car-test/car1.jpg',
    title: 'Car 1',
  },
  {
    image: './assets/car-test/car2.jpg',
    title: 'Car 2',
  },
  {
    image: './assets/car-test/car3.jpg',
    title: 'Car 3',
  },
  {
    image: './assets/car-test/car4.jpg',
    title: 'Car 4',
  },
  {
    image: './assets/car-test/car5.jpg',
    title: 'Car 5',
  },
  {
    image: './assets/car-test/car6.jpg',
    title: 'Car 6',
  },
];

const NFLRonnieBrownChevy = () => {
  return (
    <ProjectBase
      idInput='nfl-ronnie-brown-chevy'
      title={`NFL Ronnie Brown's Chevy`}
      jobDescription={`Shamrock tricked out Miami Dolphin's running back "Downtown" Ronnie Brown's 1964 Impala SS.
      `}
      imagesList={imagesList}
    />
  );
};

export default NFLRonnieBrownChevy;
