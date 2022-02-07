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
              GT has something in common: a hard headliner board made out of
              cardboard or laminated fiberglass. This board is covered with a
              finished material (cloth, vinyl, suede, or leather) that matches
              the interior. This material is then laminated to a piece of foam
              so that it can be easily glued to the roof of your car. Over time,
              the foam base holding the finished material and headliner board
              together breaks down from heat and turns to dust. As a result, the
              finished material is no longer securely connected to the
              board.&nbsp;
              <span className='special'>
                Shamrock Auto Trim solves this problem
              </span>
              &nbsp;by carefully removing your car's hard headliner board,
              cleaning it with solvent, covering it with new material, and
              reinstalling the final product.
            </p>
            <p className='quote-paragraph'>
              We stock the newest materials. In most cases, you can&nbsp;
              <span className='special'>
                drop your car off in the morning and pick it up in the afternoon
              </span>
              . If you're in a hurry, you can wait 20 minutes in our comfortable
              office for us to remove the board. Afterward, you can simply leave
              with your car, go about your day, and return in the afternoon for
              us to install your newly built headliner board."
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
