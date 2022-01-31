import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image:
      './assets/projects-images/nfl-chad-ochocinco-lamborghini-images/ochocinco-1.jpg',
    title: 'Finished seat/stripped seat',
  },  
  {
    image:
      './assets/projects-images/nfl-chad-ochocinco-lamborghini-images/ochocinco-2.jpg',
    title: 'Ready to be installed',
  },
  {
    image:
      './assets/projects-images/nfl-chad-ochocinco-lamborghini-images/ochocinco-3.jpg',
    title: 'Chad Ochocinco 3',
  },
  {
    image:
      './assets/projects-images/nfl-chad-ochocinco-lamborghini-images/ochocinco-4.jpg',
    title: 'Finished interior',
  },
  {
    image:
      './assets/projects-images/nfl-chad-ochocinco-lamborghini-images/ochocinco-5.jpg',
    title: 'Chad Ochocinco 5',
  },
];

const NFLChadOchocincoLamborghini = () => {
  return (
    <ProjectBase
      idInput='nfl-chad-ochocinco-lamborghini'
      title={`NFL Chad Ochicinco's Lamborghini`}
      jobDescription={`Shamrock replaced NFL superstar Chad Ochocinco's leather interior which was damaged by water.
      `}
      imagesList={imagesList}
    />
  );
};

export default NFLChadOchocincoLamborghini;
