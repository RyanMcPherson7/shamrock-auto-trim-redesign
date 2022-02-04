import {
  FaFlickr,
  FaFacebookSquare,
  FaYoutube,
  FaEnvelopeSquare,
  FaHome,
  FaClock,
  FaPhoneSquareAlt,
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
            <p className='contact-list-item-p'>
              <span className='special'>Location:</span> 2040 NE 154 St, North
              Miami, Florida
            </p>
          </li>
          <li className='contact-list-item'>
            <FaClock className='contact-list-item-icon' />
            <p className='contact-list-item-p'>
              <span className='special'>Business Hours:</span> 7 AM - 5 PM
              Monday - Friday
            </p>
          </li>
          <li className='contact-list-item'>
            <FaEnvelopeSquare className='contact-list-item-icon' />
            <p className='contact-list-item-p'>
              <span className='special'>Email:</span> shamrocktrim@aol.com
            </p>
          </li>
          <li className='contact-list-item'>
            <FaPhoneSquareAlt className='contact-list-item-icon' />
            <p className='contact-list-item-p'>
              <span className='special'>Phone:</span> (305) 944-3621
            </p>
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
              className='contact-list-item-link'
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
              className='contact-list-item-link'
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
              className='contact-list-item-link'
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
