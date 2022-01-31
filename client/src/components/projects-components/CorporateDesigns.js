import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image: './assets/projects-images/corporate-designs-images/corporate-1.jpg',
    title: 'JL Audio Mustang leather interior',
  },
  {
    image: './assets/projects-images/corporate-designs-images/corporate-2.jpg',
    title: 'JL Audio CES Mustang',
  },
  {
    image: './assets/projects-images/corporate-designs-images/corporate-3.jpg',
    title: 'JL Audio Mustang leather dash',
  },
  {
    image: './assets/projects-images/corporate-designs-images/corporate-4.jpeg',
    title: 'Cigarette boat racing crew truck',
  },
  {
    image: './assets/projects-images/corporate-designs-images/corporate-5.jpeg',
    title: 'Cigarette embroidery read seat',
  },
  {
    image: './assets/projects-images/corporate-designs-images/corporate-6.jpeg',
    title: 'Cigarette crew truck front seats',
  },
  {
    image: './assets/projects-images/corporate-designs-images/corporate-7.jpg',
    title: 'Cigarette race team crew truck',
  },
  {
    image: './assets/projects-images/corporate-designs-images/corporate-8.jpg',
    title: 'Cigarette 2-tone upholstery',
  },
];

const CorporateDesigns = () => {
  return (
    <ProjectBase
      idInput='corporate-designs'
      title='Corporate Designs'
      jobDescription='Shamrock has worked with a number of companies to infuse branding into the overall design.'
      imagesList={imagesList}
    />
  );
};

export default CorporateDesigns;
