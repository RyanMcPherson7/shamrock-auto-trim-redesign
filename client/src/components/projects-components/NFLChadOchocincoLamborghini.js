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

const NFLChadOchocincoLamborghini = () => {
  return (
    <ProjectBase
      idInput='nfl-chad-ochocinco-lamborghini'
      title={`NFL Chad Ochicinco's Lamborghini`}
      jobDescription={`Shamrock replaced NFL superstar Chad Ochocinco's leather interior which was damaged by water.
      `}
      imagesList={imagesList}
    />
  );
};

export default NFLChadOchocincoLamborghini;
