import React from "react";

import MenuItem from "./MenuItem";

import Logo from "../../assets/logo.jpg";
import "../../styles/menu.css";
import { NAVIGATION_ROUTES } from "../../constants/routes";

const Menu = () => {
  return (
    <menu className="bg_light d-flex flex-column justify-content-between flex-nowrap">
      <nav>
        <h4 className="text-uppercase text-center color_primary my-5">
          <figure className="px-4">
            <img
              src={Logo}
              alt="Logo de seguridad con el texto de Hello Encryptor"
            />
          </figure>
        </h4>
        <br />
        <ul className="d-flex flex-column overflow-auto mt-5">
          {NAVIGATION_ROUTES.map((item) => (
            <MenuItem {...item} />
          ))}
        </ul>
      </nav>
    </menu>
  );
};

export default Menu;
