import ImagesCarousel from '../ImagesCarousel';

const ProjectBase = ({ idInput, title, jobDescription, imagesList }) => {
  return (
    <>
      <div className='service-wrapper' id={idInput}>
        <h2 className='service-title'>{title}</h2>
        <h4 className='service-description'>
          <span className='special'>Our job: </span>
          {jobDescription}
        </h4>
        <ImagesCarousel imagesList={imagesList} />
      </div>
    </>
  );
};

export default ProjectBase;
