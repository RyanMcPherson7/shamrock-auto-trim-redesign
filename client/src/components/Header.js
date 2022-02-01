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
    title: 'NBA star Eddie Jones restoration including new convertible top replacement, leather seats, carpet and trunk',
  },
  {
    image: './assets/header-images/header-9.jpg',
    title: 'Shamrock fabricated new door panels',
  },
  {
    image: './assets/header-images/header-10.jpg',
    title: 'Shamrock recovered the new panels with leather',
  },
  {
    image: './assets/header-images/header-11.jpg',
    title: 'We fabricated new trunk panels and covered them with leather',
  },
  {
    image: './assets/header-images/header-12.jpg',
    title: 'We recovered the panels with leather and matched seat style and appearance',
  },
  {
    image: './assets/header-images/header-13.jpg',
    title: 'We built new leather upholstery with a green accent stitch',
  },
  {
    image: './assets/header-images/header-14.jpg',
    title: 'Mustang convertible top installation',
  },
  {
    image: './assets/header-images/header-15.jpg',
    title: 'This customer found this Mercedes in a barn and brought it to us for a complete interior',
  },
  {
    image: './assets/header-images/header-16.jpg',
    title: 'We also builds the shamrockride.com heat shields',
  },
  {
    image: './assets/header-images/header-17.jpg',
    title: 'We replaced the leather but also works with vinyl and cloth',
  },
  {
    image: './assets/header-images/header-18.jpg',
    title: 'We repaired the seat frame, replaced the seat foam, and built new upholstery',
  },
  {
    image: './assets/header-images/header-19.jpg',
    title: 'We build the the stay fast parking cover for the Lamborghini Murcielago',
  },
  {
    image: './assets/header-images/header-20.jpg',
    title: 'A picture from the past!',
  },
  {
    image: './assets/header-images/header-21.jpg',
    title: 'New tonneau cover',
  },
  {
    image: './assets/header-images/header-22.jpg',
    title: 'New leather upholstery',
  },
  {
    image: './assets/header-images/header-23.jpg',
    title: 'Custom motorcycle seat',
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
    title: `One of the many cars of Universal's 2Fast2Furious movie cars we built`,
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
    title: 'Lamborghini leather upholstery',
  },
  {
    image: './assets/header-images/header-32.jpg',
    title: 'Honda armrest cover restoration',
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
            <FaArrowAltCircleDown />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
