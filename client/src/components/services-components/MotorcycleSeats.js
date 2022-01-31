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

const MotorcycleSeats = () => {
  return (
    <>
      <div className='service-wrapper' id='motorcycle-seats'>
        <h2 className='service-title'>Motorcycle Seats</h2>
        <h4>
          <span className='special'>Our job: </span>
          Shamrock builds custom and original factory motorcycle seats
        </h4>
        <ImagesCarousel imagesList={imagesList} />
      </div>
    </>
  );
};

export default MotorcycleSeats;
