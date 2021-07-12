import MobileNavLinks from "./MobileNavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

import { FaWindowClose, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import MobileSearchComp from "../Search/Search";

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const hamburgerIcon = (
    <>
      <div className="back">
        <FaRegArrowAltCircleLeft onClick={() => history.goBack()} />
      </div>
      <div className="profile-container">
      <MobileSearchComp />
      </div>
      <GiHamburgerMenu
        className="hamburger"
        // size="35px"
        // color="black"
        onClick={() => setOpen(!open)}
      />
    </>
  );


  const closeIcon = (
    <>
    <FaWindowClose
      className="hamburger2"
      // color="black"
      onClick={() => setOpen(!open)}
    />
    </>
  );

  return (
    <nav className="mobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <MobileNavLinks />}
      
    </nav>
  );
}

export default MobileNavigation;
