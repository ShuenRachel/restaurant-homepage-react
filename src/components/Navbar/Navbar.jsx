import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.scss";

const navItems = ["home", "about", "menu", "awards", "contact"];

const navItemsEl = navItems.map((item, index) => (
  <li key={item + index} className="p__opensans">
    <a href={`#${item}`}>{item}</a>
  </li>
));

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="Gericht Logo" />
      </div>
      <ul className="app__navbar-links">{navItemsEl}</ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setShowMenu(true);
          }}
        />
        {showMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setShowMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">{navItemsEl}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
