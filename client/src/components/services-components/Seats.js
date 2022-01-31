import ImagesCarousel from '../ImagesCarousel';

const imagesList = [
  {
    image: './assets/services-images/seats-images/seat-1.jpg',
    title: 'Seats 1',
  },
  {
    image: './assets/services-images/seats-images/seat-2.jpg',
    title: 'Seats 2',
  },
  {
    image: './assets/services-images/seats-images/seat-3.jpg',
    title: 'Seats 3',
  },
  {
    image: './assets/services-images/seats-images/seat-4.jpg',
    title: 'Seats 4',
  },
  {
    image: './assets/services-images/seats-images/seat-5.jpg',
    title: 'Seats 5',
  },
  {
    image: './assets/services-images/seats-images/seat-6.jpg',
    title: 'Seats 6',
  },
  {
    image: './assets/services-images/seats-images/seat-7.jpg',
    title: 'Seats 7',
  },
  {
    image: './assets/services-images/seats-images/seat-8.jpg',
    title: 'Seats 8',
  },
  {
    image: './assets/services-images/seats-images/seat-9.jpg',
    title: 'Seats 9',
  },
  {
    image: './assets/services-images/seats-images/seat-10.jpg',
    title: 'Seats 10',
  },
  {
    image: './assets/services-images/seats-images/seat-11.jpg',
    title: 'Seats 11',
  },
  {
    image: './assets/services-images/seats-images/seat-12.jpg',
    title: 'Seats 12',
  },
  {
    image: './assets/services-images/seats-images/seat-13.jpg',
    title: 'Seats 13',
  },
  {
    image: './assets/services-images/seats-images/seat-14.jpg',
    title: 'Seats 14',
  },
  {
    image: './assets/services-images/seats-images/seat-15.jpg',
    title: 'Seats 15',
  },
];

const Seats = () => {
  return (
    <>
      <div className='service-wrapper' id='seats'>
        <h3 className='service-title'>Seats</h3>
        <p>
          <span className='special'>Our job: </span>
          Shamrock can duplicate your factory upholstery using matching vinyl,
          cloth, suede, or leather.
        </p>
        <ImagesCarousel imagesList={imagesList} />
      </div>
    </>
  );
};

export default Seats;
