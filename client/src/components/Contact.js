import {
  FaFlickr,
  FaFacebookSquare,
  FaYoutube,
  FaEnvelopeSquare,
  FaHome,
  FaClock,
  FaPhoneSquareAlt,
  FaInstagramSquare,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <div className='section-wrapper'>
        <h1 className='section-title' id='contact'>
          Contact
        </h1>
        <p id='contact-grabber'>
          Like what you see? <span className='special'>Hire us</span>!
        </p>

        <h3 className='service-title'>Contact Info</h3>
        <ul className='contact-list'>
          <li className='contact-list-item'>
            <FaHome className='contact-list-item-icon' />
            <span className='special'>Location:</span> &nbsp;2040 NE 154 St,
            North Miami, FL 33162
          </li>
          <li className='contact-list-item'>
            <FaClock className='contact-list-item-icon' />
            <span className='special'>Business Hours:</span> &nbsp;7 AM - 5 PM
            Monday - Friday
          </li>
          <li className='contact-list-item'>
            <FaEnvelopeSquare className='contact-list-item-icon' />
            <span className='special'>Email:</span> &nbsp;shamrocktrim@aol.com
          </li>
          <li className='contact-list-item'>
            <FaPhoneSquareAlt className='contact-list-item-icon' />
            <span className='special'>Phone:</span> &nbsp;(305) 944-3621
          </li>
        </ul>

        <h3 className='service-title'>Keep in Touch</h3>
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
            <FaYoutube className='contact-list-item-icon' /> Watch our YouTube
            videos&nbsp;
            <a
              href='https://www.youtube.com/c/ShamrockTrim/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </li>
          <li className='contact-list-item'>
            <FaInstagramSquare className='contact-list-item-icon' /> Follow us
            on Instagram&nbsp;
            <a
              href='https://www.instagram.com/shamrockautotrim/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </li>
          <li className='contact-list-item'>
            <FaFacebookSquare className='contact-list-item-icon' /> Follow us on
            Facebook&nbsp;
            <a
              href='https://www.facebook.com/shamrocktrim/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
