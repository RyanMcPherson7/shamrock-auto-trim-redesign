import ImagesCarousel from '../ImagesCarousel';

const imagesList = [
  {
    image:
      './assets/services-images/motorcycle-heat-shield-images/motorcycle-heat-shield-1.jpeg',
    title: 'Studded heat shield',
  },
  {
    image:
      './assets/services-images/motorcycle-heat-shield-images/motorcycle-heat-shield-2.jpg',
    title: 'Our booth at the Leesburg Bikefest',
  },
  {
    image:
      './assets/services-images/motorcycle-heat-shield-images/motorcycle-heat-shield-3.jpeg',
    title: 'Plain heat shield',
  },
  {
    image:
      './assets/services-images/motorcycle-heat-shield-images/motorcycle-heat-shield-4.jpg',
    title: 'Plain heat shield',
  },
];

const MotorcycleHeatShields = () => {
  return (
    <>
      <div className='service-wrapper' id='motorcycle-heat-shields'>
        <h2 className='service-title'>Motorcycle Heat Shields</h2>
        <h4 className='service-description'>
          <span className='special'>Our job: </span>
          Shamrock builds a studded or plain motorcycle heat shield that
          protects your inner thighs on a long ride.
        </h4>

        <div className='flex-content-wrapper'>
          <div className='center-carousel-wrapper'>
            <ImagesCarousel imagesList={imagesList} />
            <button className='purchase-button'>
              <a
                href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f863452697a1e&mfid=1643613761569_f863452697a1e#/checkout/openButton'
                target='_blank'
                rel='noopener noreferrer'
              >
                Buy Studded Shield ($180.00)
              </a>
            </button>
            <button className='purchase-button'>
              <a
                href='https://www.paypal.com/webapps/hermes?token=7EE24934W4065725K&useraction=commit&mfid=1643613738010_f36133376c1c8'
                target='_blank'
                rel='noopener noreferrer'
              >
                Buy Plain Shield ($135.00)
              </a>
            </button>
          </div>
          <div className='quote-block'>
            <p className='quote-paragraph'>
              "We designed the heat shield for our local Harley Davidson
              dealership. They had quite a few complaints from various police
              agencies about the heat that was omitted from the engine and
              exhaust. After we designed the shield for the police motor patrol
              we soon realized that the general public had a need for the shield
              as well. We dress up their plain shield with polished chrome studs
              which match the ones used on seats and bags. The shield contains
              a&nbsp;
              <span className='special'>heat blocking reflective foil</span> and
              insulation which&nbsp;
              <span className='special'>greatly reduces the heat</span>. The
              shield is easy to install and requires no modifications to the
              motorcycle. First, you remove the seat, then place the shield down
              and align with the seat bracket. Once you reinstall seat, you will
              feel the difference and be able to&nbsp;
              <span className='special'>ride longer with greater comfort</span>.
              The outer shield cover is fabricated out of original Harley
              Davidson black material which matches the original seat. The
              shield only works with stock exhaust and seat. The shield will fit
              all baggers, softails and sportsters."
            </p>

            <p className='quote-author'>
              - <span className='special'>Randy McPherson</span>, head of
              operations
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotorcycleHeatShields;
