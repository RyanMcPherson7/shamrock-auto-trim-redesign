import ImagesCarousel from './ImagesCarousel';

const imagesList = [
  {
    image: './assets/about-images/shamrock-logo.jpg',
    title: 'Our logo was modeled after our founder, Dan McPherson',
  },
  {
    image: './assets/about-images/shop-car-1.jpg',
    title: 'Convertible top installation',
  },
  {
    image: './assets/about-images/shop-car-2.jpg',
    title: 'Our shop exterior',
  },
  {
    image: './assets/about-images/office.jpg',
    title: 'Our office interior',
  },
  {
    image: './assets/about-images/dan-mcpherson.jpg',
    title: 'Dan McPherson, founder of Shamrock Auto Trim',
  },
];

const About = () => {
  return (
    <>
      <div id='about' className='section-wrapper'>
        <h1 className='section-title'>Our Story</h1>
        <ImagesCarousel imagesList={imagesList} />

        <div className='quote-block'>
          <p className='quote-paragraph'>
            "Shamrock Auto Trim is a small&nbsp;
            <span className='special'>family business</span> founded by my
            father <span className='special'>Dan McPherson</span> in 1968. He's
            a master craftsman who stills works a full day. My mother&nbsp;
            <span className='special'>Kathy</span> answers the phone, gives
            estimates, makes lunch, runs the office, and keeps us all in line.
            My brother <span className='special'>Lee</span> is the shop foreman
            who always knows what's going on with each job. My whole family was
            born and raised in <span className='special'>Miami</span>.
          </p>
          <p className='quote-paragraph'>
            Recently, our previous mascot Fraiser, a Jack Russel terrier, sadly
            passed away. Fraiser was a&nbsp;
            <span className='special'>customer favorite</span> who came to work
            with us every day for 17 years. Fraiser even received Christmas
            cards from customers and some would&nbsp;
            <span className='special'>stop in just to say hello</span> to him or
            bring him a dog biscuit. Today, we have a cockapoo named Bella who
            loves greeting customers!"
          </p>
          <p className='quote-author'>
            - <span className='special'>Randy McPherson</span>, head of
            operations
          </p>
        </div>

        <div className='quote-block'>
          <p className='quote-paragraph'>
            "Our business is decorated with antique signs and neon clocks. Many
            of our customers have told us that our workshop feels like they have
            been transported back in time! Over the years, we've had a few
            antique cars, such as a 1935 Ford truck, 1954 Packard convertible,
            1936 Ford Phaeton convertible, and currently a 2002 Mini Cooper. We
            try to keep current with the changing trends by attending
            SEMA,&nbsp;
            <span className='special'>
              Specialty Equipment Market Association
            </span>
            , which is considered to be the best automotive aftermarket and
            progressive trade show in the world."
          </p>
          <p className='quote-author'>
            - <span className='special'>Lee McPherson</span>, shop foreman
          </p>
        </div>
        <div className='quote-block'>
          <p className='quote-paragraph'>
            "Some potential customers may be fearful when they see the variety
            and extent of our <span className='special'>custom work</span>. I
            can tell you that we are&nbsp;
            <span className='special'>comfortable</span> working on a Toyota
            Camry as well a brand new Ferrari. The common denominator is that
            all customers and jobs are treated with the&nbsp;
            <span className='special'>
              same level of respect and attention to detail
            </span>
            . We can build a&nbsp;
            <span className='special'>complete interior</span>, including new
            seat upholstery, headliner, door panels, carpet, convertible top,
            and dashboard. On the other hand, you may only need us to change one
            section on a seat or replace a headliner. I can't emphasize this
            enough, <span className='special'>no job is too big nor small</span>
            ."
          </p>
          <p className='quote-author'>
            - <span className='special'>Dan McPherson</span>, founder
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
