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

const LennyKravitzCadillac = () => {
  return (
    <ProjectBase
      idInput='lenny-kravitz-cadillac'
      title={`Lenny Kravitz's Cadillac`}
      jobDescription={`Shamrock build a custom interior to match Lenny Kravitz's Cadillac's exterior.`}
      imagesList={imagesList}
    />
  );
};

export default LennyKravitzCadillac;
