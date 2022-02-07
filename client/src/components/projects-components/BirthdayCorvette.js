import ProjectBase from './ProjectBase';

const imagesList = [
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-6.jpg',
    title: 'Complete leather interior installation',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-19.jpg',
    title: '1962 Corvette restoration',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-1.jpg',
    title: 'Making the pattern for leather dash',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-2.jpg',
    title: 'After installing leather dash',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-3.jpg',
    title: 'Fabricating new carpet and shiftboot alongside installing sound barrier material',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-4.jpg',
    title: 'Fabricating AC vent housing',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-5.jpg',
    title: 'Covering AC vent housing with leather and installing new chrome vents',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-7.jpg',
    title: '',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-8.jpg',
    title: 'Completed custom leather trunk',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-14.jpg',
    title: 'Custom trunk storage',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-10.jpg',
    title: '',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-11.jpg',
    title: 'New leather door panel',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-12.jpg',
    title: 'Corvette crate motor',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-15.jpg',
    title: 'Dash cluster painted to match leather',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-16.jpg',
    title: 'Top of dash cluster wrapped in leather',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-17.jpg',
    title: 'Convertible top storage trimmed in leather-bound carpet',
  },
  {
    image:
      './assets/projects-images/birthday-surprise-images/birthday-surprise-18.jpg',
    title: 'Center console compartment covered in leather',
  },
];

const BirthdayCorvet = () => {
  return (
    <ProjectBase
      idInput='birthday-corvet'
      title={`72nd Birthday Surprise: a Restomod 1962 Corvette`}
      jobDescription={`Shamrock completely rebuilt a full leather interior for a Restomod 1962 Corvette which was for a father's 72nd birthday.`}
      imagesList={imagesList}
    />
  );
};

export default BirthdayCorvet;
