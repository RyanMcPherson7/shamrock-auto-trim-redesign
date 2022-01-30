import ImagesCarousel from './ImagesCarousel';

const imagesList = [
  {
    image: './assets/about/shamrock-logo.jpg',
    title: 'Our logo created in 1968',
  },
  {
    image: './assets/about/shop-car-1.jpg',
    title: 'A cool car we worked on',
  },
  {
    image: './assets/about/shop-car-2.jpg',
    title: 'A brief flash to the past',
  },
  {
    image: './assets/about/office.jpg',
    title: 'Our office interior',
  },
];

const About = () => {
  return (
    <>
      <div id='about'>
        <h1 id='about-title'>Our Story</h1>
        <div className='quote-block'>
          <p className='quote-paragraph'>
            "Shamrock Auto Trim is a small{' '}
            <span className='special'>family business</span> founded by my
            father <span className='special'>Dan McPherson</span> in 1968. He's
            a master craftsman who stills works a full day. My mother{' '}
            <span className='special'>Kathy</span> answers the phone, gives
            estimates, makes lunch, runs the office, and keeps us all in line.
            My brother <span className='special'>Lee</span> is the shop foreman
            who always knows what's going on with each job. My whole family was
            born and raised in <span className='special'>Miami</span>."
          </p>
          <p className='quote-paragraph'>
            "Recently, our previous mascot{' '}
            <span className='special'>Fraiser</span>, a Jack Russel terrier,
            sadly passed away. Fraiser was a{' '}
            <span className='special'>customer favorite</span> who came to work
            with us every day for 17 years. Fraiser even received Christmas
            cards from customers and some would{' '}
            <span className='special'>stop in just to say hello</span> to him or
            bring him a dog biscuit. Today, we have a cockapoo named{' '}
            <span className='special'>Bella</span> who loves greeting
            customers!"
          </p>
          <p className='quote-author'>
            - <span className='special'>Randy McPherson</span>, head of
            operations
          </p>
        </div>
        <ImagesCarousel imagesList={imagesList} />
        <div className='quote-block'>
          <p className='quote-paragraph'>
            "Our business is decorated with antique signs and neon clocks. Many
            of our customers have told us that our workshop feels like they have
            been transported back in time! Over the years, we've had a few
            antique cars, such as a{' '}
            <span className='special'>1935 Ford truck</span>,{' '}
            <span className='special'>1954 Packard convertible</span>,{' '}
            <span className='special'>1936 Ford Phaeton convertible</span>, and
            currently a <span className='special'>2002 Mini Cooper</span>. We
            try to keep current with the changing trends by attending SEMA,
            <span className='special'>
              Specialty Equipment Market Association
            </span>
            , which is considered to be the best automotive aftermarket and
            progressive trade show in the world."
          </p>
          <p className='quote-author'>
            - <span className='special'>Randy McPherson</span>, head of
            operations
          </p>
        </div>
        <div className='quote-block'>
          <p className='quote-paragraph'>
            "Some potential customers may be fearful when they see the variety
            and extent of our <span className='special'>custom work</span>. I
            can tell you that we are{' '}
            <span className='special'>comfortable</span> working on a Toyota
            Camry as well a brand new Ferrari. The common denominator is that
            all customers and jobs are treated with the{' '}
            <span className='special'>same level of respect</span> and{' '}
            <span className='special'>attention to detail</span>. We can build a
            <span className='special'>complete interior</span>, including new
            seat upholstery, headliner, door panels, carpet, convertible top,
            and dashboard. On the other hand, you may only need us to change one
            section on a seat or replace a headliner. I can't emphasize this
            enough, <span className='special'>no job is too big nor small</span>
            ."
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

export default About;
