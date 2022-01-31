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

const ConvertibleTops = () => {
  return (
    <>
      <div className='service-wrapper' id='convertible-tops'>
        <h2 className='service-title'>Convertible Tops</h2>
        <h4>
          <span className='special'>Our job: </span>
          Shamrock can replace your convertible top or broken rear glass.
        </h4>
        <ImagesCarousel imagesList={imagesList} />
        <div className='quote-block'>
          <p className='quote-paragraph'>
            "We are comfortable working with an&nbsp;
            <span className='special'>
              early classic or your brand new vehicle
            </span>
            . We currently work with over 25 new car dealers on warranty top
            repairs for current models. Miami is a great place to enjoy the sun,
            however, it dramatically reduces the life span of the convertible
            top material. Shamrock always uses the&nbsp;
            <span className='special'>best available tops on the market</span>.
            We can install an original equipment top or use an after market top
            that uses comparable material. Shamrock also repairs top frames,
            cylinders, hydraulic lines, and pumps. We also accept insurance
            claims and give written estimates."
          </p>
          <p className='quote-author'>
            - <span className='special'>Randy McPherson</span>, head of
            operations
          </p>
        </div>
      </div>
    </>
  );
};

export default ConvertibleTops;
