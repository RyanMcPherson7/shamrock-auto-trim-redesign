import ImagesCarousel from '../ImagesCarousel';

const imagesList = [
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-1.jpg',
    title: 'Convertible top 1',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-2.jpg',
    title: 'Convertible top 2',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-3.jpg',
    title: 'Convertible top 3',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-4.jpg',
    title: 'Convertible top 4',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-5.jpg',
    title: 'Convertible top 5',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-6.jpg',
    title: 'Convertible top 6',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-7.jpg',
    title: 'Convertible top 7',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-8.jpg',
    title: 'Convertible top 8',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-9.jpg',
    title: 'Convertible top 9',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-10.jpg',
    title: 'Convertible top 10',
  },
  {
    image: './assets/project-images/convertible-tops-images/convertible-top-11.jpg',
    title: 'Convertible top 11',
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
