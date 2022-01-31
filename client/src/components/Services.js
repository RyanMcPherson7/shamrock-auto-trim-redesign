import ConvertibleTops from "./services-components/ConvertibleTops";
import Headliners from "./services-components/Headliners";
import Seats from "./services-components/Seats";
import MotorcycleSeats from "./services-components/MotorcycleSeats";
import LamborghiniTonneauCover from "./services-components/LamborghiniTonneauCover";
import MotorcycleHeatShields from "./services-components/MotorcycleHeatShields";

const Services = () => {
  return (
    <>
      <div className='section-wrapper'>
        <h1 className='section-title'>What We Do</h1>
        <ConvertibleTops />
        <Headliners />
        <Seats />
        <MotorcycleSeats />
        <LamborghiniTonneauCover />
        <MotorcycleHeatShields />
      </div>
    </>
  );
};

export default Services;
