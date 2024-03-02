import { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { ROUTES_PATHS } from "../../routes/constants/routePaths";
import { useAuth } from "../../utils/useAuth";

export const SideBar: React.FC = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("");

  const menuItems = ROUTES_PATHS.filter((route) => route.isPrivate).map((route) => ({
    label: route.label,
    name: route.title,
    path: route.path,
    icon: route.icon,
  }));

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleMenuItemClick = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
  };

  useEffect(() => {
    const pathname = location.pathname;
    const activeRoute = ROUTES_PATHS.find((route) =>
      pathname.startsWith(route.path)
    );

    if (activeRoute) {
      setActiveItem(activeRoute.title);
    }
  }, [location.pathname]);

  return (
    <Sidebar>
      <div className="container-logo">
        <img
          src="assets/erplogo.png"
          alt="Logo"
          style={{ maxWidth: "50%", height: "auto" }}
        />{" "}
      </div>

      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            onClick={() => handleMenuItemClick(item)}
            key={item.name}
            className={`${activeItem === item.name ? "activated" : ""}`}
          >
            <FontAwesomeIcon icon={item.icon as IconProp} /> {item.label}
          </MenuItem>
        ))}
        <MenuItem onClick={handleLogout}>
          {" "}
          <FontAwesomeIcon icon={faRightFromBracket} />
          Sair
        </MenuItem>
      </Menu>
      
    </Sidebar>
  );
};
