import { useLocation } from "react-router-dom";
import classNames from "classnames";
import { Box } from "@mui/material";

import Navbar from "../../components/Layout/Navbar";

import "./index.scss";

interface ILayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const location = useLocation();

  return (
    <Box className="layout-container">
      <Navbar />
      <Box
        className={classNames({
          "layout-content-container-home": location.pathname === "/",
          "layout-content-container-unit": location.pathname === "/unit",
          "layout-content-container-unit-detail":
            location.pathname.includes("/unit-detail"),
        })}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
