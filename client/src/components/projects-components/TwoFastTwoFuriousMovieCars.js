import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-3.jpg',
    title: `2Fast2Furious main characters' cars`,
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-16.jpg',
    title: `Brian's 1999 Nissan Skyline GT-R R34`,
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-1.jpg',
    title: `Brian's 1999 Nissan Skyline GT-R R34 interior`,
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-2.jpeg',
    title: 'Cadillac driven by 2 thugs where Roman starts a small fire',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-6.jpg',
    title: `Suki's 2001 Honda s2000 cars`,
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-10.jpg',
    title: 'Honda s2000 custom seats',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-7.jpg',
    title: 'Our custom seats',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-8.jpg',
    title: `Roman's 2003 Mitsubishi Eclipse Spyder GTS before transformation`,
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-9.jpg',
    title: 'After transformation featuring Randy McPherson',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-13.jpg',
    title: 'Reupholstered door panel',
  },
  {
    image:
    './assets/projects-images/2fast2furious-movie-cars-images/movie-car-15.jpg',
    title: 'Movie ready!',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-14.jpg',
    title: 'Tyrese filming on set',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-12.jpg',
    title: `Slap Jack's 1993 Toyota Supra Turbo MK IV`,
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-11.jpg',
    title: 'Reupholstered Sparco seats',
  },
  {
    image:
      './assets/projects-images/2fast2furious-movie-cars-images/movie-car-4.jpg',
    title: `1993 Toyota Supra Turbo MK IV seats installation`,
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
