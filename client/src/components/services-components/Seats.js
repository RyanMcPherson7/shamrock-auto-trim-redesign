import ImagesCarousel from '../ImagesCarousel';

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

const Seats = () => {
  return (
    <>
      <div className='service-wrapper' id='seats'>
        <h3 className='service-title'>Seats</h3>
        <p>
          Shamrock can&nbsp;
          <span className='special'>duplicate your factory upholstery</span>&nbsp;
          using matching vinyl, cloth, suede, or leather.
        </p>
        <ImagesCarousel imagesList={imagesList} />
      </div>
    </>
  );
};

export default Seats;
