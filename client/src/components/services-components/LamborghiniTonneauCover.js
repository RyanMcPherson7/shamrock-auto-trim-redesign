import ImagesCarousel from '../ImagesCarousel';

const imagesList = [
  {
    image:
      './assets/services-images/lamborghini-tonneau-cover-images/lamborghini-tonneau-cover-1.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/lamborghini-tonneau-cover-images/lamborghini-tonneau-cover-2.jpg',
    title: '',
  },
  {
    image:
      './assets/services-images/lamborghini-tonneau-cover-images/lamborghini-tonneau-cover-3.jpg',
    title: '',
  },
];

const LamborghiniTonneauCover = () => {
  return (
    <>
      <div className='service-wrapper' id='lamborghini-tonneau-cover'>
        <h2 className='service-title'>Lamborghini Tonneau Parking Cover</h2>
        <h4 className='service-description'>
          <span className='special'>Our job: </span>
          Shamrock can build the&nbsp; Lamborghini Murcielago Roadster Stay-Fast
          Tonneau Soft Parking Covers.
        </h4>
        <div className='flex-content-wrapper'>
          <div className='center-carousel-wrapper'>
            <ImagesCarousel imagesList={imagesList} />
            <button className='purchase-button'>
              <a
                href='https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f811635ae4630&mfid=1643667441055_f811635ae4630#/checkout/openButton'
                target='_blank'
                rel='noopener noreferrer'
              >
                Buy Parking Cover ($900.00)
              </a>
            </button>
          </div>

          <div className='quote-block'>
            {/* <p className='quote-paragraph'>
              "When Lamborghini built the Murcielago Roadster, they had a single
              mission, build it fast. With that in mind, their main focus was
              engine performance. Lamborghini ran out of room in the engine
              compartment for a traditional folding convertible top. They
              decided to build the convertible with a folding targa type top
              that fit in a small compartment in the front trunk. The main
              problem was that&nbsp;
              <span className='special'>
                you needed a Lamborghini technician to follow you
              </span>
              &nbsp; in his car to fold the top.
            </p> */}
            <p className='quote-paragraph'>
              "There were a few companies that tried to build a carbon fiber
              roof, but when customers gave deposits, they usually lost their
              deposit money and received nothing in return. Irv David, owner of
              Prestige Imports, now Lamborghini of Miami and Palm Beach,
              presented Shamrock with a challenge. Mr. David had a customer that
              had taken delivery of a brand new 2006 Murcielago and wanted to
              return the car as he could not work the factory top. Mr. David
              told us that the factory said there was no other top for the car.
              The first thing we realized was that we didn't want to drill into
              a brand new 2006 Lamborghini. Therefore we had to make it work
              without altering anything on the car. The original top had snaps
              in the engine compartment and a lift snap on the side. We made a
              pattern and kept changing it until we were satisfied with the
              design. Mr. David returned with the customer and they could not
              believe that&nbsp;
              <span className='special'>
                we found a solution for the problem whereas, Lamborghini could
                not
              </span>
              . It was a proud moment for our business and family. We agreed to
              give Mr. David's Lamborghini dealership the exclusive right to
              sell our cover at his dealerships as well as online. We are now
              allowed to sell directly to the public."
            </p>
            {/* <p className='quote-paragraph'>
              We build the cover using Hartz Stayfast black cloth. This material
              is a three ply composite made of an acrylic weave outer fabric, a
              rubber inner layer, and a cotton lining. This material is used as
              original equipment for the Bentley Azure and the Lotus Elise
              convertible tops. This material is waterproof. The cover has
              removable support inserts as it can be folded to fit in the front
              boot area. A soft cloth on the back side of the cover provides an
              extra layer of protection to shield the paint. We have also placed
              a soft pad to protect the front mirrors and paint from direct
              contact with the front straps. The cover can be installed in
              minutes!"
            </p> */}
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

export default LamborghiniTonneauCover;
