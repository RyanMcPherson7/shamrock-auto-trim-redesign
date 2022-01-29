import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import MobileToggleMenu from './MobileToggleMenu';

const Navbar = () => {
  return (
    <>
      <MobileNav />
      <MobileToggleMenu />
      <DesktopNav />
    </>
  );
};

export default Navbar;
