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

const TwoFastTwoFuriousMovieCars = () => {
  return (
    <ProjectBase
      idInput='2fast2furious-movie-cars'
      title='2Fast2Furious Movie Cars'
      jobDescription='Shamrock built the complete interiors for all of the main character cars in the 2Fast2Furious movie.'
      imagesList={imagesList}
    />
  );
};

export default TwoFastTwoFuriousMovieCars;
