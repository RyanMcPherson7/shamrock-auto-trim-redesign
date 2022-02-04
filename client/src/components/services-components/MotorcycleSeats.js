import ImagesCarousel from '../ImagesCarousel';

const imagesList = [
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-1.jpg',
    title: 'Custom leather motorcycle seat',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-2.jpg',
    title: 'One-off custom designs',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-3.jpg',
    title: 'Diamond pattern seat',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-4.jpg',
    title: 'Alligator inserts',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-5.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-6.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-7.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-8.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-9.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-10.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-11.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-12.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-13.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/motorcycle-seats-images/motorcycle-seat-14.jpg',
    title: '',
  },
];

const MotorcycleSeats = () => {
  return (
    <>
      <div className='service-wrapper' id='motorcycle-seats'>
        <h2 className='service-title'>Motorcycle Seats</h2>
        <h4>
          <span className='special'>Our job: </span>
          Shamrock builds custom and original factory motorcycle seats.
        </h4>
        <ImagesCarousel imagesList={imagesList} />
      </div>
    </>
  );
};

export default MotorcycleSeats;
