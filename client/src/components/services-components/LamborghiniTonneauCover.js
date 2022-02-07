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
            <p className='quote-paragraph'>
              "When Lamborghini built the Murcielago Roadster, they had 1
              mission: build it fast! To do so, they focused entirely on engine
              performance which left no room in the engine compartment for a
              traditional folding convertible top. Their solution was to install
              a complicated Targa type top that only technicians knew how to
              operate. It was simply impractical.
            </p>
            <p className='quote-paragraph'>
              Irv David, owner of Lamborghini of Miami and Palm Beach, presented
              Shamrock with this same challenge. He told us about a story of a
              customer requesting to return his new 2006 Murcielago since he
              couldn't operate the convertible top. We went straight to the
              drawing board. We opted to not drill holes into the brand new car
              and instead took advantage of the snaps in the engine compartment
              and the lift snap on the side. After many iterations of pattern
              designs, we landed on the one! Mr. David presented his customer
              with our custom top and he couldn't believe it.&nbsp;
              <span className='special'>
                We solved this problem, whereas Lamborghini could not
              </span>
              . It was a proud moment for our business and family. We agreed to
              give Mr. David's Lamborghini dealership the exclusive right to
              sell our cover at his dealerships and online. Today, we are now
              allowed to sell directly to the public.
            </p>
            <p className='quote-paragraph'>
              We build the covers using Hartz Stayfast black cloth, a 3-ply
              composite material made of an acrylic woven outer fabric, a rubber
              inner layer, and a cotton lining. This material is used for
              building the Bentley Azure and the Lotus Elise convertible tops
              and is also water proof. Our cover has removable support inserts
              so it can be folded to fit in the front boot area. A soft cloth on
              the cover provides a layer of protection to shield the paint.
              There's also a soft pad to protect the from mirrors and paint from
              direct contact with the front straps. Our cover can be&nbsp;
              <span className='special'>installed in minutes</span>!"
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

export default LamborghiniTonneauCover;
