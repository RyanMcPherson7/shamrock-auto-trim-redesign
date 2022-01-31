import TwoFastTwoFuriousMovieCars from "./projects-components/TwoFastTwoFuriousMovieCars";
import LennyKravitzCadillac from "./projects-components/LennyKravitzCadillac";
import NFLChadOchocincoLamborghini from './projects-components/NFLChadOchocincoLamborghini';

const Projects = () => {
  return (
    <>
      <div className='section-wrapper'>
        <h1 className='section-title'>Some of our Projects</h1>
        <TwoFastTwoFuriousMovieCars />
        <LennyKravitzCadillac />
        <NFLChadOchocincoLamborghini />
      </div>
    </>
  );
};

export default Projects;
