import ImagesCarousel from '../ImagesCarousel';

const imagesList = [
  {
    image: './assets/services-images/seats-images/seat-1.jpg',
    title: '2-tone leather Lamborghini seats',
  },
  {
    image: './assets/services-images/seats-images/seat-2.jpg',
    title: 'Leather Dodge Viper seats',
  },
  {
    image: './assets/services-images/seats-images/seat-3.jpg',
    title: 'Leather Honda Element seats',
  },
  {
    image: './assets/services-images/seats-images/seat-4.jpg',
    title: 'Seats 4',
  },
  {
    image: './assets/services-images/seats-images/seat-5.jpg',
    title: 'Vinyl with suede Corvette seats',
  },
  {
    image: './assets/services-images/seats-images/seat-6.jpg',
    title: 'Leather Honda s2000 seats',
  },
  {
    image: './assets/services-images/seats-images/seat-7.jpg',
    title: 'Street Rod leather seats',
  },
  {
    image: './assets/services-images/seats-images/seat-8.jpg',
    title: '2-tone leather Lamborghini seats',
  },
  {
    image: './assets/services-images/seats-images/seat-9.jpg',
    title: 'Third row Hummer seat',
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
