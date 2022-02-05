import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image: './assets/projects-images/birthday-surprise-images/birthday-surprise-1.jpg',
    title: '',
  },
  {
    image: './assets/projects-images/birthday-surprise-images/birthday-surprise-2.jpg',
    title: '',
  },
  {
    image: './assets/projects-images/birthday-surprise-images/birthday-surprise-3.jpg',
    title: '',
  },
  {
    image: './assets/projects-images/birthday-surprise-images/birthday-surprise-4.jpg',
    title: '',
  },
  {
    image: './assets/projects-images/birthday-surprise-images/birthday-surprise-5.jpg',
    title: '',
  },
];

const BirthdayCorvet = () => {
  return (
    <ProjectBase
      idInput='birthday-corvet'
      title={`Father's 72nd Birthday Surprise - 1962 Corvette`}
      jobDescription='Shamrock tricked out a 1962 Corvette given to a father as his 90th birthday present!'
      imagesList={imagesList}
    />
  );
};

export default BirthdayCorvet;
