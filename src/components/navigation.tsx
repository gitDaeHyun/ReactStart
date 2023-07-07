import "./styles/navigation.css";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import NavItem from "./navItem";

function Navigation(): JSX.Element {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);
  const menu = [
    { name: "Home", address: "/" },
    { name: "All Movie", address: "/menu1" },
    { name: "Recommend", address: "/menu2" },
    { name: "ETC", address: "/menu3" },
    { name: "Account", address: "/menu4" },
  ];

  return (
    <nav className="navigation__wrapper">
      <div
        className={!menuToggle ? "burger__menu" : "x__menu"}
        onClick={() =>
          menuToggle ? setMenuToggle(false) : setMenuToggle(true)
        }
      >
        <div className="burger_line1"></div>
        <div className="burger_line2"></div>
        <div className="burger_line3"></div>
      </div>

      <div
        className={[
          "menu__box",
          !menuToggle ? "menu__box__hidden" : "menu__box__visible",
        ].join(" ")}
      >
        <div className="menu__list">
          {menu.map((data) => (
            <NavItem
              data={data}
              key={data.address}
              offNav={() => setMenuToggle(false)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);