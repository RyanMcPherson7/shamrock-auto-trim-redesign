import ImagesCarousel from '../ImagesCarousel';

const ProjectBase = ({ idInput, title, jobDescription, imagesList }) => {
  return (
    <>
      <div className='service-wrapper' id='motorcycle-seats'>
        <h2 className='service-title' id={idInput}>
          {title}
        </h2>
        <h4>
          <span className='special'>Our job: </span>
          {jobDescription}
        </h4>
        <ImagesCarousel imagesList={imagesList} />
      </div>
    </>
  );
};

export default ProjectBase;
