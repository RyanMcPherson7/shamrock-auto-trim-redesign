import TwoFastTwoFuriousMovieCars from "./projects-components/TwoFastTwoFuriousMovieCars";
import BirthdayCorvet from "./projects-components/BirthdayCorvette";
import LennyKravitzCadillac from "./projects-components/LennyKravitzCadillac";
import NFLChadOchocincoLamborghini from './projects-components/NFLChadOchocincoLamborghini';
import NFLRonnieBrownChevy from "./projects-components/NFLRonnieBrownChevy";
import CorporateDesigns from "./projects-components/CorporateDesigns";

const Projects = () => {
  return (
    <>
      <div className='section-wrapper'>
        <h1 className='section-title'>Our Past Jobs</h1>
        <TwoFastTwoFuriousMovieCars />
        <BirthdayCorvet />
        <LennyKravitzCadillac />
        <NFLChadOchocincoLamborghini />
        <NFLRonnieBrownChevy />
        <CorporateDesigns />
      </div>
    </>
  );
};

export default Projects;
