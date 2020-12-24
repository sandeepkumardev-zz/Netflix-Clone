import React from "react";
// import logo from "./download.jpg";
// import smile from "./download (1).jpg";
import "./nav.css";

function Nav() {
  const [show, handleshow] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      NETFLIX
      {/* <img className="nav__logo" src={logo} alt="" /> */}
      {/* <img className="nav__smile" src={smile} alt="" /> */}
    </div>
  );
}

export default Nav;
