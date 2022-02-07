import ImagesCarousel from '../ImagesCarousel';

const imagesList = [
  {
    image: './assets/services-images/headliners-images/headliner-1.jpg',
    title: 'Headliner board recovered using new material',
  },
];

const Headliners = () => {
  return (
    <>
      <div className='service-wrapper' id='headliners'>
        <h2 className='service-title'>Headliners</h2>
        <h4 className='service-description'>
          <span className='special'>Our job: </span>
          Shamrock can&nbsp; remove your headliner board and recover it with new
          material in 1 day.
        </h4>
        <div className='flex-content-wrapper'>
          <div className='center-carousel-wrapper'>
            <ImagesCarousel imagesList={imagesList} />
          </div>

          <div className='quote-block'>
            <p className='quote-paragraph'>
              "Almost every automobile, from a Kia Rio to a Bentley Continental
              GT has something in common. The car manufacturers have decided to
              install a hard headliner board, which is made out of cardboard or
              laminated fiberglass. The next step is to cover this board with a
              finished material that matches the interior. They can use cloth,
              vinyl, suede or leather. In order to secure this material and
              provide a good surface to glue to, they laminate the finished
              material to a piece of foam. Then they glue the two pieces to the
              hard headliner board. Over time, the foam base that is between the
              finished material and the headliner board breaks down from heat
              and turns to dust. No one can secure the finished material to the
              broken down foam. The solution is to remove the trim panels and
              carefully take the hard headliner board out of the car. Then the
              board is cleaned and prepared with solvent. The next step is to
              glue new finished material and foam to the hard headliner board.
            </p>
            <p className='quote-paragraph'>
              "Shamrock stocks the <span className='special'>new materials</span>
              &nbsp; and in most cases, you can&nbsp;
              <span className='special'>
                drop off your car in the morning and pick it up in the afternoon
              </span>
              . Another option is to come in the morning, wait 20 minutes in our
              air conditioned office with internet, and have us remove the hard
              headliner board. Leave with your car and then you will return in
              the afternoon for us to install your hard headliner board with the
              new material."
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

export default Headliners;
