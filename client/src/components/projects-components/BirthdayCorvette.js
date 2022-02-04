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

const BirthdayCorvet = () => {
  return (
    <ProjectBase
      idInput='birthday-corvet'
      title={`Father's 72nd Birthday Surprise - 1962 Corvette`}
      jobDescription='Shamrock tricked out a 1962 Corvette given to a father as his 90th birthday present!'
      imagesList={imagesList}
    />
  );
};

export default BirthdayCorvet;
