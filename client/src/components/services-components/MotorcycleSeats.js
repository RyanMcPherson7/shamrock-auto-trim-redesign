import ImagesCarousel from '../ImagesCarousel';

const imagesList = [
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-1.jpg',
    title: 'Motorcycle Seat 1',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-2.jpg',
    title: 'Motorcycle Seat 2',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-3.jpg',
    title: 'Motorcycle Seat 3',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-4.jpg',
    title: 'Motorcycle Seat 4',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-5.jpg',
    title: 'Motorcycle Seat 5',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-6.jpg',
    title: 'Motorcycle Seat 6',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-7.jpg',
    title: 'Motorcycle Seat 7',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-8.jpg',
    title: 'Motorcycle Seat 8',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-9.jpg',
    title: 'Motorcycle Seat 9',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-10.jpg',
    title: 'Motorcycle Seat 10',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-11.jpg',
    title: 'Motorcycle Seat 11',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-12.jpg',
    title: 'Motorcycle Seat 12',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-13.jpg',
    title: 'Motorcycle Seat 13',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-14.jpg',
    title: 'Motorcycle Seat 14',
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
