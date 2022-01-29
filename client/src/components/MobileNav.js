import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const MobileNav = () => {
  const [toggleIsOpen, setToggleIsOpen] = useState(false);

  return (
    <>
      <nav id='mobile-nav'>
        <h1>Shamrock Auto Trim</h1>
        <FaBars
          id='mobile-menu-toggle-button'
          onClick={() => setToggleIsOpen(!toggleIsOpen)}
        />
      </nav>

      {
        // (document.querySelector(
        //   '#mobile-toggle-menu'
        // ).style['transform'] = `translateX(${toggleIsOpen ? '-50%' : '100%'})`)

        // document.getElementById('#mobile-toggle-menu').style['transform'] = `translateX(50%)`
      }


    </>
  );
};

export default MobileNav;
