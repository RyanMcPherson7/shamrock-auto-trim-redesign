import {
  FaFlickr,
  FaFacebookSquare,
  FaYoutube,
  FaEnvelopeSquare,
  FaArrowAltCircleDown,
  FaInstagramSquare,
  FaHome,
  FaClock,
} from 'react-icons/fa';
import ImagesCarousel from './ImagesCarousel';

const imagesList = [
  {
    image: './assets/header-images/header-1.jpg',
    title: 'Dan McPherson, founder of Shamrock Auto Trim',
  },
  {
    image: './assets/header-images/header-2.jpeg',
    title: 'A family business since 1968',
  },
  {
    image: './assets/header-images/header-3.jpeg',
    title: `This Mini Cooper's interior did not match the exterior`,
  },
  {
    image: './assets/header-images/header-4.jpg',
    title: 'Original plain black Mini Cooper interior before we transformed it',
  },
  {
    image: './assets/header-images/header-5.jpg',
    title: 'Converted pieces to red carbon fiber vinyl',
  },
  {
    image: './assets/header-images/header-6.jpg',
    title: 'Installed new leather upholstery and recovered the door panels',
  },
  {
    image: './assets/header-images/header-7.jpg',
    title: 'Closeup of transformed Ferrari',
  },
  {
    image: './assets/header-images/header-8.jpg',
    title:
      'NBA star Eddie Jones restoration including new convertible top and interior',
  },
  {
    image: './assets/header-images/header-9.jpg',
    title: 'We fabricated new door panels',
  },
  {
    image: './assets/header-images/header-10.jpg',
    title: 'We recovered the new panels with leather',
  },
  {
    image: './assets/header-images/header-11.jpg',
    title: 'Before our transformation',
  },
  {
    image: './assets/header-images/header-12.jpg',
    title: 'After transformation',
  },
  {
    image: './assets/header-images/header-13.jpg',
    title:
      'We built new leather upholstery with a green accent stitch for Dodge Viper',
  },
  {
    image: './assets/header-images/header-14.jpg',
    title: 'Mustang convertible top installation',
  },
  {
    image: './assets/header-images/header-15.jpg',
    title:
      'A customer found this Mercedes in a barn and brought it to us for a complete interior restoration',
  },
  {
    image: './assets/header-images/header-17.jpg',
    title: 'Before transformation',
  },
  {
    image: './assets/header-images/header-18.jpg',
    title: 'After transformation with new leather upholstery',
  },
  {
    image: './assets/header-images/header-16.jpg',
    title: 'We also build the shamrockride.com heat shields',
  },
  {
    image: './assets/header-images/header-19.jpg',
    title:
      'We build the the stay fast parking cover for the Lamborghini Murcielago',
  },
  {
    image: './assets/header-images/header-20.jpg',
    title: 'A picture from the past!',
  },
  {
    image: './assets/header-images/header-21.jpg',
    title: 'New Tonneau cover and convertible top installations',
  },
  {
    image: './assets/header-images/header-22.jpg',
    title: 'New leather upholstery',
  },
  {
    image: './assets/header-images/header-23.jpg',
    title: 'Custom motorcycle seats',
  },
  {
    image: './assets/header-images/header-24.jpg',
    title: 'Boat instrument panel fabrication',
  },
  {
    image: './assets/header-images/header-25.jpg',
    title: 'Antique bench before restoration',
  },
  {
    image: './assets/header-images/header-26.jpg',
    title: 'Antique bench after restoration',
  },
  {
    image: './assets/header-images/header-27.jpeg',
    title: `One of the many Universal's 2Fast2Furious movie car interiors that we built`,
  },
  {
    image: './assets/header-images/header-28.jpg',
    title: 'Corvette convertible top installation',
  },
  {
    image: './assets/header-images/header-29.jpg',
    title: 'Antique Mercedes convertible interior restoration',
  },
  {
    image: './assets/header-images/header-30.jpg',
    title: 'New upholstery and loop carpet installation',
  },
  {
    image: './assets/header-images/header-31.jpg',
    title: 'Custom Lamborghini leather upholstery',
  },
  {
    image: './assets/header-images/header-32.jpg',
    title: 'Honda armrest cover restoration',
  },
];

const Header = () => {
  return (
    <>
      <header id='home' className='section-wrapper'>
        <h2 className='service-title' id='header-opener-title'>
          Shamrock Auto Trim
        </h2>
        <p className='service-description'>
          Hi! We are a <span className='special'> family owned business</span>
          &nbsp;specializing in automotive interiors and convertible tops&nbsp;
          <span className='special'>since 1968</span>. Have a look around!
        </p>

        <div className='grid-info-carousel-wrapper'>
          <div className='grid-carousel'>
            <ImagesCarousel imagesList={imagesList} />
          </div>

          <div className='grid-info'>
            <h2 className='service-title'>Visit Us</h2>
            <ul className='contact-list'>
              <li className='contact-list-item'>
                <FaHome className='contact-list-item-icon' />
                <div>
                  <span className='special'>Location:</span>&nbsp;2040 NE 154
                  St, North Miami, FL 33162
                </div>
              </li>
              <li className='contact-list-item'>
                <FaClock className='contact-list-item-icon' />
                <div>
                  <span className='special'>Business Hours:</span>&nbsp;7 AM - 5
                  PM Monday - Friday
                </div>
              </li>
            </ul>

            <h2 className='service-title'>Keep in Touch</h2>
            <ul className='contact-list'>
              <li className='contact-list-item'>
                <FaFlickr className='contact-list-item-icon' /> View our Flickr
                photo gallery&nbsp;
                <a
                  href='https://www.flickr.com/photos/shamrockride/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  here
                </a>
              </li>
              <li className='contact-list-item'>
                <FaYoutube className='contact-list-item-icon' /> Watch our
                YouTube videos&nbsp;
                <a
                  href='https://www.youtube.com/c/ShamrockTrim/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  here
                </a>
              </li>
              <li className='contact-list-item'>
                <FaInstagramSquare className='contact-list-item-icon' /> Follow
                us on Instagram&nbsp;
                <a
                  href='https://www.instagram.com/shamrockautotrim/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  here
                </a>
              </li>
              <li className='contact-list-item'>
                <FaFacebookSquare className='contact-list-item-icon' /> Follow
                us on Facebook&nbsp;
                <a
                  href='https://www.facebook.com/shamrocktrim/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  here
                </a>
              </li>
              <li className='contact-list-item'>
                <FaEnvelopeSquare className='contact-list-item-icon' /> Contact
                us&nbsp;
                <a href='#contact'>here</a>
              </li>
            </ul>
          </div>
        </div>

        {/* <div id='scroll-down-button-wrapper'>
          <a href='#about' id='scroll-down-button'>
            <FaArrowAltCircleDown />
          </a>
        </div> */}
      </header>
    </>
  );
};

export default Header;
