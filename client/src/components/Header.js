import {
  FaFlickr,
  FaFacebookSquare,
  FaYoutube,
  FaEnvelopeSquare,
  FaArrowAltCircleDown,
} from 'react-icons/fa';
import ImagesCarousel from './ImagesCarousel';

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

const Header = () => {
  return (
    <>
      <header id='home'>
        <h3>A Brief Overview</h3>
        <p>
          Hi! We are a <span className='special'> family owned business</span>
          &nbsp; specializing in automotive interiors and convertible tops&nbsp;
          <span className='special'>since 1968</span>. Have a look around!
        </p>
        <ImagesCarousel imagesList={imagesList} />
        <h3>Visit Us</h3>
        <p>
          <span className='special'>Location:</span> 2040 Northeast 154 Street,
          North Miami, Florida 33162 USA
        </p>
        <p>
          <span className='special'>Business Hours:</span> 7 AM - 5 PM Monday -
          Friday
        </p>

        <h3>Keep in Touch</h3>
        <ul>
          <li>
            <FaFlickr className='keep-in-touch-icon' /> View our Flickr photo
            gallery&nbsp;
            <a
              href='https://www.flickr.com/photos/shamrockride/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </li>
          <li>
            <FaFacebookSquare className='keep-in-touch-icon' /> Follow us on
            Facebook&nbsp;
            <a
              href='https://www.facebook.com/shamrocktrim/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </li>
          <li>
            <FaYoutube className='keep-in-touch-icon' /> Watch our YouTube
            videos&nbsp;
            <a
              href='https://www.youtube.com/c/ShamrockTrim/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </li>
          <li>
            <FaEnvelopeSquare className='keep-in-touch-icon' /> Contact us&nbsp;
            <a href='#contact'>here</a>
          </li>
        </ul>

        <div id='scroll-down-button-wrapper'>
          <a href='#about' id='scroll-down-button'>
            <FaArrowAltCircleDown  />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
