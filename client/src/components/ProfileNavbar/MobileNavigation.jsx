import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className="hamburger"
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <FaWindowClose
      className="hamburger"
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <nav className="mobileNavigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  );
}

export default MobileNavigation;
