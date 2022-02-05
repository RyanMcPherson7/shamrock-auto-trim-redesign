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
    image: './assets/services-images/seats-images/seat-16.jpg',
    title: '2015 Honda Civic complete interior transformation',
  },
  {
    image: './assets/services-images/seats-images/seat-3.jpg',
    title: 'Leather Honda Element seats',
  },
  {
    image: './assets/services-images/seats-images/seat-4.jpg',
    title: 'Custom Porsche Alcantara seats',
  },
  {
    image: './assets/services-images/seats-images/seat-5.jpg',
    title: 'Corvette seats upholstered with vinyl and suede inserts',
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
    title: '1968 Newport two tone interior',
  },
  {
    image: './assets/services-images/seats-images/seat-11.jpg',
    title: 'Chevrolet Camaro Bumblebee interior',
  },
  {
    image: './assets/services-images/seats-images/seat-12.jpg',
    title: '2-tone Lamborghini interior',
  },
  {
    image: './assets/services-images/seats-images/seat-13.jpg',
    title: '2-tone Chevy Impala',
  },
  {
    image: './assets/services-images/seats-images/seat-14.jpg',
    title: 'Mercedes SL interior',
  },
  {
    image: './assets/services-images/seats-images/seat-15.jpg',
    title: 'Pontiac Firebird interior',
  },
];

const Seats = () => {
  return (
    <>
      <div className='service-wrapper' id='seats'>
        <h3 className='service-title'>Automotive and Marine Seats</h3>
        <h4 className='service-description'>
          <span className='special'>Our job: </span>
          Shamrock can duplicate your factory upholstery using matching vinyl,
          cloth, suede, or leather.
        </h4>
        <ImagesCarousel imagesList={imagesList} />
      </div>
    </>
  );
};

export default Seats;
