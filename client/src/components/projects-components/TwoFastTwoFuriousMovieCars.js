import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-1.jpg',
    title: 'Movie car 1',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-2.jpeg',
    title: 'Movie car 2',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-3.jpg',
    title: 'Movie car 3',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-4.jpg',
    title: 'Movie car 4',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-5.jpg',
    title: 'Movie car 5',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-6.jpg',
    title: 'Movie car 6',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-7.jpg',
    title: 'Movie car 7',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-8.jpg',
    title: 'Movie car 8',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-9.jpg',
    title: 'Movie car 9',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-10.jpg',
    title: 'Movie car 10',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-11.jpg',
    title: 'Movie car 11',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-12.jpg',
    title: 'Movie car 12',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-13.jpg',
    title: 'Movie car 13',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-14.jpg',
    title: 'Movie car 14',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-15.jpg',
    title: 'Movie car 15',
  },
];

const TwoFastTwoFuriousMovieCars = () => {
  return (
    <ProjectBase
      idInput='2fast2furious-movie-cars'
      title='2Fast2Furious Movie Cars'
      jobDescription='Shamrock built the complete interiors for all of the main character cars in the 2Fast2Furious movie.'
      imagesList={imagesList}
    />
  );
};

export default TwoFastTwoFuriousMovieCars;
