import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image:
      './assets/projects-images/lenny-kravitz-cadillac-images/lenny-kravitz-1.jpg',
    title: 'Lenny Kravitz 1',
  },
  {
    image:
      './assets/projects-images/lenny-kravitz-cadillac-images/lenny-kravitz-2.jpg',
    title: 'Lenny Kravitz 2',
  },
  {
    image:
      './assets/projects-images/lenny-kravitz-cadillac-images/lenny-kravitz-3.jpg',
    title: 'Lenny Kravitz 3',
  },
  {
    image:
      './assets/projects-images/lenny-kravitz-cadillac-images/lenny-kravitz-4.jpg',
    title: 'Lenny Kravitz 4',
  },
  {
    image:
      './assets/projects-images/lenny-kravitz-cadillac-images/lenny-kravitz-5.jpg',
    title: 'Lenny Kravitz 5',
  },
];

const LennyKravitzCadillac = () => {
  return (
    <ProjectBase
      idInput='lenny-kravitz-cadillac'
      title={`Lenny Kravitz's Cadillac`}
      jobDescription={`Shamrock build a custom interior to match Lenny Kravitz's Cadillac's exterior.`}
      imagesList={imagesList}
    />
  );
};

export default LennyKravitzCadillac;
