import { FaBars } from 'react-icons/fa';

const MobileNav = () => {
  return (
    <nav id='mobile-nav'>
      <h1>Shamrock Auto Trim</h1>
      <FaBars id='mobile-dropdown-button' />
    </nav>
  );
};

export default MobileNav;
