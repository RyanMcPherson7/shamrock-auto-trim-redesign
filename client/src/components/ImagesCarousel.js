import Carousel from 'react-bootstrap/Carousel';

const ImagesCarousel = ({ imagesList }) => {
  return (
    <>
      <Carousel className='carousel-body'>
        {imagesList.map((imageData) => {
          return (
            <Carousel.Item className='carousel-item' key={imageData.image}>
              <div
                className='carousel-overlay-image'
                style={{ backgroundImage: `url(${imageData.image})` }}
              ></div>

              <Carousel.Caption>
                <h3 className='carousel-image-title'>{imageData.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImagesCarousel;
